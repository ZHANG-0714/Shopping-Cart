import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: () => import('../views/Signin')  //登录
  },
  {
    path: '/City',
    name: 'City',
    component: () => import('../views/location/City.vue') //城市列表
  },
  {
    path: '/classIfication',
    name: 'classIfication',
    component: () => import('../views/classIfication.vue') //城市列表
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
