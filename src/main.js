import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap'
import axios from "axios"

Vue.config.productionTip = false
Vue.prototype.$BASE_URL = 'http://phasetwo.ethelcare.co.uk/api/120372c7-f0f9-4c71-8edc-608cdd5b4a10/medication_schedules';
Vue.prototype.$Auth = 'Bearer 5|gHK9vGq7FMG5LKCzvLcYgk6f8byYNRwY3AEkx0HO';

new Vue({
  router,
  store,
  bootstrap,
  axios,
  render: h => h(App)
}).$mount('#app')
