import Vue from 'vue'
import router from './views/router'
import store from './store'  // -OR- import store from './store/index.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
