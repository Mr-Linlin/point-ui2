<template>
  <div class="flex-col page">
    <!-- <div class="flex-col header">
      <img
        @click="handleNav"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16444602425202046922.png"
        class="image_1 image_2"
      />
    </div> -->
    <div class="flex-col group_1">
      <div class="flex-col items-center section_1">
        <div class="flex-row section_2">
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16444602424899338466.png"
            class="image_1"
          />
          <span class="text_1">积分兑换成功</span>
        </div>
      </div>
      <div class="flex-col group_2">
        <div class="flex-col section_3">
          <span class="text_2">微信账户</span>
          <div class="justify-between group_3 between">
            <span class="text_3">支出积分微信号</span>
            <span class="text_4">{{ data.nickname }}</span>
          </div>
          <div class="justify-between group_4 between">
            <span class="text_5">支出积分数量</span>
            <span class="text_6">{{ data.integral }}</span>
          </div>
          <div class="justify-between group_4 between">
            <span class="text_5">得到Gs Spark号</span>
            <span class="text_6">{{ username }}</span>
          </div>
        </div>
        <div class="flex-col section_4">
          <span class="text_7">兑换成功</span>
          <!-- <div class="justify-between group_5 between">
            <span class="text_8">积分用户</span>
            <span class="text_9">{{data.gs_username}}</span>
          </div> -->
          <!-- <div class="justify-between group_6 between">
            <span class="text_10">用户UID</span>
            <span class="text_11">0</span>
          </div> -->
          <!-- <div class="justify-between group_7 between">
            <span class="text_12">GS初始</span>
            <span class="text_13">{{data.before_gs}}</span>
          </div> -->
          <div class="justify-between group_8 between">
            <span class="text_14">所得GS</span>
            <span class="text_15">+{{ data.gs_integral }}</span>
          </div>
          <!-- <div class="justify-between group_9 between">
            <span class="text_16">GS交易后数量</span>
            <span class="text_17">{{data.after_gs}}</span>
          </div> -->
        </div>
        <div class="flex-col section_5">
          <div class="justify-between between">
            <span class="text_18">积分GS汇率</span>
            <span class="text_19">{{ data.gs_rate }}:1</span>
          </div>
          <div class="justify-between group_11 between">
            <span class="text_20">兑换时间</span>
            <span class="text_21">{{ data.created_at }}</span>
          </div>
        </div>
        <!-- <div class="section_6"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { integralDetail } from "@/service/user";
