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
    component: () => import('../views/classIfication.vue') //分类
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: () => import('../views/shoppingCart.vue') //购物车
  },
  {
    path: '/My',
    name: 'My',
    component: () => import('../views/My.vue') //我的
  },
  {
    path: '/setUp',
    name: 'setUp',
    component: () => import('../views/setUp.vue') //设置
  },
  {
    path: '/Address',
    name: 'Address',
    component: () => import('../views/Address.vue') //地址管理
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
