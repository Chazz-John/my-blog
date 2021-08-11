import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    msgPool: []
  },
  mutations: {
    message: function (state, step) {
      state.msgPool.push(state);
      //当设置的时间
      setTimeout(() => {
        state.msgPool.shift()
      }, step.time)
    }
  },
  actions: {},
  modules: {}
})