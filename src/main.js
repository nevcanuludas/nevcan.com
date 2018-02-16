// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import AppMainMenu from './components/MainMenu/MainMenu'
import AppSidebar from './components/Sidebar/Sidebar'
import AppFooter from './components/Footer/Footer'
import AppFooterMobileMessage from './components/FooterMobileMessage/FooterMobileMessage'
import AppAboutMe from './components/AboutMe/AboutMe'
import AppCertificates from './components/Certificates/Certificates'
import AppCourses from './components/Courses/Courses'
import AppServices from './components/Services/Services'
import AppContact from './components/Contact/Contact'

Vue.config.productionTip = false

Vue.component('app-main-menu', AppMainMenu)
Vue.component('app-sidebar', AppSidebar)
Vue.component('app-footer', AppFooter)
Vue.component('app-footer-mobile-message', AppFooterMobileMessage)
Vue.component('app-about-me', AppAboutMe)
Vue.component('app-certificates', AppCertificates)
Vue.component('app-courses', AppCourses)
Vue.component('app-services', AppServices)
Vue.component('app-contact', AppContact)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, AppMainMenu, AppSidebar, AppFooter, AppFooterMobileMessage },
  template: '<App/>'
})

new Vue({
  el: '#home',
  components: { AppAboutMe, AppCertificates, AppCourses, AppServices, AppContact }
})
