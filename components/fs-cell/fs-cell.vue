<template>
	<view class="cell" :class="[cls,{shadow}]" :style="{backgroundColor:bgColor}" @click="handleLink">
		<view class="cell-flex" :class="['cell-align-' + align, justify,{reverse}]">
			<view class="cell-title" :style="titleStyle">
				<template v-if="title">{{title}}</template>
				<slot v-else name="title"></slot>
			</view>
			<view class="cell-value">
				<template v-if="value">{{value}}</template>
				<slot v-else name="value"></slot>
			</view>
			<view class="cell-extra">
				<template v-if="extra">{{extra}}</template>
				<slot v-else name="extra"></slot>
			</view>
		</view>
		<view class="cell-label">
			<template v-if="label">{{label}}</template>
			<slot v-else name="label"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			value: String,
			extra: String,
			label: String,
			arrow: Boolean,
			border: Boolean,
			tighten: Boolean,
			gutter: Boolean,
			radius: Boolean,
			reverse: Boolean,
			align: {
				type: String,
				default: 'center'
			},
			justify: {
				type: String,
				default: 'left'
			},
			bgColor: {
				type: String,
				default: '#fff'
			},
			shadow: Boolean,
			titleWidth: String,
			link: String,
			linkType: {
				type: String,
				default: 'navigateTo'
			},
		},
		data() {
			return {

			};
		},
		computed: {
			cls() {
				const {
					arrow,
					border,
					tighten,
					gutter,
					radius
				} = this.$props
				const classNames = []

				arrow && classNames.push('arrow')
				border && classNames.push('border')
				tighten && classNames.push('tighten')
				gutter && classNames.push('gutter')
				radius && classNames.push('radius')

				return classNames.join(' ')
			},
			titleStyle() {
				return this.titleWidth ? `width: ${this.titleWidth}` : ''
			}
		},
		methods: {
			handleLink() {
				if (this.link) {
					uni[this.linkType]({
						url: this.link
					})
				}
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cell {
		padding: 30rpx var(--gutter);
		position: relative;
		font-size: 14px;
		background-color: #fff;
		line-height: 1.4;
		width: 100%;
		box-sizing: border-box;
	}

	.tighten {
		padding: var(--tighten-gutter);
	}

	.border {
		border-bottom: 1px solid var(--divider);
	}

	.cell-flex {
		display: flex;
		justify-content: space-between;
	}

	.cell-value {
		flex: 1;
		padding-left: 20rpx;
		text-align: right;
	}

	.arrow {
		padding-right: 50rpx;
	}

	.arrow::after {
		content: '';
		position: absolute;
		border-top: 2rpx solid currentColor;
		border-right: 2rpx solid currentColor;
		transform: translateY(-50%) rotate(45deg);
		width: 16rpx;
		height: 16rpx;
		top: 50%;
		right: 20rpx;
		color: var(--content);
	}

	.gutter {
		margin-bottom: var(--gutter-v);
	}

	.cell-align-top {
		align-items: flex-start;
	}

	.cell-align-center {
		align-items: center;
	}

	.cell-align-bottom {
		align-items: flex-end;
	}

	.left .cell-value {
		text-align: left;
	}

	.center .cell-value {
		text-align: center;
	}

	.right .cell-value {
		text-align: right;
	}

	.cell-label {
		font-size: 12px;
		color: var(--sub);
	}

	.radius {
		border-radius: 10rpx;
	}
	.reverse{
		flex-direction: row-reverse;
	}
</style>
