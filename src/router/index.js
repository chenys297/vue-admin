import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const constRoutes = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashoboard',
    hide: true,
    meta: {
      requireAuth: false,
      title: '',
      icon: ''
    }
  },
  {
    path: '/dashoboard',
    name: 'dashoboard',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Dashboard'),
    hide: false,
    meta: {
      requireAuth: false,
      title: 'dashboard',
      icon: 'dashboard'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})

export default router
