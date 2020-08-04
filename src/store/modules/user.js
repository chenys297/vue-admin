const state = {
  roles: [999],
  isLogin: false,
  userInfo: null
}
const mutations = {
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  },

  SET_LOGIN_FLAG: (state, isLogin) => {
    state.isLogin = isLogin
  }
}

const actions = {
  Login: ({ commit }, formData) => {
    return new Promise((resolve, reject) => {
      if (formData.username === 'admin' && formData.password === 'admin') {
        resolve({ code: 200, data: formData })
      } else {
        reject({ code: 403, message: '请使用admin登录' })
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
