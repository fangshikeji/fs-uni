<template>
	<movable-area class="swipe-box">
		<movable-view class="swipe-view" @change="change" @touchend="touchend" @touchstart="touchstart" direction="horizontal"
		 :disabled="disabled" :x="moveX" :style="{width: swipeViewWidth}">
			<view class="swipe-content">
				<slot></slot>
			</view>
			<view class="swipe-option" v-for="(item, index) in options" :key="index" :style="{backgroundColor:item.bgColor}" @click="handleOption(item)">
				<view class="swipe-option-text" :style="{width: optionWidth + 'px',backgroundColor:item.bgColor}">{{ item.text }}</view>
			</view>
		</movable-view>
	</movable-area>
</template>

<script>
	export default {
		props: {
			disabled: Boolean,
			optionWidth: {
				type: Number,
				default: 80
			},
			options: {
				type: Array,
				default: () => []
			},
			optionData: null
		},
		inject: ['swipeGroup'],
		data() {
			return {
				moveX: '0',
				scrollX: 0,
				swipeViewWidth: 0,
				status: false
			};
		},
		created() {
			this.swipeGroup.children.push(this)
		},
		computed: {
			allOptionWidth() {
				return this.optionWidth * this.options.length
			}
		},
		mounted() {
			this.getAreaRect()
		},
		methods: {
			getAreaRect() {
				const query = uni.createSelectorQuery().in(this)
				// #ifdef MP-ALIPAY
				uni.createSelectorQuery().select('.swipe-box').boundingClientRect(data => {
					this.swipeViewWidth = data.width + this.allOptionWidth + 'px'
				}).exec()
				// #endif
				
				
				// #ifndef MP-ALIPAY
				query.select('.swipe-box').boundingClientRect(data => {
					console.log(data);
					this.swipeViewWidth = data.width + this.allOptionWidth + 'px'
				}).exec()
				// #endif
			},
			change(e) {
				this.scrollX = e.detail.x
			},
			touchstart() {
				this.moving = true
				this.swipeGroup.toggle()
			},
			touchend() {
				this.moveX = this.scrollX
				this.$nextTick(() => {
					if (this.status) { //打开状态
						if (this.moveX >= -this.allOptionWidth * 2 / 3) {
							this.handleClose()
						} else {
							this.handleOpen()
						}
					} else {
						if (this.moveX <= -this.allOptionWidth / 3) {
							this.handleOpen()
						} else {
							this.handleClose()
						}
					}
				})
			},
			handleOpen() {
				this.moveX = -this.allOptionWidth
				this.status = true
			},
			handleClose() {
				this.moveX = 0
				this.status = false
			},
			handleOption(item) {
				this.$emit('clickOption', {item, data: this.optionData})
				this.handleClose()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swipe-box {
		width: auto;
		height: auto;
		overflow: hidden;
		position: relative;
	}

	.swipe-view {
		display: flex;
		position: relative;
		height: inherit;
		width: 100%;
	}

	.swipe-content {
		flex: 1;
	}

	.swipe-option {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #fff;

		&-text {}
	}
</style>
