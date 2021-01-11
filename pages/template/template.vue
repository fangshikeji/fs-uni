<template>
	<view>
		<fs-avatar src="/static/images/temp/icon_3.png" shape="square" width="100%" height="288rpx"></fs-avatar>
		<view class="box">
			<view class="layout-box radius-lg top-box">
				<view class="user-info">
					<fs-avatar size="140rpx" :src="userInfo.photo" v-if="userInfo.name"></fs-avatar>
					<fs-avatar size="140rpx" v-else link="./login" border>去登录</fs-avatar>
					<view class="content">
						<text class="vm">{{userInfo.name}}</text>
						<fs-icon type="icon-sex-male" color="#2285FF" style="margin-left: 10rpx;" v-if="userInfo.sex === '1'"></fs-icon>
						<fs-icon type="icon-sex-female" colorType="error" style="margin-left: 10rpx;" v-if="userInfo.sex === '2'"></fs-icon>
					</view>
				</view>
				<view class="edit">
					<fs-avatar src="/static/images/temp/icon_21.png" size="45rpx" shape="square" @click="authRoute('./userInfo')"></fs-avatar>
				</view>
				<view class="text-center" style="padding: 20rpx 0;margin-top: 100rpx;">
					<fs-row>
						<fs-col col="6">
							<view @click="authRoute('./visitor/visitor')">
								<view class="hd">{{stats.beVisitorNum || 0}}</view>
								<view class="content">我的访客</view>
							</view>
						</fs-col>
						<fs-col col="6">
							<view class="bdl" @click="authRoute('./collect')">
								<view class="hd">{{stats.cardCollectNum || 0}}</view>
								<view class="content">我的收藏</view>
							</view>
						</fs-col>
					</fs-row>
				</view>
			</view>
			<fs-gutter></fs-gutter>
			<view class="radius-lg bg-white">
				<view class="title-hd bdb">常用工具</view>
				<view class="text-center" style="padding: 20rpx 0;">
					<fs-row>
						<fs-col col="3">
							<view @click="authRoute('./invoice/invoice')">
								<fs-avatar src="/static/images/temp/icon_13.png" size="80rpx"></fs-avatar>
								<view class="content">我的发票</view>
							</view>
						</fs-col>
						<!-- <fs-col col="3">
							<navigator url="./history">
								<fs-avatar src="/static/images/my/icon_14.png" size="80rpx"></fs-avatar>
								<view class="content">我的足迹</view>
							</navigator>
						</fs-col> -->
					</fs-row>
				</view>
			</view>
			<fs-gutter></fs-gutter>
			<view class="radius-lg" style="overflow: hidden;">
				<fs-cell arrow border link="./version">
					<fs-avatar src="/static/images/temp/icon_8.png" slot="title" shape="square" size="36rpx"></fs-avatar>
					<view slot="value">版本更新</view>
				</fs-cell>
				<fs-cell arrow border link="./feedback">
					<fs-avatar src="/static/images/temp/icon_16.png" slot="title" shape="square" size="36rpx"></fs-avatar>
					<view slot="value">投诉建议</view>
				</fs-cell>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	import utils from '@/utils/utils.js'
	import commonMixin from "@/mixins/commonMixin.js"
	export default {
		mixins: [commonMixin],
		data() {
			return {
				stats: {}
			};
		},
		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.box{
	padding: var(--gutter);
	margin-top: -200rpx;
	z-index: 100;
	position: relative;
}
.top-box{
	position: relative;
	.edit{
		position: absolute;
		top: 40rpx;
		right: 40rpx;
	}
	
	.hd{
		font-size: 23px;
		font-weight: bold;
	}
	
	.bdl{
		position: relative;
		
		&::before{
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			width: 2rpx;
			height: 43rpx;
			background-color: #D9D9D9;
			content: '';
		}
	}
}
.user-info{
	position: absolute;
	left: 50%;
	top: -50rpx;
	transform: translateX(-50%);
	text-align: center;
}
</style>
