<template>
	<view>
		<fs-panel title="一般用法">
			<fs-grid slot="content" border>
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
			</fs-grid>
		</fs-panel>
		
		<fs-panel title="自定义列数量">
			<fs-grid slot="content" border :columnNum="4">
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
			</fs-grid>
		</fs-panel>
		
		<fs-panel title="带间隔">
			<fs-grid slot="content" gutter="20rpx">
				<fs-grid-item>
					<view class="layout-box bg-primary">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box bg-primary">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box bg-primary">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box bg-primary">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box bg-primary">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
				<fs-grid-item>
					<view class="layout-box bg-primary">
						<fs-avatar src="/static/images/temp.png"></fs-avatar>
					</view>
				</fs-grid-item>
			</fs-grid>
		</fs-panel>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.layout-box{
	width: 100%;
}
</style>
