<template>
	<view class="row" :style="{marginLeft: margin,marginRight:margin}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			gutter: [Number,String]
		},
		provide() {
			return {
				row: this
			}
		},
		data() {
			return {
				
			};
		},
		computed: {
			margin() {
				return `${parseInt(this.gutter) / -2}rpx`
			}
		}
	}
</script>

<style lang="scss" scoped>
.row::after{
  content: '';
  display: table;
  clear: both;
}
</style>
