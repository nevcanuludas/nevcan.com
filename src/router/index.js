import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CertificateDetails from '@/components/Certificates/Detail'
import CourseDetails from '@/components/Courses/Detail'
import ServiceDetails from '@/components/Services/Detail'
import ConservationDetails from '@/components/Conservation/Detail'
import ScheduledClasses from '@/components/ScheduledClasses/ScheduledClasses'
import Faq from '@/components/Faq/Faq'
import Store from '@/components/Store/Store'
import NotFoundComponent from '@/components/NotFoundComponent/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/certificates/:id', component: CertificateDetails, name: 'CertificateDetails' },
    { path: '/courses/:id', component: CourseDetails, name: 'CourseDetails' },
    { path: '/services/:id', component: ServiceDetails, name: 'ServiceDetails' },
    { path: '/conservation/:id', component: ConservationDetails, name: 'ConservationDetails' },
    { path: '/scheduled-classes', component: ScheduledClasses, name: 'ScheduledClasses' },
    { path: '/faq', component: Faq, name: 'Faq' },
    { path: '/store', component: Store, name: 'Store' },
    { path: '/not-found', component: NotFoundComponent },
    { path: '*', component: NotFoundComponent }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
