// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import VueResource from 'vue-resource'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store/store.js'

Vue.use ( Mint )
Vue.use ( VueResource )
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
