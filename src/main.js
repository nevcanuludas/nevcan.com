// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import AppSidebar from './components/Sidebar/Sidebar'
import AppFooter from './components/Footer/Footer'
import AppFooterMobileMessage from './components/FooterMobileMessage/FooterMobileMessage'
import AppAboutMe from './components/AboutMe/AboutMe'

Vue.config.productionTip = false

Vue.component('app-sidebar', AppSidebar)
Vue.component('app-footer', AppFooter)
Vue.component('app-footer-mobile-message', AppFooterMobileMessage)
Vue.component('app-about-me', AppAboutMe)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, AppSidebar, AppFooter, AppFooterMobileMessage, AppAboutMe },
  template: '<App/>'
})
