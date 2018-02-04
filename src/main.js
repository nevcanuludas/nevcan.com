// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import AppSidebar from './components/Sidebar/Sidebar'
import AppFooter from './components/Footer/Footer'

Vue.config.productionTip = false

Vue.component('app-sidebar', AppSidebar)
Vue.component('app-footer', AppFooter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, AppSidebar, AppFooter },
  template: '<App/>'
})
