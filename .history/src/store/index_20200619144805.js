import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides:[],
    category:[],
    recommend:[],
    floorNam:[],
  },
  mutations: {
    //轮播图
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
    //首页分类品种名
    varieties(state,data){
      state.floorName = data
    },

    

  },
  actions: {
  },
  modules: {
  }
})
