import store from '@/store/index'
import config from '@/utils/config.js'

const DEFAULT_OPTION = config.httpDefaultOption

export default {
	get(url, data, options) {
		const opt = Object.assign({}, DEFAULT_OPTION, { loadingTitle: '加载中...' }, options)

		if (opt.isAuth) {
			if (!store.state.token) {
				uni.navigateTo({
					url: '/pages/login/login'
				})
				return Promise.reject('')
			}
		}

		opt.showLoading && uni.showLoading({
			title: opt.loadingTitle
		})
		return uni.request({
			url: config.apiBaseUrl + url,
			data: {
				token: store.state.token || '',
				...data
			}
		}).then(res => {
			const [err, data] = res
			const ret = data.data
			if (ret.code === 201) {
				store.commit('setUserInfo', {})
				
				opt.isAuth && uni.navigateTo({
					url: '/pages/login/login'
				})
			}
			return data.data
		}).catch(err => {
			console.log(err)
		}).finally(() => {
			opt.showLoading && uni.hideLoading()
		})
	},
	post(url, data, options) {
		const opt = Object.assign({}, DEFAULT_OPTION, { loadingTitle: '提交中...', contentType: 'application/x-www-form-urlencoded' }, options)

		if (opt.isAuth) {
			if (!store.state.token) {
				uni.navigateTo({
					url: '/pages/login/login'
				})
				
				return Promise.reject('')
			}
		}

		opt.showLoading && uni.showLoading({
			title: opt.loadingTitle
		})

		return uni.request({
			method: 'POST',
			header: {
				'content-type': opt.contentType,
			},
			url: config.apiBaseUrl + url,
			data: {
				token: store.state.token || '',
				...data
			}
		}).then(res => {
			const [err, data] = res
			return data.data
		}).catch(err => {
			console.log(err)
		}).finally(() => {
			opt.showLoading && uni.hideLoading()
		})
	}
}
