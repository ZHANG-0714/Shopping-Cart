import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addressComponent:[],
    slides:[],
    category:[],
    recommend:[],
    hotGoods:[],
    shopList:[]
  },
  mutations: {
    //城市定位
    positioning(state,data){
      state.addressComponent = data
    },
    //首页轮播图
    Recommend(state,data){
      state.slides = data
    },
    //首页分类
    classification(state,data){
      state.category = data
    },
    //首页商品推荐
    commodity(state,data){
      state.recommend = data
    },
    //首页热销商品
    hotsale(state,data){
      state.hotGoods = data
    },
    //购物车数据
    vehicle(tate,data){
      state.shopList = data
    }

  },
  actions: {
  },
  modules: {
  }
})
