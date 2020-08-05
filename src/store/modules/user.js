import { login, logout } from '@/api/user'
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
      const usrInfo = await login(userInfo)
      setToken(usrInfo.token)
      commit('SET_USER_INFO', usrInfo)
      commit('SET_LOGIN_FLAG', true)
      return Promise.resolve(usrInfo)
    } catch (error) {
      removeToken()
      commit('SET_USER_INFO', null)
      commit('SET_LOGIN_FLAG', false)
      return Promise.reject(error)
    }
  },

  logout: async ({ commit, dispatch }) => {
    try {
      await logout()
      removeToken()
      commit('SET_LOGIN_FLAG', false)
      commit('SET_USER_INFO', null)
      dispatch('app/clearOpenedRoutes', null, { root: true })
      Promise.resolve()
    } catch (error) {
      Promise.reject(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
