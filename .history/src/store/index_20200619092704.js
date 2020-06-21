import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides:{}
  },
  mutations: {
    Recommend(state,data){
      state.slides = data
    }
  },
  actions: {
  },
  modules: {
  }
})