export default {
  name: "MineDetails",
  data() {
    return {
      data: {},
      id: "",
      username:""
    };
  },
  created() {
    console.log(this.$route);
    this.id = this.$route.query.id;
    this.getDetail();
    this.username = localStorage.getItem("username");


    // localStorage.setItem('openId','od5x05d7zeqVeoWwGOIWNICKmnbk')
    // localStorage.setItem('username','12212212241')
    // localStorage.setItem('token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImN0eSI6ImFwcGxpY2F0aW9uXC9qc29uIn0.eyJhdWQiOlsiaHR0cHM6XC9cL21hbGwuc2FueGlhbmNoZW5nLmNvbSJdLCJleHAiOjE2NDQ2NDM0MTgsImp0aSI6ImFiY2QxMjM0NTY3ODkiLCJpYXQiOjE2NDQ1NTcwMTgsImlzcyI6Imh0dHBzOlwvXC9waGFsY29uLmlvIiwibmJmIjoxNjQ0NTU2OTU4LCJzdWIiOiJteSBzdWJqZWN0IGZvciB0aGlzIGNsYWltIn0.5mbpKzk6i3fCe8fzA9vH9Y9755OxWFVMpcaX13G_pbsKPoV0s9UPWa3V_l5aJwyLOZJOSqkL1VMLW4MFov3fjA')
  },
  methods: {
    async getDetail() {
      console.log(this.id);
      let res = await integralDetail(this.id);
      this.data = res.data;
    },
    handleNav() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="less">
.image_1 {
  width: 1.38rem;
  height: 1.38rem;
}
.page {
  background-color: rgb(247, 249, 255);
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.header {
  padding: 0.75rem 0.91rem 0 1rem;
  color: rgb(255, 255, 255);
  font-size: 0.75rem;
  line-height: 0.56rem;
  white-space: nowrap;
  background-color: rgb(255, 142, 77);
  height: 2.81rem;
  .nav-wrap {
    display: flex;
    justify-content: space-between;
  }
}
.group_1 {
  flex: 1 1 auto;
  overflow-y: auto;
}
.group {
  padding-left: 0.31rem;
}
// .image_2 {
//   // margin-top: 1.38rem;
// }
.section_1 {
  // display: flex;
  // align-items: center;
  padding: 0.69rem 0 1.88rem;
  color: rgb(255, 255, 255);
  font-size: 1.13rem;
  line-height: 1.06rem;
  white-space: nowrap;
  background-color: rgb(255, 142, 77);
}
.group_2 {
  padding: 1.25rem 1rem 0.34rem;
}
.text-wrapper {
  padding: 0.5rem 0 0.31rem;
  border-radius: 0.66rem;
  overflow: hidden;
  width: 3.38rem;
  height: 1.31rem;
}
.image {
  margin: 0.25rem 0 0.31rem;
  width: 4.16rem;
  height: 0.75rem;
}
.section_2 {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  box-shadow: 0px 0.5rem 1rem rgba(188, 153, 133, 0.07);
  // background: red;
}
.section_3 {
  padding: 1.13rem 0.72rem 1.16rem 1.03rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.25rem;
  box-shadow: 0px 0.5rem 1rem rgba(188, 153, 133, 0.07);
  overflow: hidden;
  // height: 7.06rem;
}
.section_4 {
  margin-top: 1.25rem;
  padding: 1.16rem 0.84rem 1.09rem 1.03rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.25rem;
  box-shadow: 0px 0.5rem 1rem rgba(188, 153, 133, 0.07);
  overflow: hidden;
  // height: 12.88rem;
}
.section_5 {
  margin-top: 1.25rem;
  padding: 1.06rem 0.72rem 1.09rem 1.03rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.25rem;
  box-shadow: 0px 0.5rem 1rem rgba(188, 153, 133, 0.07);
  overflow: hidden;
  height: 4.88rem;
}
.section_6 {
  margin-top: 13.53rem;
  align-self: center;
  background-color: rgb(26, 26, 28);
  border-radius: 0.16rem;
  width: 5.63rem;
  height: 0.19rem;
}
.text_1 {
  margin: 0.16rem 0 0.22rem 0.66rem;
}
.text_2 {
  color: rgb(26, 26, 28);
  font-size: 1rem;
  line-height: 0.94rem;
  white-space: nowrap;
}
.group_3 {
  margin-top: 1.19rem;
}
.group_4 {
  margin-top: 1.19rem;
}
.text_7 {
  color: rgb(26, 26, 28);
  font-size: 1rem;
  line-height: 0.94rem;
  white-space: nowrap;
}
.group_5 {
  margin-top: 1.19rem;
}
.group_6 {
  margin-top: 1.19rem;
}
.group_7 {
  margin-top: 1.19rem;
}
.group_8 {
  margin-top: 1.19rem;
}
.group_9 {
  margin-top: 1.25rem;
}
.group_11 {
  margin-top: 1.19rem;
}
.text_3 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
}
.text_4 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
}
.text_5 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
}
.text_6 {
  margin-right: 0.22rem;
  margin-top: 0.063rem;
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.59rem;
  white-space: nowrap;
}
.text_8 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
}
.text_9 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
}
.text_10 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
}
.text_11 {
  margin: 0.063rem 0 0.13rem;
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.59rem;
  white-space: nowrap;
}
.text_12 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
}
.text_13 {
  margin: 0.063rem 0.094rem 0.13rem 0;
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.59rem;
  white-space: nowrap;
}
.text_14 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
}
.text_15 {
  margin-right: 0.13rem;
  margin-top: 0.063rem;
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.59rem;
  white-space: nowrap;
}
.text_16 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
}
.text_17 {
  margin: 0.094rem 0.094rem 0.13rem 0;
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.59rem;
  white-space: nowrap;
}
.text_18 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
}
.text_19 {
  margin: 0.094rem 0.16rem 0.094rem 0;
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.59rem;
  white-space: nowrap;
}
.text_20 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
}
.text_21 {
  margin: 0.094rem 0 0.094rem;
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.81rem;
  line-height: 0.59rem;
  white-space: nowrap;
}
.group-text {
  text-align: center;
}
.between {
  display: flex;
  justify-content: space-between;
}
</style>
