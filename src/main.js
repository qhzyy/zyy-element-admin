import Vue from 'vue'
import App from './App.vue'
import Cookies from 'js-cookie'
import router from './router'

import 'normalize.css/normalize.css'
import '@/styles/index.scss' // global css
import Element from 'element-ui'
import './styles/element-variables.scss'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
