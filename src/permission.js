import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from './utils'
const whilteList = ['/login']

router.beforeEach(async (to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/', replace: true })
    }

    if (store.getters.asyncRoutes.length === 0) {
      try {
        const accessRoutes = await store.dispatch(
          'permission/generateRoutes',
          []
        )
        router.addRoutes(accessRoutes)
        next({ ...to, replace: true })
      } catch (error) {
        Message.error(error || 'Has Error')
        next({ path: `/login?redirect=${to.path}` })
      }
    } else {
      next()
    }
  } else {
    if (whilteList.includes(to.path)) {
      next()
    } else {
      next({ path: `/login?redirect=${to.path}` })
    }
  }
})
