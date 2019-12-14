import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
import store from './store'

import globalVariable from '@/global_variable.js'

Vue.config.productionTip = false
Vue.prototype.GLOBAL = globalVariable
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
