<template>
	<view class="gutter" :style="styleStr"></view>
</template>

<script>
	export default {
		props: {
			height: {
				type: String,
				default: '20rpx'
			},
			bgColor: String
		},
		data() {
			return {

			};
		},
		computed: {
			styleStr() {
				const { height, bgColor } = this.$props
				return `height: ${height};background-color:${bgColor}`
			}
		}
	}
</script>

<style lang="scss" scoped>
.gutter{
  width: 100%;
  background-color: var(--bg-color);
}
</style>
