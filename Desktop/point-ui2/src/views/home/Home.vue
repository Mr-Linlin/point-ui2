<template>
  <div class="flex-col page">
    <!-- <div class="justify-between header">
    </div> -->
    <div class="flex-col group-1">
      <div class="flex-col items-center image-wrapper header-wrap">
        <div class="img">
          <img
            @click="handleNav"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16445473531510960763.png"
            class="image_1"
          />
        </div>
      </div>
      <div class="flex-col section_1">
        <div class="flex-col">
          <div class="flex-col section_2">
            <span class="text_1">迪迪一下，财富到家</span>
            <span class="text_2"
              >迪迪优品商城，倡导2022年1月21日国家发改委绿色消费的精神，大力培育电商平台绿色生态，展开积分大放送活动，活动期间购物能得{{this.rate }}:1比例的消费积分。</span
            >
          </div>
          <div class="justify-center section_3">
            <div class="flex-col group_2">
              <div class="flex-col">
                <span class="text_3">微信小程序商城</span>
                <span class="text_4">长按识别小程序</span>
              </div>
              <div class="flex-row group_4">
                <div class="flex-col items-center wrapper_1">
                  <img src="~@/assets/img/home/Label.png" alt="" />
                </div>
                <div class="flex-col items-center wrapper_2">
                  <img src="~@/assets/img/home/Label1.png" alt="" />
                </div>
                <div class="flex-col items-center wrapper_2">
                  <img src="~@/assets/img/home/Label2.png" alt="" />
                </div>
              </div>
            </div>
            <div class="flex-col items-center image-wrapper_1">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16445473526771061433.png"
                class="image_2"
              />
            </div>
          </div>
          <div class="flex-col section_4">
            <span>合作伙伴</span>
            <div class="flex-col group_5">
              <img src="~@/assets/img/home/ICOM.png" alt="" />
            </div>
          </div>
        </div>
        <div class="flex-col group_7">
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16445473529939656179.png"
            class="image_12"
          />
          <div class="justify-center group_8">
            <img src="~@/assets/img/ipv6.png" alt="" class="ali-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getToken } from '@/service/user'
// import { getUrlParam } from '@/utils/utils'
import { showGsRate } from "@/service/user.js";

export default {
  name: "Home",
  data() {
    return {
      rate:''
    };
  },
  created() {
    // this.checkToken()
    // this.wxShare.share()
    this.getGsRate()
  },
  methods: {
      async getGsRate() {
      let res = await showGsRate();
      if (res.code === 200) {
        this.rate = Number(res.data.rate).toFixed(2);
        // console.log( this.rate);
      }
    },
    handleNav() {
      // this.$router.back()
    },
    /*
    getCode () {
      const code = getUrlParam('code')
      const local = window.location.href
      if (code == null || code === '') {
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + window.APPID + '&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
      } else {
        this.getOpenId(code) //把code传给后台获取用户信息
      }
    },
    getOpenId (code) { // 通过code获取 openId等用户信息，/api/user/wechat/login 为后台接口
      let _this = this
      this.$http.post('/api/user/wechat/login', {code: code}).then((res) => {
        let datas = res.data
        if (datas.code === 0 ) {
          console.log('Login success.')
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    async checkToken() {
      let token = localStorage.getItem('token')
      if (token == null || token === 'undefined' || token === undefined || token === '') {
        await getToken().then(res => {
          if (res.code === 200) {
            localStorage.setItem('token', res.data.token)
          }
        });
      }
    }
     */
  },
};
</script>

