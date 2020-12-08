<template>
	<view>
		<fs-field border placeholder="请输入手机号" type="number" v-model="phone" maxlength=11></fs-field>
		<fs-field border type="number" placeholder="请输入验证码" v-model="code" maxlength=6>
			<fs-button slot="after" radius type="primary" plain round @click="getCaptcha" :disabled="sending" width="170rpx">{{timerText}}</fs-button>
		</fs-field>
	</view>
</template>

<script>
	import {
		sendCaptcha
	} from "@/services/common.js"

	export default {
		inject: ['parentForm'],
		data() {
			return {
				phone: '',
				code: '',
				timerText: '获取验证码',
				sending: false
			}
		},
		created() {
			this.phone = this.parentForm.phone
			this.parentForm.captchaCom = this
		},
		methods: {
			getCaptcha() {
				if (!/^1[3456789]\d{9}$/.test(this.phone)) {
					return uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号'
					})
				}
				this.sending = true
				let timer = 60
				this.timerId = setInterval(() => {
					if (--timer > 0) {
						this.timerText = `${timer}s`
					} else {
						this.endSendCaptcha()
					}
				}, 1000)
				sendCaptcha(this.phone)
			},
			endSendCaptcha() {
				this.sending = false
				this.timerText = '获取验证码'

				clearInterval(this.timerId)
			}
		},
	}
</script>

<style>
</style>
