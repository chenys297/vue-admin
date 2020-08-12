import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from './utils'

router.beforeEach(async (to, from, next) => {
  if (getToken()) {
    if (store.getters.asyncRoutes.length === 0) {
      try {
        const accessRoutes = await store.dispatch(
          'permission/generateRoutes',
          []
        )
        router.addRoutes(accessRoutes)
        if (to.path === '/login') {
          next({ path: '/login', replace: true })
        }
        next({ ...to, replace: true })
      } catch (error) {
        Message.error(error || 'Has Error')
        next({ path: `/login?redirect=${to.path}` })
      }
    } else {
      next()
    }
  } else {
    next({ path: `/login?redirect=${to.path}` })
  }
})
