<template>
	<view class="item" :class="{card}">
		<view class="title-box" :class="[{open},position]" @click="handleTap">
			<view class="item-hd" :class="[highlight]"><slot name="title"></slot></view>
			<view class="arrow-box" :class="[{open},highlight]" :style="styleStr">
				<slot name="arrow">
					<view class="arrow"></view>
				</slot>
			</view>
		</view>
		<view class="content" v-if="open">
			<slot name="content"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			name: [String, Number],
			disabled: Boolean
		},
		inject: ['collapse'],
		data() {
			return {
				open: false,
				isCustomArrow: false,
				card: false
			};
		},
		created() {
			this.collapse.children.push(this)
			this.open = this.collapse.allOpen || this.collapse.active === this.name
			this.card = this.collapse.card
			this.$nextTick(() => this.isCustomArrow = this.$slots.arrow !== undefined)
		},
		computed: {
			position() {
				return this.collapse.position
			},
			rotate() {
				return this.collapse.rotate
			},
			styleStr() {
				return this.open && this.isCustomArrow ? `transform: rotate(${this.rotate}deg);` : ''
			},
			highlight() {
				return this.open && !this.disabled && this.collapse.activeType
			}
		},
		methods: {
			setActive(open) {
				this.open = open && !this.disabled
			},
			handleTap() {
				!this.disabled && this.collapse.emitEvent(this.name)
			}
		}
	}
</script>

<style lang="scss" scoped>
	// .item {
	// 	border-bottom: 1px solid var(--border-color);
	// }

	.title-box {
		display: flex;
		padding: 20rpx var(--gutter);
		justify-content: space-between;
		align-items: center;
		
		
		.item-hd{
			min-width: 0;
			flex: 1;
		}
		&.left{
			flex-direction: row-reverse;
			.item-hd{
				padding-left: 10rpx;
			}
		}
		
		&.right{
			.item-hd{
				padding-right: 10rpx;
			}
		}
	}
	
	.card {
		background-color: #fff;
		overflow: hidden;
		
		.title-box{
			background-color: #F2F2F2;
			.item-hd{
				padding-left: 20rpx;
				position: relative;
				
				&::before{
					position: absolute;
					content: '';
					width: 3px;
					height: 13px;
					background-color: #3A375B;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
				}
			}
			&.open{
				border-bottom: 2rpx solid var(--border-color);
			}
		}
	}
	
	.arrow-box{
		line-height: 1;
	}

	.arrow {
		border-top: 2rpx solid currentColor;
		border-right: 2rpx solid currentColor;
		transform: rotate(45deg);
		width: 16rpx;
		height: 16rpx;
		color: inherit;
		transition: all .1s;
		flex-shrink: 0;
	}

	.open {
		.arrow {
			transform: rotate(135deg);
		}
	}
</style>
