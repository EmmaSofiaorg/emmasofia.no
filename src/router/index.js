import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/pages'

import Events from '@/pages/events'
import Event from '@/pages/events/event'

import Media from '@/pages/media'

import Publications from '@/pages/publications'
import Publication from '@/pages/publications/publication'

import Testkits from '@/pages/testkits'
import Testkit from '@/pages/testkits/testkit'
import HowTo from '@/pages/testkits/how-to'

import Drugs from '@/pages/drugs'
import Drug from '@/pages/drugs/drug'

import About from '@/pages/about-us'

import Member from '@/pages/member'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'front-page',
      component: FrontPage
    },
    {
      path: '/arrangementer',
      name: 'events',
      component: Events
    },
    {
      path: '/forskning',
      name: 'publications',
      component: Publications
    },
    {
      path: '/testkits',
      name: 'testkits',
      component: Testkits
    },
    {
      path: '/testkits-og-rusvett', // Old route for SEO
      name: 'testkits-old',
      component: Testkits
    },
    {
      path: '/testkit/:id',
      name: 'testkit',
      component: Testkit
    },
    {
      path: '/testkits/hvordan-bruke',
      name: 'HowTo',
      component: HowTo
    },
    {
      path: '/veiledere',
      name: 'drugs',
      component: Drugs
    },
    {
      path: '/rusmiddel/:slug',
      name: 'drug',
      component: Drug
    },
    {
      path: '/om-oss',
      name: 'about-us',
      component: About
    },
    {
      path: '/media',
      name: 'media',
      component: Media
    },
    {
      path: '/medlem',
      name: 'member',
      component: Member
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
