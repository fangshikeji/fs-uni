import store from '@/store/index'
import config from '@/utils/config.js'

function upload(url, filePath) {
	return uni.uploadFile({
		url: config.apiBaseUrl + url,
		name: 'file',
		formData: {
			token: uni.getStorageSync('token'),
		},
		filePath
	}).then(res => {
		const [err, data] = res
		return JSON.parse(data.data)
	})
}

class Utils {
	authLogin(cb) {
		if (!store.state.token) {
			return uni.navigateTo({
				url: '/pages/login/login'
			})
		}
		cb && cb()
	}

	chooseImage(data) {
		return uni.chooseImage({
			count: 1,
			...data
		}).then(res => {
			const [err, data] = res
			return data && data.tempFilePaths || []
		})
	}

	chooseAndUpload(uploadMethod, chooseParam) {
		const uploadArr = []
		return this.chooseImage(chooseParam).then(filePaths => {
			filePaths.forEach(filePath => {
				uploadArr.push(this[uploadMethod](filePath).then(res => {
					if (res.code === 200) {
						return res.data
					} else {
						this.showToast(res.msg)
					}
				}))
			})
			uni.showLoading({
				title: '上传中...'
			})
			return Promise.all(uploadArr).then(res => {
				uni.hideLoading()
				return res.filter(item => item)
			})
		})
	}

	uploadAvatar(filePath) {
		return upload('user/imageUpload', filePath)
	}

	uploadFile(filePath) {
		return upload('file/upload', filePath)
	}

	uploadFace(filePath) {
		return upload('user/imageUploadTwo', filePath)
	}

	chooseAndUploadFile(chooseParam) {
		return this.chooseAndUpload('uploadFile', chooseParam)
	}

	chooseAndUploadAvatar(chooseParam) {
		return this.chooseAndUpload('uploadAvatar', chooseParam)
	}

	chooseAndUploadFace(chooseParam) {
		return this.chooseAndUpload('uploadFace', chooseParam)
	}

	showToast(title) {
		uni.showToast({
			icon: 'none',
			title
		})
	}
}

export default new Utils()
