import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ScheduledClasses from '@/components/ScheduledClasses/ScheduledClasses'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/scheduled-classes',
      name: 'ScheduledClasses',
      component: ScheduledClasses
    }
  ]
})
