<template>
	<view class="nodata-box">
		<image :src="src" mode="widthFix" style="width: 400rpx;"></image>
		<view class="content">{{text}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				default: '/static/images/nodata/1.png'
			},
			text: {
				type: String,
				default: '暂无数据'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.nodata-box{
	text-align: center;
	padding: 200rpx 30rpx;
	
	.content{
		margin-top: 20rpx;
	}
}
</style>
