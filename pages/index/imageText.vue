<template>
	<view>
		<fs-panel title="一般用法">
			<view slot="content">
				<fs-image-cell gutter imageSrc="/static/images/temp.png" imageSize="160rpx" shape="square" link="./index" linkType="switchTab">
					<view class="title bold">保险人所得税</view>
					<view class="content">保险人所得税</view>
					<view class="content">保险人所得税</view>
				</fs-image-cell>
				
			</view>
		</fs-panel>
		<fs-panel title="竖直排列">
			<view slot="content">
				<fs-image-cell shadow gutter direction="v" imageSrc="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg" imageWidth="100%" imageHeight="300rpx">
					<view class="title line2">中高端客户开拓的必备之法律工具</view>
					<view class="flex justify-between align-center">
						<view class="error">¥16 <text class="sub" style="text-decoration: line-through;font-size: 12px;margin-left: 5rpx;">¥16</text></view>
						<view class="sub">214人已购</view>
					</view>
				</fs-image-cell>
			</view>
		</fs-panel>
		
		<fs-panel title="图片自定义大小/形状/位置">
			<view slot="content">
				<fs-image-cell border imageSrc="/static/images/temp.png" imageWidth="200rpx" imageHeight="160rpx" shape="square" link="./index" linkType="switchTab">
					<view class="title bold">保险人所得税</view>
					<view class="content">保险人所得税</view>
					<view class="content">保险人所得税</view>
				</fs-image-cell>
				<fs-image-cell imagePosition="right" justify="right" imageSrc="/static/images/temp.png" imageSize="160rpx" shape="circle" link="./index" linkType="switchTab" >
					<view class="text-right" style="padding-right: 10px;">
						<view class="title bold">保险人所得税</view>
						<view class="content">保险人所得税</view>
						<view class="content">保险人所得税</view>
					</view>
				</fs-image-cell>
			</view>
		</fs-panel>
		
		<fs-panel title="带阴影">
			<view slot="content" class="layout-box">
				<fs-image-cell shadow="" imageSrc="/static/images/temp.png" imageSize="160rpx" shape="square" link="./index" linkType="switchTab">
					<view class="title bold">保险人所得税</view>
					<view class="content">保险人所得税</view>
					<view class="content">保险人所得税</view>
				</fs-image-cell>
				
			</view>
		</fs-panel>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
