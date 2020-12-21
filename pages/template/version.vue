<template>
	<view class="list">
		<view class="item" v-for="item in vList">
			<view class="flex justify-between align-center">
				<view class="bd primary">{{item.number}}</view>
				<view class="time">{{item.vdata}}</view>
			</view>
			<view class="title">本次更新</view>
			<view class="content">{{item.content}}</view>
		</view>
	</view>
</template>

<script>
	import { getVersionList } from "@/services/common.js"
	import dayjs from "dayjs"
	
	export default {
		data() {
			return {
				vList: [
					{
						number: '2.0',
						vdata: '2020/11/10',
						content: '版本内容'
					},
					{
						number: '1.0',
						vdata: '2020/10/10',
						content: '版本内容'
					}
				]
			};
		},
	}
</script>

<style lang="scss" scoped>
	.list {
		background-color: #fff;
		padding: 0 var(--gutter);

		.time {
			font-size: 13px;
			color: #5E6678;
			letter-spacing: 1px;
		}

		.title {
			color: #162746;
			font-size: 15px;
			line-height: 26px;
		}

		.content {
			color: #5E6678;
			position: relative;
			padding-left: 30rpx;
			line-height: 26px;

			&::before {
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				width: 8rpx;
				height: 8rpx;
				border-radius: 50%;
				background-color: var(--primary);
				content: '';
			}
		}
	}

	.item {
		padding: 20rpx 0;

		&+& {
			border-top: 2rpx solid #DDDFE5;
		}
	}

	.bd {
		font-size: 18px;
		position: relative;

		&::before {
			position: absolute;
			bottom: 5px;
			left: 0;
			width: 100%;
			height: 5px;
			background-color: currentColor;
			opacity: 0.2;
			content: '';
		}
	}
</style>