<style scoped lang="less">
.image_8 {
  width: 1.38rem;
  height: 1.38rem;
}
.page {
  position: relative;
  z-index: 9;
  background-color: rgb(255, 255, 255);
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
}
.header {
  padding: 0.75rem 0.91rem 0.69rem 1.31rem;
  color: rgb(255, 255, 255);
  font-size: 0.75rem;
  line-height: 0.56rem;
  white-space: nowrap;
  background-color: rgb(255, 142, 77);
  height: 2.75rem;
}
.group-1 {
  flex: 1 1 auto;
  overflow-y: auto;
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
.image-wrapper {
  padding: 1.88rem 0;
  background-color: rgb(255, 142, 77);
  border-radius: 0px 0px 1.25rem 1.25rem;
}
.section_1 {
  padding: 1rem 1rem 1.5rem;
  background-color: rgb(247, 249, 255);
}
.group_9 {
  position: relative;
}
.group_8 {
  display: flex;
}
.image_1 {
  width: 10.84rem;
  height: 2.5rem;
}
.group_7 {
  margin: 2.25rem 0;
}
.equal-division_1 {
  padding-bottom: 2.16rem;
  background-color: rgb(249, 251, 255);
  overflow: hidden;
  height: 5.09rem;
}
.section_6 {
  padding: 1.5rem 0 0.34rem;
  background-color: rgb(249, 251, 255);
  overflow: hidden;
  height: 2.03rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.section_2 {
  padding: 1.41rem 0.91rem 1.41rem 1.03rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.63rem;
  box-shadow: 0px 0.5rem 1rem rgba(188, 153, 133, 0.02);
  overflow: hidden;
  height: 10.44rem;
  // border: solid 0.063rem rgb(255, 243, 236);
}
.section_3 {
  display: flex;
  justify-content: space-between;
  margin-top: 1.19rem;
  padding: 1.88rem 0.88rem 1.75rem 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.63rem;
  box-shadow: 0px 0.5rem 1rem rgba(188, 153, 133, 0.02);
  overflow: hidden;
  height: 11.25rem;
  // border: solid 0.063rem rgb(255, 243, 236);
}
.section_4 {
  margin-top: 1.19rem;
  padding: 1.41rem 0.63rem 1.13rem 1rem;
  color: rgb(26, 26, 28);
  font-size: 1.31rem;
  line-height: 1.22rem;
  white-space: nowrap;
  background-color: rgb(255, 255, 255);
  border-radius: 0.63rem;
  box-shadow: 0px 0.5rem 1rem rgba(188, 153, 133, 0.02);
  // border: solid 0.063rem rgb(255, 243, 236);
}
.image_12 {
  align-self: center;
  width: 5.34rem;
  height: 3.75rem;
}
.group_8 {
  margin-top: 0.75rem;
}
.equal-division-item_3 {
  padding: 0.31rem 0 0.31rem;
  flex: 1 1 11.41rem;
  color: rgb(255, 142, 77);
  font-size: 0.69rem;
  line-height: 0.63rem;
  white-space: nowrap;
}
.equal-division-item_4 {
  margin-left: 0.63rem;
  padding: 0.31rem 0 0.31rem;
  flex: 1 1 11.41rem;
  color: rgba(0, 0, 0, 0.22);
  font-size: 0.69rem;
  line-height: 0.63rem;
  white-space: nowrap;
}
.section_7 {
  background-color: rgb(26, 26, 28);
  border-radius: 0.16rem;
  width: 5.63rem;
  height: 0.19rem;
}
.text_1 {
  color: rgb(26, 26, 28);
  font-size: 1.31rem;
  line-height: 1.31rem;
  white-space: nowrap;
}
.text_2 {
  margin-top: 0.75rem;
  color: rgba(0, 0, 0, 0.66);
  font-size: 0.78rem;
  line-height: 1.44rem;
  text-align: justify;
}
.group_2 {
  margin-top: 1.5rem;
}
.image-wrapper_1 {
  margin-left: 1.38rem;
  padding: 0.31rem 0 0.19rem;
  background-color: rgb(255, 255, 255);
  border-radius: 6.25rem;
  box-shadow: 0px 0.63rem 1.25rem rgba(255, 143, 78, 0.17);
  width: 7.5rem;
  height: 7.5rem;
  border: solid 0.063rem rgb(255, 250, 247);
}
.group_5 {
  margin-top: 0.97rem;
  img {
    width: 100%;
  }
}
.text_9 {
  color: rgba(0, 0, 0, 0.44);
  font-size: 0.63rem;
  line-height: 0.59rem;
  white-space: nowrap;
}
.text-wrapper_4 {
  padding-top: 0.094rem;
  color: rgb(30, 123, 255);
  font-size: 0.56rem;
  line-height: 1rem;
  white-space: nowrap;
  border-radius: 0.063rem;
  height: 1rem;
  border: solid 0.063rem rgb(30, 123, 255);
}
.ali-img {
  height: 0.78rem;
}
.text_11 {
  margin-top: 0.28rem;
}
.text_12 {
  margin-top: 0.28rem;
}
.group_4 {
  margin-top: 1.34rem;
}
.image_2 {
  border-radius: 6.25rem;
  width: 6.88rem;
  height: 6.88rem;
}
.equal-division {
  margin-right: 0.25rem;
  margin-top: 0.31rem;
}
.text_10 {
  margin-left: 0.094rem;
}
.text_3 {
  color: rgb(26, 26, 28);
  font-size: 1.31rem;
  line-height: 1.22rem;
  white-space: nowrap;
}
.text_4 {
  margin-top: 0.94rem;
  color: rgba(0, 0, 0, 0.44);
  font-size: 0.75rem;
  line-height: 0.69rem;
  white-space: nowrap;
}
.text-wrapper_1 {
  padding: 0.28rem 0 0.48rem;
  color: rgba(0, 0, 0, 0.44);
  font-size: 0.63rem;
  line-height: 0.59rem;
  white-space: nowrap;
  background-color: rgba(255, 143, 78, 0.3);
  border-radius: 1.38rem;
  width: 3.25rem;
  height: 1.13rem;
}
.wrapper_1 {
  width: 3.25rem;
  height: 1.13rem;
  img {
    width: 100%;
  }
}
.wrapper_2 {
  width: 3.25rem;
  height: 1.13rem;
  margin-left: 0.38rem;
  img {
    width: 100%;
  }
}
.text-wrapper_3 {
  margin-left: 0.38rem;
  padding: 0.28rem 0 0.28rem;
  color: rgba(0, 0, 0, 0.44);
  font-size: 0.63rem;
  line-height: 0.59rem;
  white-space: nowrap;
  background-color: rgba(255, 143, 78, 0.3);
  border-radius: 1.38rem;
  width: 3.25rem;
  height: 1.13rem;
}
.image-wrapper_2 {
  padding: 1.03rem 0 1.06rem;
  flex: 1 1 6.28rem;
  background-color: rgb(247, 250, 255);
  overflow: hidden;
  height: 2.75rem;
}
.image-wrapper_3 {
  margin-left: 0.31rem;
  padding: 0.88rem 0;
  flex: 1 1 6.28rem;
  background-color: rgb(247, 250, 255);
  overflow: hidden;
  height: 2.75rem;
}
.section_5 {
  margin-left: 0.31rem;
  margin-right: 0.25rem;
  padding: 0.94rem 1rem 0.97rem;
  flex: 1 1 6.28rem;
  background-color: rgb(247, 250, 255);
  overflow: hidden;
  height: 2.75rem;
}
.equal-division-item {
  padding: 0.75rem 0 0.72rem;
  flex: 1 1 6.28rem;
  background-color: rgb(247, 250, 255);
  overflow: hidden;
  height: 2.75rem;
}
.equal-division-item_1 {
  margin-left: 0.31rem;
  padding: 0.69rem 0.44rem;
  flex: 1 1 6.28rem;
  background-color: rgb(247, 250, 255);
  //background-color: red;
  overflow: hidden;
  height: 2.75rem;
}
.equal-division-item_2 {
  margin-left: 0.31rem;
  padding: 0.91rem 0;
  flex: 1 1 6.28rem;
  background-color: rgb(247, 250, 255);
  overflow: hidden;
  height: 2.75rem;
}
.image_3 {
  width: 5rem;
  height: 0.66rem;
}
.image_4 {
  width: 3.69rem;
  height: 1rem;
}
.image_5 {
  width: 0.97rem;
  height: 0.84rem;
}
.image_6 {
  margin: 0.13rem 0 0.13rem 0.63rem;
  width: 2.69rem;
  height: 0.59rem;
}
.image_7 {
  width: 3.5rem;
  height: 1.28rem;
}
.image_10 {
  margin-left: 0.25rem;
  flex: 1 1 auto;
  align-self: center;
  width: 3.75rem;
  height: 0.75rem;
}
.image_11 {
  width: 5.28rem;
  height: 0.94rem;
}
.header-wrap {
  display: flex;
}
.img {
  display: flex;
  justify-content: center;
  // background: pink;
}
.tarbar {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  .equal-item {
    display: flex;
    justify-content: center;
  }
}
</style>
