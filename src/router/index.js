import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/pages'

import Events from '@/pages/events'
import Event from '@/pages/events/event'

import Publications from '@/pages/publications'
import Publication from '@/pages/publications/publication'

import Testkits from '@/pages/testkits'
import Testkit from '@/pages/testkits/testkit'

import Drugs from '@/pages/drugs'
import Drug from '@/pages/drugs/drug'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'front-page',
      component: FrontPage
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/publications',
      name: 'publications',
      component: Publications
    },
    {
      path: '/testkits',
      name: 'testkits',
      component: Testkits
    },
    {
      path: '/testkit/:slug',
      name: 'testkit',
      component: Testkit
    },
    {
      path: '/drugs',
      name: 'drugs',
      component: Drugs
    },
    {
      path: '/drug/:slug',
      name: 'drug',
      component: Drug
    },
  ]
})
