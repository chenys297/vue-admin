import router from './router'
import store from './store'
import { Message } from 'element-ui'
let hasToken = false

router.beforeEach(async (to, from, next) => {
  if (!hasToken) {
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
    hasToken = true
  } else {
    next()
  }
})
