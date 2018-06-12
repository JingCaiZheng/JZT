// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//基于断点的隐藏类
import 'element-ui/lib/theme-chalk/display.css'
import './assets/css/common.css'
import 'jquery'
import './assets/css/bootstrap.css'
import './assets/js/bootstrap.min'

//使用ElementUI
Vue.use(Element, { size: 'small' })



Vue.config.productionTip = false

// Vue.prototype.$axios=axios

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
