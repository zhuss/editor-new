import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Demo from '@/views/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    }
  ]
})
