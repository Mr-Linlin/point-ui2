<template>
  <div class="flex-col page">
    <!-- <div class="flex-col header">
      <div class="justify-center group_1">
        <img
          @click="handleNav"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16444602425202046922.png"
          class="image_1"
        />
        <span>积分</span>
      </div>
    </div> -->
    <div class="flex-col group_2">
      <div class="justify-between section_1">
        <div class="flex-row group_3">
          <img :src="avatar" class="image_2" />
          <div class="info">
            <div class="nickname">{{ nickname }}</div>
            <div class="gs-username">Spark：{{ username }}</div>
          </div>
        </div>

        <!--        <span @click="handleQuit" class="text_3">退出登录</span>-->
      </div>
      <div class="flex-col section_2">
        <div class="flex-col section_3">
          <div class="flex-col section_4">
            <div class="flex-row">
              <div class="flex-col equal-division-item">
                <span class="text_4">我的积分</span>
                <div class="bottom-text-wrapper flex-col view_1">
                  <span class="text_5">{{ integral }}</span>
                </div>
              </div>
              <div class="flex-col equal-division-item_1">
                <span class="text_6">GS兑换总和</span>
                <div class="bottom-text-wrapper flex-col view_1">
                  <span class="text_7">{{ total_gs }}</span>
                </div>
              </div>
            </div>
            <span class="text_8">积分GS兑换比例{{ rate }}:1</span>
          </div>
          <div class="flex-row equal-division_1">
            <div
              class="justify-center equal-division-item_2 equal-item"
              @click="integralSubs"
            >
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16444602419916578817.png"
                class="image_3"
              />
              <span class="text_9">积分明细</span>
            </div>
            <div class="horiz-divider"></div>
            <div
              class="justify-center equal-division-item_3 equal-item"
              @click="exchange"
            >
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16445582932206451468.png"
                class="image_3"
              />
              <span class="text_10">立即兑换</span>
            </div>
          </div>
        </div>
        <div class="flex-col group_4">
          <span class="text_11">积分兑换明细</span>
          <van-empty description="暂无数据" v-if="pointLog.length === 0" />
          <div
            class="section_5 flex-col view_2"
            v-for="item in pointLog"
            :key="item.id"
            @click="goDetail(item.id)"
          >
            <div class="top-group justify-between between">
              <span class="text_12">{{ item.created_at }}</span>
              <span class="text_14">兑换成功</span>
            </div>
            <div class="bottom-group flex-col">
              <div class="flex-col group_5">
                <div class="justify-between between">
                  <div class="left-group flex-row">
                    <img
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16445473164386459984.png"
                      class="image_6"
                    />
                    <span class="text_16">{{ item.gs_username }}</span>
                  </div>
                  <!-- <span class="text_18">{{
                    item.gs_uid === "0" ? "~" : item.gs_uid
                  }}</span> -->
                  <span class="text_22">所得GS +{{ item.gs_integral }}</span>
                </div>

                <div class="justify-between group_7 between">
                  <span class="text_20">积分GS汇率{{ item.gs_rate }}:1</span>
                  <span class="text_20 gs-detail1">
                    <span>查看详情</span>
                    <img
                      src="~@/assets/img/mine/right.png"
                      class="image_3"
                    />
                  </span>
                </div>
              </div>
              <!-- <div
                class="bottom-section between"
                @click="goDetail(item.id)"
              ></div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import sHeader from '@/components/SimpleHeader'
