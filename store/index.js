import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: uni.getStorageSync('userInfo') || {},
		token: uni.getStorageSync('token') || ''
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
			uni.setStorageSync('userInfo', userInfo)
    },
		setToken(state, token) {
			state.token = token
			uni.setStorageSync('token', token)
		}
  }
})

export default store