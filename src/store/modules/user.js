import { login } from '@/api/user'
import { setToken, removeToken } from '../../utils'

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
  login: async ({ commit }, userInfo) => {
    try {
      const { code, data, message } = await login(userInfo)
      if (code === 200) {
        setToken(data.token)
        commit('SET_USER_INFO', data)
        commit('SET_LOGIN_FLAG', true)
        return Promise.resolve(data)
      } else {
        removeToken()
        commit('SET_USER_INFO', null)
        commit('SET_LOGIN_FLAG', false)
        return Promise.reject(message)
      }
    } catch (error) {
      removeToken()
      commit('SET_USER_INFO', null)
      commit('SET_LOGIN_FLAG', false)
      return Promise.reject(error.message)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
