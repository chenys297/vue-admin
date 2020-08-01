const state = {
  sidebarBackgroundColor: '#545c64',
  sidebarTextColor: '#fff',
  sidebarActiveTextColor: '#ffd04b',
  isCollapse: false
}
const actions = {}

const mutations = {
  SET_SIDEBAR_BACKROUND_COLOR: (state, color) => {
    state.sidebarBackgroundColor = color
  },
  SET_SIDEBAR_TEXT_COLOR: (state, color) => {
    state.sidebarTextColor = color
  },
  SET_SIDEBAR_ACTIVE_TEXT_COLOR: (state, color) => {
    state.sidebarActiveTextColor = color
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
