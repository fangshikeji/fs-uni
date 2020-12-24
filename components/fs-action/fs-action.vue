<template>
	<fs-popup direction="bottom" height="auto" v-model="show" :showMask="showMask" :maskClickable="maskClickable">
		<view class="action">
			<view class="action-item" v-for="item in list" @click="handleAction(item)">{{item.name}}</view>
			<view class="action-extra">
				<slot></slot>
			</view>
			<view class="cancel" v-if="showCancel" @click="cancel">{{cancelText}}</view>
		</view>
	</fs-popup>
</template>

<script>
	export default {
		props: {
			list: Array,
			value: Boolean,
			showMask: {
				type: Boolean,
				default: true
			},
			maskClickable: {
				type: Boolean,
				default: true
			},
			cancelText: {
				type: String,
				default: '取消'
			},
			showCancel: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {

			};
		},
		computed: {
			show: {
				get() {
					return this.value
				},
				set(val) {
					this.$emit('input', val)
				}
			}
		},
		methods: {
			cancel() {
				this.$emit('input', false)
			},
			handleAction(item) {
				this.$emit('itemTap',item)
				this.cancel()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.action {
		background-color: #f8f8f8;
	}

	.action-item {
		padding: 20rpx;
		text-align: center;
		background-color: #fff;

		&+& {
			border-top: 1px solid var(--border-color);
		}
	}

	.cancel {
		padding: 20rpx;
		text-align: center;
		background-color: #fff;
		margin-top: 10rpx;
	}
</style>
