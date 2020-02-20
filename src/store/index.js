import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    SET_ROOMS (state, payload) {
      state.rooms = payload
    }
  },
  actions: {
    
  },
  modules: {
  }
})
