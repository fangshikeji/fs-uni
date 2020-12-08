<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
	import Schema from 'async-validator'
	export default {
		props: {
			labelWidth: {
				type: String,
				default: '120rpx'
			},
			textareaHeight: {
				type: String,
				default: '200rpx'
			},
		},
		provide() {
			return {
				form: this
			}
		},
		inject: ['parentForm'],
		data() {
			return {
				
			};
		},
		created() {
			if (this.parentForm) {
				this.parentForm.form = this
				this.validator = new Schema(this.parentForm.rules || {})
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
</script>

<style lang="scss">

</style>