// import toGs from "@/components/ToGs";
import { Toast } from "vant";
import {
  showGs,
  showGsRate,
  showPoint,
  showPointLog,
  changeGs,
} from "@/service/user";
import { logout } from "@/service/user";
export default {
  data() {
    return {
      total_gs: 0.0,
      integral: 0.0,
      platform_user_id: "",
      avatar: "",
      point: 0.0,
      amount: 0.0,
      gs: 0.0,
      rate: 0.0,
      nickname: "",
      sendVal: false,
      list: [],
      pointLog: [],
      loading: false,
      finished: false,
      refreshing: false,
      page: 1,
      limit: 10,
      username: "",
      headers: [
        {
          sortable: false,
          text: "用户名",
          value: "gs_username",
        },
        {
          sortable: false,
          text: "UID",
          value: "gs_uid",
        },
        {
          sortable: false,
          text: "变动积分",
          value: "integral",
        },
        {
          sortable: false,
          text: "所得GS积分",
          value: "integral",
        },
        {
          sortable: false,
          text: "兑换比例",
          value: "gs_rate",
        },
        {
          sortable: false,
          text: "兑换时间",
          value: "created_at",
        },
      ],
    };
  },
  mounted() {
    this.onLoad();
    this.getGsRate();
    this.getPoint();
    this.getPointLog();
    this.username = localStorage.getItem("username");
  },
  methods: {
    handleQuit() {
      logout().then(() => {
        localStorage.removeItem("token");
        // wx.miniProgram.redirectTo({url: '/page/user-center/user-center'});
      });
    },
    handleNav() {
      this.$router.back();
    },
    // 点击进入明细
    integralSubs() {
      this.$router.push("/detailed");
    },
    // 点击进入立即兑换
    exchange() {
      this.$router.push("/exchange");
    },
    // 点击进入详情
    goDetail(id) {
      this.$router.push(`/mineDetails?id=${id}`);
    },
    onLoad() {
      showGs({}).then((res) => {
        if (res.code === 200) {
          this.avatar = res.data.avatar;
          this.total_gs = res.data.total_gs;
          this.integral = res.data.integral;
          this.platform_user_id = res.data.platform_user_id;
          this.nickname = res.data.nickname;
        }
      });
    },
    async getPointLog() {
      await showPointLog().then((res) => {
        if (res.code === 200) {
          this.pointLog = res.data;
          console.log(this.pointLog);
        }
      });
    },
    gsChange() {
      this.sendVal = true;
    },
    clickCancel() {},
    async getGsRate() {
      await showGsRate().then((res) => {
        if (res.code === 200) {
          this.rate = res.data.rate;
          // console.log(this.rate);
          // this.$refs.toGs[0].rate = res.data.rate;
        }
      });
    },
    async getPoint() {
      await showPoint().then((res) => {
        if (res.code === 200) {
          this.amount = res.data.point;
          // this.$refs.toGs[0].amount = res.data.point;
        }
      });
    },
    async clickDanger() {
      // let params = { 'amount': this.$refs.point }
      // this.amount = this.$refs.toGs[0].point;
      await changeGs(this.amount).then((res) => {
        if (res.code === 200) {
          Toast.success("积分兑换成功！");
          this.getPoint();
          this.getPointLog();
          this.list = res.data;
        }
      });
    },
  },
  clickConfirm() {},
  components: {
    // toGs,
    // sHeader,
  },
};
</script>

