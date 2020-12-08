<template>
	<view class="badge">
		<slot></slot>
		<view class="dot" v-if="dot"></view>
		<view class="count" v-else>{{value}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			dot: Boolean,
			count: Number
		},
		data() {
			return {

			};
		},
		computed: {
			value() {
				let {
					count
				} = this
				if (count > 99) {
					return '99+'
				}
				return count
			}
		}
	}
</script>

<style lang="scss" scoped>
	.badge {
		position: relative;
		display: inline-block;
		vertical-align: middle;
	}

	.dot {
		position: absolute;
		width: 16rpx;
		height: 16rpx;
		border-radius: 50%;
		background-color: var(--error);
		top: -8rpx;
		right: -8rpx;
		z-index: 10;
	}

	.count {
		position: absolute;
		white-space: nowrap;
		color: #fff;
		font-size: 12px;
		font-weight: 500;
		padding: 0 6px;
		top: 0;
		right: 0;
		line-height: 18px;
		min-width: 18px;
		transform: translate(50%, -50%) scale(0.8);
		background-color: var(--error);
		border-radius: 9px;
		text-align: center;
		box-sizing: border-box;
	}
</style>
