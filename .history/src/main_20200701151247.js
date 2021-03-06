import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from './http/api'
import { Lazyload } from 'vant';
import { PullRefresh } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import utils from './utils'


Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(PullRefresh);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.prototype.$utils = utils



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
