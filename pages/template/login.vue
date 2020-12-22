<template>
	<view class="layout-box">
		<view class="bg pr">
			<image src="/static/images/login_bg.jpg" mode="widthFix" style="width: 100%;"></image>
			<view class="bg-text">
				<view class="bg-text-hd">您好，</view>
				<view class="bg-text-bd">欢迎登录XXX平台</view>
			</view>
		</view>
		<view class="shadow">
			<fs-form>
				<fs-field type="number" border placeholder="账号" v-model="loginName" maxlength=11></fs-field>
				<fs-field border placeholder="密码" type="password" v-model="password" maxlength=20></fs-field>
			</fs-form>
			
			<!-- <fs-cell justify="right">
				<navigator class="primary fs12" slot="title" url="./forgetPwd">忘记密码？</navigator>
				<navigator class="primary fs12" slot="value" url="./register">去注册</navigator>
			</fs-cell> -->
		</view>
		<view class="login-btn">
			<fs-button block round type="primary" @click="login">登录</fs-button>
		</view>
	</view>
</template>

<script>
	import { login } from "@/services/common.js"
	export default {
		provide() {
			return {
				parentForm: this
			}
		},
		data() {
			return {
				phone: '',
				password: '',
				loginName: '',
				rules: {
					loginName: { required: true, message: '请输入账号'},
					password: { required: true, message: '请输入密码'}
				}
			};
		},
		methods: {
			login() {
				this.form.validate({
					loginName: this.loginName,
					password: this.password,
					loginType: 1
				},() => {
					login(loginData)
				})
			}
		},
	}
</script>

<style>
	page {
		background-color: #fff;
	}
</style>
<style lang="scss" scoped>
	.bg-text{
		position: absolute;
		left: 80rpx;
		top: 0;
		
		&-hd{
			font-size: 25px;
			line-height: 20px;
			margin-bottom: 20rpx;
		}
		&-bd{
			font-size: 16px;
		}
	}
	.shadow {
		border-radius: 40rpx;
		overflow: hidden;
		padding-bottom: 120rpx;
	}

	.hd {
		flex: 1;
		text-align: center;
		padding: 30rpx 20rpx;
		font-size: 15px;
	}

	.login-btn {
		padding: 0 100rpx;
		margin-top: -50rpx;
	}
</style>
