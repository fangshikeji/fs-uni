<template>
	<fs-popup direction="bottom" height="auto" :show="show" @update:show="cancel" :showMask="showMask" :maskClickable="maskClickable">
		<cover-view class="action">
			<cover-view class="action-item" v-for="item in list" @click="handleAction(item)">{{item.name}}</cover-view>
			<cover-view class="action-extra">
				<slot></slot>
			</cover-view>
			<cover-view class="cancel" v-if="showCancel" @click="cancel">{{cancelText}}</cover-view>
		</cover-view>
	</fs-popup>
</template>

<script>
	export default {
		props: {
			list: Array,
			show: Boolean,
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
		methods: {
			cancel() {
				this.$emit('update:show', false)
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
