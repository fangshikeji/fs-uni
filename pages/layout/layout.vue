<template>
	<view>
		<divideItem :list="list">
			<template #default="{item}">
				<view class="hd">{{item.num || 0}}</view>
				<view class="content">{{item.title}}</view>
			</template>
		</divideItem>
		
		<fs-gutter></fs-gutter>
		
		<divideItem :list="list1">
			<template #default="{item}">
				<view class="hd">{{item.num || 0}}</view>
				<view class="content">{{item.title}}</view>
			</template>
		</divideItem>
		
		<fs-gutter></fs-gutter>
		
		<view class="bg-white radius-lg">
			<fs-grid :columnNum="4">
				<fs-grid-item v-for="item in list2">
					<view style="padding: 20rpx;">
						<fs-avatar :src="item.src" size="80rpx"></fs-avatar>
						<view class="content">{{item.title}}</view>
					</view>
				</fs-grid-item>
			</fs-grid>
		</view>
		
		<fs-gutter></fs-gutter>
		<view class="radius-lg" style="overflow: hidden;">
			<fs-cell arrow border link="../template/version">
				<fs-avatar src="/static/images/temp/icon_8.png" slot="title" shape="square" size="36rpx"></fs-avatar>
				<view slot="value">版本更新</view>
			</fs-cell>
			<fs-cell arrow border link="../template/feedback">
				<fs-avatar src="/static/images/temp/icon_16.png" slot="title" shape="square" size="36rpx"></fs-avatar>
				<view slot="value">投诉建议</view>
			</fs-cell>
		</view>
		
		<fs-gutter></fs-gutter>
		<fs-grid :columnNum="2" gutter="20rpx">
			<fs-grid-item v-for="item in 4">
				<fs-image-cell direction="v" imageSrc="/static/images/temp.png" imageWidth="100%" imageHeight="200rpx" radius style="width: 100%;">
					<view class="text-left">
						<view class="line1">OI操作指南</view>
						<view class="scroll-content-bd">2020/04/12 12:23</view>
					</view>
				</fs-image-cell>
			</fs-grid-item>
		</fs-grid>
	</view>
</template>

<script>
	import divideItem from '@/business/divideItem.vue'
	export default {
		components: {
			divideItem
		},
		data() {
			return {
				list: [{
						title: '我的收藏'
					},
					{
						title: '我的收藏'
					}
				],
				list1: [{
						title: '我的收藏'
					},
					{
						title: '我的收藏'
					},
					{
						title: '我的收藏'
					},
					{
						title: '我的收藏'
					}
				],
				list2: [{
						title: '我的收藏',
						src: '/static/images/temp/icon_13.png'
					},
					{
						title: '我的收藏',
						src: '/static/images/temp/icon_13.png'
					},
					{
						title: '我的收藏',
						src: '/static/images/temp/icon_13.png'
					},
					{
						title: '我的收藏',
						src: '/static/images/temp/icon_13.png'
					},
					{
						title: '我的收藏',
						src: '/static/images/temp/icon_13.png'
					},
					{
						title: '我的收藏',
						src: '/static/images/temp/icon_13.png'
					},
					{
						title: '我的收藏',
						src: '/static/images/temp/icon_13.png'
					},
					{
						title: '我的收藏',
						src: '/static/images/temp/icon_13.png'
					},
				]
			};
		}
	}
</script>

<style lang="scss">
	page {
		padding: 20rpx;
	}

	.hd {
		font-size: 23px;
		font-weight: bold;
	}
</style>
