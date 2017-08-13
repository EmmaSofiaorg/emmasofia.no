import Vue from 'vue'
import Router from 'vue-router'

import Front from '@/pages/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'front',
      component: Front,
    }
  ]
})
