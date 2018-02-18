import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ScheduledClasses from '@/components/ScheduledClasses/ScheduledClasses'
import NotFoundComponent from '@/components/NotFoundComponent/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/scheduled-classes', component: ScheduledClasses, name: 'ScheduledClasses' },
    { path: '*', component: NotFoundComponent }
  ]
})
