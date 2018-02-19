// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueFinger from 'vue-finger'
import 'bootstrap/dist/css/bootstrap.css'
import AppMainMenu from './components/MainMenu/MainMenu'
import AppSidebar from './components/Sidebar/Sidebar'
import AppFooter from './components/Footer/Footer'
import AppFooterMobileMessage from './components/FooterMobileMessage/FooterMobileMessage'
import AppScheduledClasses from './components/ScheduledClasses/ScheduledClasses'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueFinger)

Vue.component('app-main-menu', AppMainMenu)
Vue.component('app-sidebar', AppSidebar)
Vue.component('app-footer', AppFooter)
Vue.component('app-footer-mobile-message', AppFooterMobileMessage)
Vue.component('app-scheduled-classes', AppScheduledClasses)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, AppMainMenu, AppSidebar, AppFooter, AppFooterMobileMessage },
  template: '<App/>'
})
