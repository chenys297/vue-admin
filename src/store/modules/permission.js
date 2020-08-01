// import { constRoutes, resultRoutes } from '@/router'
import dynamicRoutes from '@/router/dynamicRoutes'

function filterAsyncRoutes (permPaths, routes) {
  const ret = []
  routes.forEach(route => {
    if (permPaths.includes(route.path)) {
      let children = []
      if (route.children) {
        children = filterAsyncRoutes(permPaths, route.children)
      }
      ret.push({ ...route, children })
    }
  })
  return ret
}

const state = {
  asyncRoutes: [],
  routes: []
}
const mutations = {
  SET_ASYNC_ROUTES: (state, asyncRoutes) => {
    state.asyncRoutes = asyncRoutes
  },

  SET_ROUTES: (state, routes) => {
    state.routes = routes
  }
}
const actions = {
  generateRoutes ({ commit }, permPaths) {
    return new Promise(resolve => {
      let accessRoutes = filterAsyncRoutes(permPaths, dynamicRoutes)
      // TODO: dev
      accessRoutes = dynamicRoutes
      commit('SET_ASYNC_ROUTES', accessRoutes)
      resolve(accessRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
