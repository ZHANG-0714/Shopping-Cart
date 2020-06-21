import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides:[],
    category:[]
  },
  mutations: {
    //轮播图
    Recommend(state,data){
      state.slides = data
    },
    //首页分类
    classification(state,data){
      state.category = data
    }
    

  },
  actions: {
  },
  modules: {
  }
})
