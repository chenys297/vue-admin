import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index.vue'

Vue.use(VueRouter)

const constRoutes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/dashoboard',
    hide: true,
    meta: {
      requireAuth: false,
      title: 'layout',
      icon: ''
    },
    children: [
      {
        path: '/dashoboard',
        name: 'dashoboard',
        component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard'),
        hide: false,
        meta: {
          requireAuth: false,
          title: 'dashboard',
          icon: 'dashboard'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
    hidden: true,
    meta: {
      requireAuth: false,
      title: 'login',
      icon: ''
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})

export default router
