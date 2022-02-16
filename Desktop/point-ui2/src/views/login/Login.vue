<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
<template>
  <div class="flex-col page">
    <div class="flex-col section_1">
      <div class="flex-col group_2">
        <div class="login_title">
          <span>
            Spark账号登录
            <img src="@/assets/img/login/version.png" alt="" class="version" />
          </span>
        </div>
        <!-- <div class="flex-col items-center text-wrapper_1">
          <span>3.0</span>
        </div> -->
      </div>
      <van-form @submit="onSubmit" class="loginForm">
        <div class="field_input">
          <van-field
            v-model="username"
            name="用户名"
            clearable
            placeholder="请输入手机号/邮箱"
            :rules="[{ required: true, message: '手机号/邮箱不能为空！' }]"
          />
        </div>
        <div class="field_input">
          <van-field
            v-model="password"
            name="密码"
            type="password"
            clearable
            placeholder="登录密码"
            :rules="[{ required: true, message: '密码不能为空' }]"
            class="input"
          />
        </div>
        <div class="flex-col items-center login-btn">
          <van-button type="warning">登录</van-button>
        </div>
      </van-form>

      <!-- <div class="flex-row section_3">
        <img src="~@/assets/img/login/logo.png" alt="" />
      </div> -->
      <!-- <div class="section_4"></div> -->
    </div>
  </div>
</template>

<script>
import { getToken, login } from "@/service/user";
import { getUrlParam } from "@/utils/utils";
// import sHeader from '@/components/SimpleHeader'
import {} from "@/service/user";
export default {
  $_veeValidate: {
    validator: "new",
  },
  data() {
    return {
      valid: true,
      username: "",
      password: "",
      openId: "",
      type: "login",
      imgCode: "",
      verify: "",
    };
  },
  mounted() {
    this.getOpenId();
    this.checkToken();
  },
  methods: {
    checkToken() {
      let token = localStorage.getItem("token");
      if (
        token == null ||
        token === "undefined" ||
        token === undefined ||
        token === ""
      ) {
        getToken().then((res) => {
          if (res.code === 200) {
            localStorage.setItem("token", res.data.token);
          }
        });
      }
    },
    getOpenId() {
      const code = getUrlParam("openid");
      // let code = localStorage.getItem("openId");
      console.log(code);
      localStorage.setItem("openId", code);
      if (
        code == null ||
        code === "" ||
        code === undefined ||
        code === "undefined"
      ) {
        window.location.href = "/home";
      } else {
        this.openId = code;
      }
    },
    // validatorUsername(value){
    //   console.log(value);
    // },
    // 提交登录
    async onSubmit() {
      login({
        username: this.username,
        password: this.password,
        openId: this.openId,
      }).then((res) => {
        if (res.code === 200) {
          localStorage.setItem("username", this.username);
          localStorage.setItem("openId", this.openId);
          this.$router.replace({
            path: "/mine",
          });
        }
      });
      //   }
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.image_5 {
  width: 3.75rem;
  height: 3.75rem;
}
.page {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.header {
  padding: 0.75rem 0.91rem 0.69rem 1rem;
  color: rgb(26, 26, 28);
  font-size: 0.75rem;
  line-height: 0.56rem;
  white-space: nowrap;
  background-color: rgb(255, 250, 247);
  height: 5.5rem;
}
.section_1 {
  padding: 2.5rem 2.5rem 0.34rem;
  flex: 1 1 auto;
  background-color: rgb(255, 250, 247);
  overflow-y: auto;
}
.group-1 {
  padding-left: 0.31rem;
}
.image_3 {
  margin-top: 1.38rem;
  width: 1.38rem;
  height: 1.38rem;
}
.group_2 {
  padding-top: 0.41rem;
  position: relative;
}
.group_3 {
  margin-top: 2.56rem;
}
.button {
  margin-top: 2.5rem;
  padding: 0.94rem 0 1rem;
  color: rgb(255, 255, 255);
  font-size: 0.94rem;
  line-height: 0.88rem;
  white-space: nowrap;
  background-color: rgb(255, 142, 77);
  border-radius: 0.38rem;
  text-align: center;
  box-shadow: 0px 0.63rem 1.25rem rgba(255, 143, 78, 0.17);
}
.section_3 {
  margin-top: 18.13rem;
  align-self: center;
  // box-shadow: 0px 0.31rem 0.63rem rgba(204, 114, 62, 0.29);
  img {
    width: 14rem;
    // height: 6.5rem;
  }
}
.section_4 {
  margin-top: 3.84rem;
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
.login_title {
  color: rgb(26, 26, 28);
  font-size: 1.81rem;
  line-height: 1.84rem;
  white-space: nowrap;
  font-weight: 500;
  span {
    position: relative;
    .version {
      position: absolute;
      right: -0.7rem;
      top: -0.3rem;
      width: 1.7rem;
      height: 1.2rem;
    }
  }
}
.text-wrapper_1 {
  padding: 0.25rem 0 0.25rem;
  color: rgb(255, 255, 255);
  font-size: 0.75rem;
  line-height: 0.56rem;
  white-space: nowrap;
  background-color: rgb(255, 142, 77);
  border-radius: 0.19rem;
  width: 1.5rem;
  position: absolute;
  right: 5.66rem;
  top: 0;
}
.section_2 {
  padding: 0.88rem 1rem 0.88rem 1.06rem;
  color: rgb(26, 26, 28);
  font-size: 0.88rem;
  line-height: 0.66rem;
  white-space: nowrap;
  background-color: rgb(255, 255, 255);
  border-radius: 0.38rem;
  box-shadow: 0px 0.5rem 1rem rgba(204, 130, 88, 0.05);
  overflow: hidden;
  height: 2.75rem;
}
.text-wrapper_2 {
  margin-top: 1rem;
  padding: 0.97rem 0 0.97rem;
  color: rgba(0, 0, 0, 0.22);
  font-size: 0.88rem;
  line-height: 0.81rem;
  white-space: nowrap;
  background-color: rgb(255, 255, 255);
  border-radius: 0.38rem;
  overflow: hidden;
  height: 2.75rem;
}
.image_7 {
  margin-left: 1.25rem;
  align-self: center;
  width: 0.53rem;
  height: 0.53rem;
}
.image_8 {
  margin-left: 1.22rem;
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
.text_3 {
  margin: 0.19rem 0 0.19rem;
}
.image_4 {
  width: 1rem;
  height: 1rem;
}
.text_4 {
  margin-left: 1.03rem;
}
.login-btn {
  margin-top: 2.4rem;
}
.group_2 {
  margin-bottom: 2.2rem;
}
.input {
  margin-bottom: 1rem;
}
.loginForm {
  // background: red;
  .field_input {
    width: 100%;
    // height: 3.1rem;
    background: #ffffff;
    box-shadow: 0px 16px 32px 1px rgba(204, 131, 88, 0.05);
    border-radius: 0.8;
    opacity: 1;
    margin-bottom: 1.6rem;
    line-height: 3.1rem;
  }
}
// .van-cell {
//   // line-height: 7.2vw !important;
//   // height: 3.1rem !important;
// }
// /deep/.van-field__error-message{
//   position: absolute;
//   bottom: 10px;
//   background: rgb(255, 250, 247);
// }
</style>
