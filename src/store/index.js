import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    msgPool: []
  },
  mutations: {
    message (state, step) {
      state.msgPool.push(step);
      // 当设置的时间
      setTimeout(() => {
        state.msgPool.shift()
      }, step.time)
    }
  },
  actions: {},
  modules: {}
})
export default store