const state = {
  openedRoutes: []
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
      state.openedRoutes.unshift(route)
    }
  },

  removeOpenedRoutes: ({ state }, route) => {
    state.openedRoutes.find((openedRoute, index) => {
      if (openedRoute.path === route.path) {
        state.openedRoute.splice(index, 1)
        return true
      } else {
        return false
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
