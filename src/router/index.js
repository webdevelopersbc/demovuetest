import Vue from 'vue'
import VueRouter from 'vue-router'
import MedicationDetails from '../views/MedicationDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MedicationDetails',
    component: MedicationDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
