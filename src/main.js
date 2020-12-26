import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import animated from 'animate.css'
import 'swiper/css/swiper.css'
Vue.prototype.$ = $
Vue.use(animated)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
