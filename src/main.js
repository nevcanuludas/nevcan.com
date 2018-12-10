// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import translations from './resources/translations'
import VueFinger from 'vue-finger'
import 'bootstrap/dist/css/bootstrap.css'
import AppMainMenu from './components/MainMenu/MainMenu'
import AppSidebar from './components/Sidebar/Sidebar'
import AppFooter from './components/Footer/Footer'
import AppMapbox from './components/Mapbox/Mapbox'
import AppFooterMobileMessage from './components/FooterMobileMessage/FooterMobileMessage'
import AppScheduledClasses from './components/ScheduledClasses/ScheduledClasses'
import AppFaq from './components/Faq/Faq'

Vue.use(VueI18n)
Vue.use(Vuelidate)
Vue.config.formApiUrl = process.env.FORM_API_URL
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueFinger)

Vue.component('app-main-menu', AppMainMenu)
Vue.component('app-sidebar', AppSidebar)
Vue.component('app-footer', AppFooter)
Vue.component('app-mapbox', AppMapbox)
Vue.component('app-footer-mobile-message', AppFooterMobileMessage)
Vue.component('app-scheduled-classes', AppScheduledClasses)
Vue.component('app-faq', AppFaq)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: translations
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App),
  components: { App, AppMainMenu, AppSidebar, AppFooter, AppFooterMobileMessage },
  template: '<App/>'
})
