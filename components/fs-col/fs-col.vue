<template>
	<view class="col" :class="['col-' + col,{gutter}]" :style="styleStr">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			col: {
				type: [Number, String],
				default: 12
			},
			gutter: Boolean
		},
		inject: ['row'],
		data() {
			return {

			};
		},
		computed: {
			styleStr() {
				const padding = parseInt(this.row.gutter) / 2
				return padding ? `padding-left: ${padding}rpx;padding-right: ${padding}rpx;` : ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.col {
		float: left;
		box-sizing: border-box;
	}
	@for $i from 1 through 12 {
		.col-#{$i} {
			width: 100% / 12 * $i;
		}
	}
	.gutter {
		margin-bottom: var(--gutter-v);
	}
</style>
