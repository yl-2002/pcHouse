import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/index/index')
    },
    {
      path:'/magazine',
      component: () => import('./views/magazine/magazine')
    },
    {
      path: '/',
      redirect:Index
    }
  ]
})
