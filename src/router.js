import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index/index'
import { Toast } from 'vant';
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}//解决版本问题

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
        {
          path: '/admin/sfrz',
          component: () => import('./views/user/sfrz.vue'),
          beforeEnter: (to, from, next) => {
            let isLogin = localStorage.getItem('user');
            if (isLogin) {
              next()
            } else {
              Toast('请登录');
              setTimeout(()=>{
                Toast.clear();
                if (to.path === '/admin') {
                  next()
                } else {
                  next('/admin/login')
                }
              },300)
            }
          },
        },
        {
          path:'/admin/sfrz/rz',
          component: () => import('./views/user/rz.vue'),
        },
        {
          path: '/admin/al',
          component: () => import('./views/user/al.vue'),
          beforeEnter: (to, from, next) => {
            let isLogin = localStorage.getItem('user');
            if (isLogin) {
              next()
            } else {
              Toast('请登录');
              setTimeout(()=>{
                Toast.clear();
                if (to.path === '/admin') {
                  next()
                } else {
                  next('/admin/login')
                }
              },300)
            }
          },
        },
        {
          path: '/admin/cgx',
          component: () => import('./views/user/cgx.vue'),
          beforeEnter: (to, from, next) => {
            let isLogin = localStorage.getItem('user');
            if (isLogin) {
              next()
            } else {
              Toast('请登录');
              setTimeout(()=>{
                Toast.clear();
                if (to.path === '/admin') {
                  next()
                } else {
                  next('/admin/login')
                }
              },300)
            }
          },
        },
        {
          path: '/admin/ht',
          component: () => import('./views/user/ht.vue'),
          beforeEnter: (to, from, next) => {
            let isLogin = localStorage.getItem('user');
            if (isLogin) {
              next()
            } else {
              Toast('请登录');
              setTimeout(()=>{
                Toast.clear();
                if (to.path === '/admin') {
                  next()
                } else {
                  next('/admin/login')
                }
              },300)
            }
          },
        },
        {
          path: '/admin/shoucang',
          component: () => import('./views/user/shoucang.vue'),
          beforeEnter: (to, from, next) => {
            let isLogin = localStorage.getItem('user');
            if (isLogin) {
              next()
            } else {
              Toast('请登录');
              setTimeout(()=>{
                Toast.clear();
                if (to.path === '/admin') {
                  next()
                } else {
                  next('/admin/login')
                }
              },300)
            
            }
          },
        },
      ]
    },

    {
      path: '/',
      redirect: Index
    }
  ]
})