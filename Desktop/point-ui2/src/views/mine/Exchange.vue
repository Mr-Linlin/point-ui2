<template>
  <div class="flex-col page">
    <navbar title="积分兑换"></navbar>
    <!--    <div class="flex-col header">
      <div class="justify-center group_2">
        <img
          @click="handleNav"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16444602414285520398.png"
          class="image_3"
        />
        <span>积分兑换</span>
      </div>
    </div>-->
    <div class="flex-col group_3">
      <div class="flex-col section_1">
        <div class="flex-col group_4">
          <div class="flex-col section_2">
            <span class="text_2">我的积分</span>
            <div class="flex-col text-wrapper_1">
              <span class="text_3">{{ userData.integral }}</span>
            </div>
          </div>
          <div class="flex-col section_3">
            <span class="text_4">兑换GS</span>
            <div class="flex-row group_5">
              <div class="flex-row section_4">
                <span class="text_5">积分</span>
                <img
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16444602414271274652.png"
                  class="image_4"
                />
                <span class="text_6">G S</span>
                <div class="section_5"></div>
              </div>
              <div class="flex-col group_6">
                <div class="justify-between section_6">
                  <span class="text_7">
                    <input
                      @input="changeIntegral"
                      v-model="convert"
                      placeholder="请输入积分"
                      class="input-1"
                      type="number"
                    />
                  </span>
                  <span @click="handleAll" class="text_8">全部兑换</span>
                </div>
                <div class="flex-col text-wrapper_2">
                  <span class="text_9">{{ gsNum }}</span>
                </div>
              </div>
            </div>
            <div class="flex-row group_7">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16445650737340834699.png"
                class="image_5"
              />
              <span class="text_10">积分兑换GS比例{{ this.rate }}:1</span>
            </div>
          </div>
        </div>
        <!--        <div  class="flex-col items-center button">
          <span>确定兑换</span>
        </div>-->
        <v-btn
          :disabled="disabled || userData.integral === '0'"
          @click="handleTrade"
          class="submit-btn"
          color="#FF8F4E"
          >确定兑换</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import { showGs, changeGs, showGsRate } from "../../service/user.js";
import { Toast } from "vant";
import { navbar } from "../../mixins/navbar";
export default {
  mixins: [navbar],
  data() {
    return {
      userData: {},
      convert: "",
      gsNum: "",
      disabled: false,
      rate: "",
    };
  },
  created() {
    this.getData();
    this.getGsRate();
  },
  methods: {
    async getGsRate() {
      let res = await showGsRate();
      if (res.code === 200) {
        this.rate = Number(res.data.rate).toFixed(2);
        console.log(this.rate);
      }
    },
    handleAll() {
      this.convert = this.userData.integral;
      this.changeIntegral();
    },
    getData() {
      showGs().then((e) => {
        this.userData = e.data;
        // console.log(e.data.integral);
      });
    },
    changeIntegral() {
      this.gsNum = (this.convert / this.rate).toFixed(2);
    },
    testNumber(num) {
      let reg = /^\+?[1-9]\d*$/;
      return reg.test(num);
    },
    // 提交
    handleTrade() {
      if (this.disabled) {
        return;
      }
      this.disabled = true;
      if (!this.testNumber(this.convert)) {
        this.disabled = false;
        Toast("请输入正确积分");
        return;
      }
      if (!this.gsNum || this.gsNum === "0.00") {
        this.disabled = false;
        Toast("请输入正确积分");
        return;
      }
      if (this.convert <= 0) {
        this.disabled = false;
        Toast("请输入正确积分");
        return;
      }

      changeGs(this.convert * 1)
        .then(() => {
          this.getData();
          Toast.success("兑换成功");
          setTimeout(() => {
            this.$router.replace("/mine");
          }, 1000);
        })
        .catch(() => {
          this.disabled = false;
        });
    },
  },
};
</script>

