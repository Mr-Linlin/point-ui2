import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) { // 如果savedPosition存在，滚动条会自动跳到记录的值的地方
      return savedPosition
    }
    return { x: 0, y: 0 } // savedPosition也是一个记录x轴和y轴位置的对象
  },
  routes: [
    // 如果URL输入错误或者是URL 匹配不到任何静态资源，就自动跳到到Home页面,也可以指向一个专门的 404 页面
    /*
    { path: '*', redirect: '/home' },
    { path: '/WxAuth', name: 'WxAuth', component: () => import('./views/WxAuth.vue') },
     */
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/wx',
      name: 'wx',
      component: () => import('./views/wx/Wx.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home/Home.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./views/mine/Mine.vue')
    },
    // {
    //   path: '/point',
    //   name: 'point',
    //   component: () => import('./views/mine/Point.vue')
    // },
    {
      path: '/detailed',
      name: 'Detailed',
      component: () => import('./views/mine/Detailed.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/Login.vue')
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: () => import("./views/mine/Exchange")
    },
    {
      path: '/mineDetails',
      name: '/mineDetails',
      component: () => import('./views/mine/MineDetails.vue')
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   var ua = navigator.userAgent.toLowerCase();
//   if (ua.match(/MicroMessenger/i) == "micromessenger") {
//     //ios的ua中无miniProgram，但都有MicroMessenger（表示是微信浏览器）
//     wx.miniProgram.getEnv((res) => {
//       if (res.miniprogram) {
//         next()
//       } else {
//         next(false)
//       }
//     })
//   } else {
//     next(false)
//   }
// })

export default router
