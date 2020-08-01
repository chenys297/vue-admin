import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index.vue'

Vue.use(VueRouter)

export const constRoutes = [
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

export const resultRoutes = [
  {
    path: '/forbidden',
    name: 'forbidden',
    component: () => import('@/views/Results/403.vue'),
    hidden: false,
    meta: {
      requireAuth: false,
      title: 'forbidden',
      icon: ''
    }
  },
  {
    path: '*',
    name: 'notFund',
    component: () => import('@/views/Results/404.vue'),
    hidden: false,
    meta: {
      requireAuth: false,
      title: 'notFund',
      icon: ''
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes.concat(resultRoutes)
})

export default router
