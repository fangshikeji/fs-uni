import Schema from 'async-validator'

const validatorMixin = {
	computed: {
		validator() {
			return this.rules && new Schema(this.rules)
		}
	},
	methods: {
		validate(data, cb) {
			return this.validator.validate(data).then(() => {
				cb && cb()
			}).catch(({ errors, fields }) => {
				uni.showToast({
					icon: 'none',
					title: errors[0].message
				})
			})
		}
	},
}
export default validatorMixin