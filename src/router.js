import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index/index'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: () => import('./views/index/index')
    },
    {
      path: '/magazine',
      component: () => import('./views/magazine/magazine')
    },
    {
      path: '/stylist',
      component: () => import('./views/stylist/stylist')
    },
    {
      path: '/user',
      component: () => import('./views/user/user.vue'),
      children: [{
          path: '/user',
          redirect: '/admin'
        }, {
          path: '/admin',
          component: () => import('./views/user/admin')
        }, {
          path: '/admin/login',
          component: () => import('./views/user/login')
        },
        {
          path: '/admin/shezhi',
          component: () => import('./views/user/shezhi.vue'),
        },
        {
          path: '/admin/shezhi/yjfk',
          component: () => import('./views/user/yjfk.vue')
        },
        {
          path: '/admin/xx',
          component: () => import('./views/user/xx.vue')
        },
      ]
    },

    {
      path: '/',
      redirect: Index
    }
  ]
})