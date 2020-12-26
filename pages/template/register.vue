<template>
	<view>
		<fs-form>
			<fs-field placeholder="请输入姓名" border v-model="name" focus></fs-field>
			<captcha ref="captcha"></captcha>
			<fs-field type="password" placeholder="请输入密码" maxlength=20 border v-model="password"></fs-field>
			<fs-field type="password" placeholder="请再次输入密码" maxlength=20 border v-model="password2"></fs-field>

			<view style="margin: 60rpx 0 30rpx;">
				<fs-button block round type="primary" @click="register">注册</fs-button>
			</view>
			<fs-button block round type="primary" plain link="./login">返回登录</fs-button>
		</fs-form>
	</view>
</template>

<script>
	import captcha from '@/business/captcha.vue'
	import { register } from '@/services/common.js'
	import validator from '@/utils/validator.js'
	import validatorMixin from '@/mixins/validatorMixin'
	export default {
		components: {
			captcha
		},
		mixins: [validatorMixin],
		data() {
			const validatePass2 = (rule, value, callback) => {
				if (value === '') {
					return new Error('请再次输入密码')
				} else if (value !== this.password) {
					return new Error('两次输入密码不一致')
				} else {
					callback();
				}
			}
			return {
				phone: '',
				name: '',
				password: '',
				password2: '',
				captchaCom: {},
				rules: {
					name: {
						validator: validator.name,
						transform(value) {
							return value.trim()
						}
					},
					loginName: {
						validator: validator.mobile
					},
					code: {
						required: true,
						message: '请输入验证码',
						transform(value) {
							return value.trim()
						}
					},
					password: {
						required: true,
						message: '请输入密码',
						transform(value) {
							return value.trim()
						}
					},
					password2: {
						validator: validatePass2
					},
				}
			}
		},
		methods: {
			register() {
				const registerData = {
					name: this.name,
					loginName: this.$refs.captcha.phone,
					password: this.password,
					code: this.$refs.captcha.code
				}
				this.validate({
					...registerData,
					password2: this.password2,
				}, () => {
					register(registerData)
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}
</style>
