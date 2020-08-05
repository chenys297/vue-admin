const state = {
  github: 'https://github.com/chenys297/vue-admin',
  openedRoutes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        requireAuth: false,
        title: 'Dashboard',
        icon: 'dashboard'
      }
    }
  ]
}
const mutations = {
  SET_OPENED_ROUTES: (state, openedRoutes) => {
    state.openedRoutes = openedRoutes
  }
}

const actions = {
  addOpenedRoutes: ({ state }, route) => {
    const tmp = state.openedRoutes.find(openedRoute => {
      return openedRoute.path === route.path
    })
    if (!tmp) {
      // state.openedRoutes.unshift(route)
      // 第一个永远是dashboard或者home
      state.openedRoutes.splice(1, 0, route)
    }
  },

  removeOpenedRoutes: ({ state }, route) => {
    return new Promise(resolve => {
      let lastIdx = -1
      state.openedRoutes.find((openedRoute, index) => {
        if (openedRoute.path === route.path) {
          state.openedRoutes.splice(index, 1)
          if (index === 0) {
            lastIdx = index + 1
          } else {
            lastIdx = index - 1
          }
          return true
        } else {
          return false
        }
      })
      resolve(state.openedRoutes[lastIdx])
    })
  },

  clearOpenedRoutes: ({ state }) => {
    state.openedRoutes.splice(1, state.openedRoutes.length - 1)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
