<template>
	<view class="text-center">
		<scroll-view class="tab" 
		:class="[
			type, 
			colorType, 
			center ? 'center' : '',
			round ? 'round' : '',
			sticky ? 'sticky' : '',
			gutter ? 'gutter-v' : '',
		]" :scroll-x="scrollable" enable-flex :style="{'background-color':bgColor}">
			<view class="tab-item" :class="[type+'-item', type + '-item-' + colorType, {active: index == curIndex}]" :style="itemStyle"
			 v-for="(item, index) in items" @click="setActive(index)">
				{{item.text}}
				<view class="tab-item-bar" v-if="type === 'line' && index == curIndex" :style="{width: barWidth}"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			color: String,
			bgColor: {
				type: String,
				default: '#fff'
			},
			barWidth: {
				type: String,
				default: '100%'
			},
			scrollThreshold: {
				type: Number,
				default: 5
			},
			type: {
				type: String,
				default: 'line'
			},
			colorType: {
				type: String,
				default: 'primary'
			},
			items: Array,
			center: Boolean,
			round: Boolean,
			sticky: Boolean,
			gutter: Boolean,
			value: {
				type: [String, Number],
				default: 0
			}
		},
		data() {
			return {
				
			};
		},
		computed: {
			scrollable() {
				return this.scrollThreshold <= this.items.length
			},
			itemStyle() {
				if (this.scrollable) {
					return `flex: 0 0 ${88 / this.scrollThreshold}%;`
				}
			},
			curIndex() {
				return this.value
			}
		},
		methods: {
			setActive(index) {
				this.$emit('input', index)
				this.$emit('change', index)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.tab {
		display: flex;
		position: relative;
		height: 90rpx;
		line-height: 90rpx;
		background-color: #fff;
		text-align: center;
	}

	.line::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 200%;
		transform: scale(0.5);
		transform-origin: 0 0;
		height: 1px;
		background-color: var(--border-color);
	}

	.card {
		border: 1px solid var(--primary);
		border-radius: 5px;
		overflow: hidden;

		&.round {
			border-radius: 30px;
		}

		&.error {
			border-color: var(--error);
		}

		&.warning {
			border-color: var(--warning);
		}

		&.info {
			border-color: var(--info);
		}

		&.success {
			border-color: var(--success);
		}
	}

	.tab-item {
		flex: 1;
		position: relative;
		box-sizing: border-box;
		color: var(--content);
	}

	.card-item-primary+.card-item-primary {
		border-left: 1px solid var(--primary);
	}

	.card-item-error+.card-item-error {
		border-left: 1px solid var(--error);
	}

	.card-item-warning+.card-item-warning {
		border-left: 1px solid var(--warning);
	}

	.card-item-success+.card-item-success {
		border-left: 1px solid var(--success);
	}

	.card-item-info+.card-item-info {
		border-left: 1px solid var(--info);
	}

	.line.primary .active {
		color: var(--primary);
	}

	.line.error .active {
		color: var(--error);
	}

	.line.warning .active {
		color: var(--warning);
	}

	.line.success .active {
		color: var(--success);
	}

	.line.info .active {
		color: var(--info);
	}

	.card .active {
		color: #fff;
	}

	.card.primary .active {
		background-color: var(--primary);
	}

	.card.error .active {
		background-color: var(--error);
	}

	.card.warning .active {
		background-color: var(--warning);
	}

	.card.success .active {
		background-color: var(--success);
	}

	.card.info .active {
		background-color: var(--info);
	}

	.tab-item-bar {
		position: absolute;
		bottom: 0;
		height: 2px;
		background-color: currentColor;
		width: 100%;
		left: 50%;
		transform: translateX(-50%);
		animation: width .5s;
		z-index: 10;
	}

	@keyframes width {
		0% {
			transform: translateX(-50%) scale(0);
			opacity: 0;
		}

		100% {
			transform: translateX(-50%) scale(1);
		}
	}

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	.center {
		display: inline-flex;
		width: auto;
	}

	.center .tab-item {
		padding: 0 30px;
	}

	.sticky {
		position: sticky;
		top: 0;
	}

	.gutter-v {
		margin-bottom: var(--gutter);
	}

	/* #ifdef H5 */
	// 通过样式穿透，隐藏H5下，scroll-view下的滚动条
	scroll-view ::v-deep ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	.uni-scroll-view-content{
		display: flex;
	}
	/* #endif */
</style>
