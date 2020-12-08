import http from '@/utils/http'
import store from '@/store/index'

export function sendCaptcha(phone) {
	return http.get('code', {
		loginName: phone
	}, {
		showLoading: false,
		isAuth: false
	})
}

export function register(data, autoLogin = true) {
	return http.post('register', data, {
		isAuth: false
	}).then(res => {
		if (res.code === 200) {
			login({
				...data,
				loginType: 1
			}, 2)
		} else {
			uni.showToast({
				icon: 'none',
				title: res.msg
			})
		}
	})
}

export function login(data, delta = 1) {
	return http.post('login', data, {
		isAuth: false,
		loadingTitle: '登录中...'
	}).then(res => {
		if (res.code === 200) {
			store.commit('setUserInfo', res.data.userInfo)
			store.commit('setToken', res.data.token)
			
			if (getApp().globalData.noBackHome) {
				getApp().globalData.noBackHome = false
				uni.navigateBack({
					delta: delta
				})
			} else{
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		} else {
			uni.showToast({
				icon: 'none',
				title: res.msg
			})
		}
	})
}

export function logout(data) {
	store.commit('setUserInfo', {})
	store.commit('setToken', '')
	
	uni.reLaunch({
		url: '/pages/login/login'
	})
	return http.post('logout', data, {
		isAuth: false,
		showLoading: false
	})
}

export function updatePwd(data) {
	return http.get('user/updatePwd', data, {
		loadingTitle: '提交中...'
	})
}

export function forgetPwd(data) {
	return http.post('forgetPwd', data)
}

export function getVersionList(data) {
	return http.get('app/version/list', data, {isAuth: false})
}

export function addAdvice(data) {
	return http.post('user/advice/add', data)
}
