import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/pages'

import Events from '@/pages/events'
import Event from '@/pages/events/event'

import News from '@/pages/news'
import Article from '@/pages/news/article'

import Topics from '@/pages/topics'
import Topic from '@/pages/topics/topic'

import Publications from '@/pages/publications'
import Publication from '@/pages/publications/publication'

Vue.use(Router)

export default new Router({
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
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/topics',
      name: 'topics',
      component: Topics
    },
    {
      path: '/topic/:slug',
      name: 'topic',
      component: Topic
    },
    {
      path: '/publications',
      name: 'publications',
      component: Publications
    },
    {
      path: '/publication/:slug',
      name: 'publication',
      component: Publication
    },
  ]
})
