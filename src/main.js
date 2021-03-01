import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap'
import axios from "axios";
import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
  $,
  router,
  store,
  bootstrap,
  axios,
  render: h => h(App)
}).$mount('#app')
