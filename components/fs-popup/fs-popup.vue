<template>
	<view class="popup">
		<view class="popup-drawer" :class="[direction,{show:value}]" :style="style">
			<slot></slot>
		</view>
		<view class="popup-layer" v-if="value && showMask" @click="close"></view>
	</view>
</template>

<script>
	export default {
		props: {
			value: Boolean,
			direction: {
				type: String,
				default: 'left'
			},
			width: {
				type: String,
				default: '80%'
			},
			height: {
				type: String,
				default: '30%'
			},
			showMask: {
				type: Boolean,
				default: true
			},
			maskClickable: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				
			};
		},
		computed: {
			style() {
				let ret = ''
				if (this.direction === 'left' || this.direction === 'right') {
					ret = `width: ${this.width}`
				} else {
					ret = `height: ${this.height}`
				}
				return ret
			}
		},
		methods: {
			close() {
				if(this.maskClickable) {
					this.$emit('input', false)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.popup {
	&-drawer{
		position: fixed;
		background-color: #fff;
		z-index: 100;
		transition: all .3s;
	}
	
	.left{
		top: var(--window-top);
		bottom: var(--window-bottom);
		left: 0;
		transform: translateX(-100%);
	}
	.right{
		top: var(--window-top);
		bottom: var(--window-bottom);
		right: 0;
		transform: translateX(100%);
	}
	.top{
		top: var(--window-top);
		right: 0;
		left: 0;
		transform: translateY(-100%);
	}
	.bottom{
		left: 0;
		bottom: var(--window-bottom);
		right: 0;
		transform: translateY(100%);
	}
	
	.show{
		transform: translateX(0);
	}
	
	&-layer{
		position: fixed;
		top: var(--window-top);
		right: 0;
		bottom: var(--window-bottom);
		left: 0;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 99;
	}
}
</style>
