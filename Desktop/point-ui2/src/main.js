import './assets/css/common.css'
import './utils/directive'

import Vue from 'vue'
import VeeValidate from 'vee-validate';
import App from './App.vue'
import store from './store'
import router from './router'

import apis from './apis'
import bus from './utils/eventBus'
import wxShare from './utils/wxShare'
import myUtils from './utils/myUtils'
import filters from './utils/filters'
import vuetify from './plugins/vuetify'
// 导航栏
import {
  Lazyload, Toast, List
} from 'vant'

import { Button } from 'vant';
import { ImagePreview } from 'vant';
import { Image as VanImage } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { Card } from 'vant';
import { Tag } from 'vant';
import { Icon } from 'vant';
import { Field } from 'vant';
import { Form } from 'vant';
import { Cell } from 'vant';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import { Empty } from 'vant';
const config = {
  errorBagName: 'errorBags', // change if property conflicts.
  fieldsBagName: 'fieldBags',
};

Vue.use(Icon);
Vue.use(Tag);
Vue.use(Card);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
Vue.use(Field);
Vue.use(Form);
Vue.use(Cell);
Vue.use(Empty);
Vue.use(VeeValidate,config,{
  dictionary: {
    zh_CN: zh_CN
  }
});

// 全局注册
Vue.use(ImagePreview);
Vue.use(Button);

Vue.config.productionTip = false
Vue.prototype.bus = bus
Vue.prototype.apis = apis
Vue.prototype.toast = Toast
Vue.prototype.wxShare = wxShare
Vue.prototype.myUtils = myUtils

//全局注册 filter
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 使用 Vue.use 和 Vue.component 全局注册组件，这里的第一个参数就是后面可以在其他组件内使用的标签名，并使用动态导入来延迟加载组件
Vue.component('titleBar', () => import('./components/TitleBar'))
Vue.component('baseDialog', () => import('./components/BaseDialog'))
Vue.component('infiniteList', () => import('./components/InfiniteList'))
Vue.component('navbar',()=> import('./components/Navbar'))
Vue.use(List)
  .use(Toast)
  .use(Lazyload, {
    // error: require('./assets/img/img_placeholder.svg'),
    // loading: require('./assets/img/img_placeholder.svg'),
  })

// 开发环境下面使用vConsole进行调试
/*
if (process.env.NODE_ENV !== 'production') {
  const VConsole = require('vconsole')
  new VConsole()
}
*/



new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
