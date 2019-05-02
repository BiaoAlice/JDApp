// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'mint-ui/lib/style.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Panle from "./components/common/Panle"
import MyHeader from "./components/common/MyHeader"
import Swiper from "./components/common/Swiper"
import VipList from "./components/common/Viplist"
import Border from "./components/common/Border"
import MintUI from 'mint-ui'
import axios from 'axios'
import "../static/css/common.css"
import 'swiper/dist/css/swiper.css'

Vue.prototype.$axios = axios
axios.defaults.baseURL = "../../static/mock"

Vue.use(MintUI)
Vue.config.productionTip = false
Vue.component("my-panle",Panle);
Vue.component("my-header",MyHeader);
Vue.component("my-swiper",Swiper);
Vue.component("my-list",VipList);
Vue.component("my-border",Border);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
