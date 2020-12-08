<template>
	<view class="timeline">
		<view class="timeline-item" :class="[colorType]" :style="styleStr" v-for="(item, index) in options">
			<view class="dot-box">
				<slot name="dot" :item="item" :index="index"><view class="dot"></view></slot>
			</view>
			<view class="content"><slot :item="item" :index="index"></slot></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			options: Array,
			colorType: String,
			color: String,
			activeColor: String,
			activeColorType: String
		},
		data() {
			return {
				
			};
		},
		computed: {
			styleStr() {
				const { color } = this.$props
				return color ? `color:${color};` : ''
			}
		}
	}
</script>

<style lang="scss" scoped>
.timeline-item{
	padding: 0 var(--gutter);
	border-left: 1px solid;
	position: relative;
}
.dot-box{
	position: absolute;
	left: 0;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: #fff;
}
.dot{
	width: 15rpx;
	height: 15rpx;
	border-radius: 50%;
	border: 1px solid currentColor;
}
.content{
	padding: var(--gutter) 0;
}
</style>