<style scoped lang="css">
@import url("../../style/public.css");
.page {
  background-color: rgb(247, 249, 255);
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.submit-btn {
  color: #fff !important;
  height: 3.38rem;
  font-size: 1.15rem;
  font-weight: 500;
  border-radius: 0.46rem 0.46rem 0.46rem 0.46rem;
  margin-left: 0;
  padding-right: 0;
  padding-left: 0;
  margin-right: 0;
}
.header {
  padding: 0.75rem 0.91rem 0.69rem 1rem;
  background-color: rgb(249, 251, 255);
  height: 5.5rem;
}
.group_3 {
  padding-bottom: 0.34rem;
  flex: 1 1 auto;
  overflow-y: auto;
}
.group {
  padding-left: 0.31rem;
  color: rgb(26, 26, 28);
  font-size: 0.75rem;
  line-height: 0.56rem;
  white-space: nowrap;
}
.group_2 {
  margin-top: 1.38rem;
  padding: 0.19rem 0 0.25rem;
  color: rgb(26, 26, 28);
  font-size: 1.06rem;
  line-height: 1rem;
  white-space: nowrap;
  position: relative;
}
.section_1 {
  padding: 0 1rem 22.16rem;
  background-color: rgb(247, 249, 255);
}
.section_7 {
  margin-top: 0.094rem;
  align-self: center;
  background-color: rgb(26, 26, 28);
  border-radius: 0.16rem;
  width: 5.63rem;
  height: 0.19rem;
}
.text-wrapper {
  padding: 0.5rem 0 0.31rem;
  border-radius: 0.66rem;
  overflow: hidden;
  width: 3.38rem;
  height: 1.31rem;
}
.group_1 {
  align-self: center;
}
.input-1 {
  line-height: 1;
  height: 3.69rem;
  font-size: 1.08rem;
  font-weight: 500;
  color: #1a1b1c;
}
/* .input-1::placeholder{


} */
.image_3 {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1.38rem;
  height: 1.38rem;
}
.group_4 {
  padding: 1rem 0 1.88rem;
}
.button {
  padding: 0.94rem 0 0.94rem;
  color: rgba(255, 255, 255, 0.94);
  font-size: 0.94rem;
  line-height: 0.88rem;
  white-space: nowrap;
  background-color: rgb(255, 142, 77);
  border-radius: 0.38rem;
  box-shadow: 0px 0.63rem 1.25rem rgba(255, 143, 78, 0.17);
}
.image {
  width: 1.13rem;
  height: 0.69rem;
}
.image_1 {
  margin-left: 0.31rem;
  width: 0.88rem;
  height: 0.63rem;
}
.image_2 {
  margin-left: 0.31rem;
  width: 1.53rem;
  height: 0.72rem;
}
.section_2 {
  padding: 1.16rem 1rem 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.25rem;
  box-shadow: 0px 0.5rem 1rem rgba(188, 153, 133, 0.07);
}
.section_3 {
  margin-top: 1rem;
  padding: 1.16rem 1rem 1.06rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.25rem;
  box-shadow: 0px 0.5rem 1rem rgba(188, 153, 133, 0.07);
}
.text_2 {
  color: rgb(26, 26, 28);
  font-weight: 500;
  font-size: 1.23rem;
  line-height: 0.94rem;
  white-space: nowrap;
}
.text-wrapper_1 {
  margin-top: 0.53rem;
  padding: 0.28rem 0 0.34rem;
  color: rgb(26, 26, 28);
  font-size: 1.31rem;
  line-height: 0.97rem;
  white-space: nowrap;
  overflow: hidden;
  height: 1.56rem;
}
.text_4 {
  margin-left: 0.063rem;
  color: rgb(26, 26, 28);
  font-size: 1.23rem;
  font-weight: bold;
  line-height: 0.94rem;
  white-space: nowrap;
}
.group_5 {
  margin-top: 0.78rem;
}
.group_7 {
  margin-top: 0.69rem;
  padding: 0 2.69rem;
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.75rem;
  line-height: 0.69rem;
  white-space: nowrap;
}
.text_3 {
  margin-left: 0.094rem;
  font-size: 1.62rem;
  font-weight: 500;
}
.section_4 {
  padding-left: 0.59rem;
  background-color: rgb(247, 250, 255);
  width: 2.69rem;
  height: 7.38rem;
  position: relative;
}
.group_6 {
  flex: 1 1 auto;
}
.image_5 {
  border-radius: 0.38rem;
  width: 0.92rem;
  height: 0.92rem;
}
.text_10 {
  margin-left: 0.53rem;
  font-size: 0.92rem;
  line-height: 0.92rem;
  font-weight: 400;
}
.text_5 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.75rem;
  line-height: 0.69rem;
  white-space: nowrap;
  position: absolute;
  top: 1.56rem;
  left: 50%;
  transform: translateX(-50%);
}
.image_4 {
  border-radius: 1rem;
  filter: drop-shadow(0px 0.063rem 0.063rem rgba(0, 0, 0, 0.11));
  width: 1.23rem;
  height: 1.23rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.text_6 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.75rem;
  line-height: 0.56rem;
  white-space: nowrap;
  position: absolute;
  bottom: 1.56rem;
  left: 50%;
  transform: translateX(-50%);
}
.section_5 {
  background-color: rgb(225, 234, 234);
  overflow: hidden;
  width: 0.031rem;
  height: 7.38rem;
  position: absolute;
  right: 0;
  bottom: 0;
}
.section_6 {
  height: 3.69rem;
  padding: 0rem 0.59rem 0rem 0.78rem;
  background-color: rgb(247, 250, 255);
  border-bottom: solid 0.063rem rgb(225, 234, 234);
  align-items: center;
}
.text-wrapper_2 {
  padding: 1.19rem 0 1.19rem;
  color: rgb(255, 142, 77);
  font-size: 0.88rem;
  height: 3.69rem;
  white-space: nowrap;
  background-color: rgb(247, 250, 255);
}
.text_7 {
  color: rgb(26, 26, 28);

  white-space: nowrap;
  font-size: 1.08rem;
}
.text_8 {
  color: rgb(86, 122, 239);
  font-size: 0.92rem;
  font-weight: 400;
  white-space: nowrap;
}
.text_9 {
  margin-left: 0.78rem;
  font-size: 1.08rem;
  font-weight: 500;
}
</style>
