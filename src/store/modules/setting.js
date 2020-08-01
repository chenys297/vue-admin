const state = {
  sidebarBackgroundColor: '#545c64',
  sidebarTextColor: '#fff',
  sidebarActiveTextColor: '#ffd04b',
  isCollapse: false
}

const mutations = {
  SET_SIDEBAR_BACKROUND_COLOR: (state, color) => {
    state.sidebarBackgroundColor = color
  },
  SET_SIDEBAR_TEXT_COLOR: (state, color) => {
    state.sidebarTextColor = color
  },
  SET_SIDEBAR_ACTIVE_TEXT_COLOR: (state, color) => {
    state.sidebarActiveTextColor = color
  },
  SET_COLLAPSE: (state, isCollapse) => {
    state.isCollapse = isCollapse
  }
}

const actions = {
  toggleCollapse: ({ state, commit }) => {
    commit('SET_COLLAPSE', !state.isCollapse)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
