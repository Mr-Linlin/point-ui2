<template>
  <div class="con-bar-nav-app flex-row">
    <router-link to="/home" class="f1 nav home" tag="div" active-class="home-active">
      <div class="text">迪迪通</div>
    </router-link>

    <router-link to="/mine" class="f1 nav mine" tag="div" active-class="mine-active">
      <div class="text">积分</div>
    </router-link>
  </div>
</template>

<script>

/**
   * AppNavBar组件
   */
export default {
  name: 'AppNavBar'
}
</script>

<style lang="less" scoped>
  .con-bar-nav-app {
    height: 96px;
    background: white;
    .nav{
      position: relative;
      font-size: 22px;
      text-align: center;
      .text{
        left: 0;
        bottom: 0;
        width: 100%;
        height: 38px;
        position: absolute;
        line-height: 38px;
      }
    }

    .home{
      color: rgb(194, 196, 199);
      background: url("../assets/img/home/home_active.png") no-repeat center top 10px;
      background-size: 48px;
    }
    .mine {
      color: rgb(194, 196, 199);
      background: url("https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16445473531823218177.png") no-repeat center top 10px;
      background-size: 48px;
    }
    .home-active {
      color: rgb(255, 143, 78);
      background: url("https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16445473531582107195.png") no-repeat center top 10px;
      background-size: 48px;
    }

    .mine-active {
      color: rgb(255, 143, 78);
      background: url("../assets/img/home/mine.png") no-repeat center top 10px;
      background-size: 48px;
    }
  }
</style>
