const validator = {
	mobile(rule, value, callback) {
		if(!/^1[3456789]\d{9}$/.test(value)) {
			return new Error('请输入正确的手机号')
		}
		return true
	},
	name(rule, value, callback) {
		if(value === '') {
			return new Error('请输入名字')
		}
		if(!/^[a-zA-Z\u4e00-\u9fa5]+$/g.test(value)) {
			return new Error('名字只能是汉字或字母')
		}
		return true
	}
}

export default validator