<template>
  <div class="wx">
    <div class='image-box'>
      <img src='../../assets/img/wx.png'/>
    </div>
    <div style="margin: 16px;">
      <van-button class="wx-button" native-type="submit" @click="wxLogin" :disabled="isDisable">微信登录</van-button>
    </div>
  </div>
</template>

<script>

import { getToken } from '@/service/user'
import { getUrlParam } from '@/utils/utils'

/**
   * 微信网页授权
   */
export default {
  name: 'Wx',
  data(){
    return{
      appId: 'wx3a7810ef07165241',
      isDisabled: false
    }
  },
  mounted() {
    this.isDisable = false
  },
  methods: {
    wxLogin() {
      this.isDisable = true
      let userInfo = localStorage.getItem('openId')
      let tokenInfo = localStorage.getItem('token')
      if (userInfo && tokenInfo) {
        return this.$router.push({
          path:'/home'
        })
      }

    const code = getUrlParam('code')
        const local = window.location.href
        if (code == null || code === '') {
          window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + this.appId+ '&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
        } else {
          this.getOpenId(code)
        }
    },
    async getOpenId (code) { // 通过code获取用户信息
        await getToken({ 'code': code }).then(res => {
          if (res.code === 200) {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('openId', res.data.openId)
            this.$router.push({
              path:'/home'
            })
          }
        });
      },
    }
}

</script>

<style scoped lang="less">
.wx{
  background: #FFFAF7;
  padding: 30px;
}
.image-box {
  position: relative;
  top: 256px;

  &::before {
    content: "";
    display: block;
    padding-top: 0px;
  }

  img {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
  }
}
.wx-button {
  position: relative;
  background: #1FC770;
  top: 256px;
  left: 50%;
  margin-left: -295px;
  width: 590px;
  height: 88px;
  color: #FFFFFF;
  box-shadow: 0px 20px 40px 1px rgba(31, 199, 112, 0.17);
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
}
</style>
