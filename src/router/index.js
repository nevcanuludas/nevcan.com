import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CertificateDetails from '@/components/Certificates/Detail'
import CourseDetails from '@/components/Courses/Detail'
import ScheduledClasses from '@/components/ScheduledClasses/ScheduledClasses'
import NotFoundComponent from '@/components/NotFoundComponent/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/certificates/:id', component: CertificateDetails, name: 'CertificateDetails' },
    { path: '/courses/:id', component: CourseDetails, name: 'CourseDetails' },
    { path: '/scheduled-classes', component: ScheduledClasses, name: 'ScheduledClasses' },
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
