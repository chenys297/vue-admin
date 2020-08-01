import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index.vue'

Vue.use(VueRouter)

export const constRoutes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    meta: {
      requireAuth: false,
      title: 'home',
      icon: ''
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
          import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard'),
        hidden: false,
        meta: {
          requireAuth: false,
          title: 'Dashboard',
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
    hidden: true,
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
    hidden: true,
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

// TODO: fix Uncaught (in promise) Error: Avoided redundant navigation to current locatio
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