<style scoped lang="less">
.section_5 {
  margin-top: 1rem;
  padding-top: 1.13rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.25rem;
  box-shadow: 0px 0.5rem 1rem rgba(188, 153, 133, 0.07);
  overflow: hidden;
  // height: 8.66rem;
  border-radius: 8px;
  overflow: hidden;
}
.top-group {
  padding-left: 1.03rem;
  padding-right: 0.88rem;
}
.image_3 {
  width: 0.75rem;
  height: 0.75rem;
}
.bottom-section {
  color: rgb(26, 26, 28);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
  padding: 0.72rem 1rem 1.5rem 1.03rem;
  background-color: rgb(247, 249, 255);
  height: 0.75rem;
}
.top-group_1 {
  padding: 0 0.84rem 1.09rem 1rem;
  border-bottom: solid 0.063rem rgb(247, 250, 255);
}
.image_13 {
  width: 1.38rem;
  height: 1.38rem;
}
.bottom-text-wrapper {
  color: rgba(255, 255, 255, 0.94);
  font-size: 1.31rem;
  line-height: 0.97rem;
  white-space: nowrap;
  padding: 0.28rem 0 0.34rem;
  overflow: hidden;
  height: 1.56rem;
}
.image_6 {
  border-radius: 0.13rem;
  width: 0.75rem;
  height: 0.75rem;
}
.text_14 {
  color: rgb(9, 187, 7);
  font-size: 0.88rem;
  line-height: 0.81rem;
  white-space: nowrap;
}
.left-group {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.75rem;
  line-height: 0.89rem;
  white-space: nowrap;
}
.text_20 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.75rem;
  line-height: 0.69rem;
  white-space: nowrap;
}
.text_22 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.75rem;
  line-height: 0.69rem;
  white-space: nowrap;
}
.bottom-group {
  margin-top: 1.19rem;
}
.text_12 {
  margin: 0.094rem 0 0.094rem;
  color: rgb(26, 26, 28);
  font-size: 0.88rem;
  line-height: 0.66rem;
  white-space: nowrap;
}
.bottom-group_1 {
  margin-top: 0.78rem;
}
.text_18 {
  margin: 0.13rem 0 0.13rem;
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.75rem;
  line-height: 0.56rem;
  white-space: nowrap;
}
.text_16 {
  margin-left: 0.31rem;
}
.page {
  background-color: #f7faff;
  // height: 100vh;
  // background: red;
  overflow-y: auto;
}
.header {
  padding: 0.75rem 0.91rem 0.56rem 1rem;
  background-color: rgb(255, 142, 77);
  height: 5.38rem;
}
.group_2 {
  flex: 1 1 auto;
  overflow-y: auto;
}
.group {
  padding-left: 0.31rem;
  color: rgb(255, 255, 255);
  font-size: 0.75rem;
  line-height: 0.56rem;
  white-space: nowrap;
}
.group_1 {
  display: flex;
  justify-content: space-around;
  margin-top: 1.38rem;
  padding: 0.19rem 0 0.25rem;
  color: rgba(255, 255, 255, 0.94);
  font-size: 1.06rem;
  line-height: 0.97rem;
  white-space: nowrap;
  position: relative;
}
.section_1 {
  display: flex;
  justify-content: space-between;
  padding: 0.56rem 0.91rem 0.44rem 1rem;
  background-color: rgb(255, 142, 77);
}
.section_2 {
  background-color: rgb(247, 249, 255);
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
.image_1 {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1.38rem;
  height: 1.38rem;
}
.group_3 {
  color: rgba(255, 255, 255, 0.94);
  font-size: 0.88rem;
  line-height: 0.81rem;
  white-space: nowrap;
}
.group_18 {
  color: rgba(255, 255, 255, 0.94);
  font-size: 0.88rem;
  line-height: 0.81rem;
  white-space: nowrap;
}
.text_3 {
  align-self: center;
  color: rgba(255, 255, 255, 0.84);
  font-size: 0.75rem;
  line-height: 0.69rem;
  white-space: nowrap;
}
.section_3 {
  padding-top: 1.25rem;
  background-color: rgb(255, 142, 77);
}
.group_4 {
  padding: 1.41rem 1rem 1.78rem;
}
.section_6 {
  padding-top: 0.34rem;
  background-color: rgb(249, 251, 255);
  overflow: hidden;
  height: 5.09rem;
}
.image_2 {
  border-radius: 50%;
  width: 4.75rem;
  height: 4.75rem;
  border: 3px solid rgba(255, 255, 255, 0.94);
}
.text_2 {
  margin-left: 1.06rem;
  align-self: center;
}
.section_4 {
  padding-bottom: 0.094rem;
  box-shadow: 0px 0.5rem 1rem rgba(188, 153, 133, 0.07);
}
.equal-division_1 {
  margin-top: 1.88rem;
  padding: 0.063rem 0;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0px -0.31rem 0.63rem rgba(0, 0, 0, 0.07);
}
.text_11 {
  color: rgb(26, 26, 28);
  font-size: 1rem;
  line-height: 0.94rem;
  white-space: nowrap;
}
.view_2 {
  margin-top: 1.16rem;
}
.section_7 {
  margin-top: 0.44rem;
  padding: 1.5rem 0 0.34rem;
  background-color: rgb(249, 251, 255);
  overflow: hidden;
  height: 2.03rem;
}
.text_8 {
  margin-left: 1.28rem;
  margin-top: 1.03rem;
  color: rgba(255, 255, 255, 0.84);
  font-size: 0.75rem;
  line-height: 0.69rem;
  white-space: nowrap;
}
.equal-division-item_2 {
  padding: 1.09rem 0 1.09rem;
  flex: 1 1 11.72rem;
  color: rgba(255, 255, 255, 0.94);
  font-size: 0.88rem;
  line-height: 0.81rem;
  white-space: nowrap;
}
.horiz-divider {
  margin: 0.31rem 0;
  background-color: rgba(255, 255, 255, 0.54);
  width: 0.031rem;
  height: 2.38rem;
}
.equal-division-item_3 {
  padding: 1.09rem 0 1.09rem;
  flex: 1 1 11.72rem;
  color: rgba(255, 255, 255, 0.94);
  font-size: 0.88rem;
  line-height: 0.81rem;
  white-space: nowrap;
}
.equal-division-item_4 {
  flex: 1 1 11.41rem;
  color: rgba(0, 0, 0, 0.22);
  font-size: 0.69rem;
  line-height: 0.63rem;
  white-space: nowrap;
}
.equal-division-item_5 {
  margin-left: 0.63rem;
  flex: 1 1 11.41rem;
  color: rgb(255, 142, 77);
  font-size: 0.69rem;
  line-height: 0.63rem;
  white-space: nowrap;
}
.section_8 {
  background-color: rgb(26, 26, 28);
  border-radius: 0.16rem;
  width: 5.63rem;
  height: 0.19rem;
}
.equal-division-item {
  padding: 0.094rem 1.25rem 0.31rem;
  flex: 1 1 9.34rem;
  width: 9.34rem;
}
.equal-division-item_1 {
  margin-left: 2.06rem;
  padding: 0.094rem 0.31rem 0.31rem;
  flex: 1 1 9.34rem;
  width: 9.34rem;
}
.text_9 {
  margin-left: 0.53rem;
}
.text_10 {
  margin-left: 0.53rem;
}
.group_5 {
  padding: 0 0.84rem 1.09rem 1rem;
  border-bottom: solid 0.063rem rgb(247, 250, 255);
}
.text_39 {
  margin-top: 0.28rem;
}
.text_40 {
  margin-top: 0.28rem;
}
.text_4 {
  color: rgba(255, 255, 255, 0.84);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
}
.view {
  margin-top: 0.66rem;
}
.text_6 {
  color: rgba(255, 255, 255, 0.84);
  font-size: 0.81rem;
  line-height: 0.75rem;
  white-space: nowrap;
}
.view_1 {
  margin-top: 0.66rem;
}
.group_7 {
  margin-top: 0.78rem;
}
.text_5 {
  margin-left: 0.094rem;
}
.text_7 {
  margin-left: 0.063rem;
}
.equal-item {
  text-align: center;
}
.between {
  display: flex;
  justify-content: space-between;
}
.gs-username {
  color: #fff;
  // font-size: 0.88rem;
  line-height: 0.85rem;
  height: 1.83rem;
}
.info {
  font-size: 1rem;
  margin-left: 0.83rem;
  padding-top: 1rem;
  height: 3.75rem;
  .nickname {
    line-height: 1.83rem;
    height: 1.83rem;
  }
}
.gs-detail {
  background: red;
}
.gs-detail1{
  color: #567BF0;
  // background: red;
  font-size: 0.65rem;
  img{
    margin-top: -0.125rem;
  }
}
</style>
