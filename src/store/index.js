import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPc: true
  },
  mutations: {
    checkIsPc (state) {
      const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      if (flag) {
        state.isPc = false
      } else {
        state.isPc = true
      }
      return state.isPc
    }
  },
  actions: {
  },
  modules: {
  }
})
