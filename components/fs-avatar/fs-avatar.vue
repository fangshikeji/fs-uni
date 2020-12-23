<template>
	<view class="avatar" :class="[shape, {border, radius, fixed}]" :style="{width: width || size,height: height || size,right: fixed ? right : 0,bottom: fixed ? bottom : 0}" @click="handleLink">
		<image class="img" :src="src" v-if="src" :lazy-load="lazyLoad" :mode="imageMode" />
		<view v-else class="avatar-slot" :class="['bg-' + colorType]" :style="{backgroundColor:bgColor}">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'FsAvatar',
		props: {
			src: String,
			shape: {
				type: String,
				default: 'circle' // square, circle
			},
			size: {
				type: String,
				default: '80rpx'
			},
			width: String,
			height: String,
			bgColor: String,
			colorType: {
				type: String,
				default: 'primary'
			},
			border: Boolean,
			lazyLoad: Boolean,
			imageMode: {
				type: String,
				default: 'cover'
			},
			radius: Boolean,
			link: String,
			linkType: {
				type: String,
				default: 'navigateTo'
			},
			fixed: Boolean,
			right: {
				type: String,
				default: '30rpx'
			},
			bottom: {
				type: String,
				default: '30rpx'
			}
		},
		data() {
			return {
				
			};
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

<style>
	.avatar {
		display: inline-block;
		white-space: nowrap;
		position: relative;
		overflow: hidden;
		vertical-align: middle;
		text-align: center;
	}

	.radius {
		border-radius: 10rpx;
	}

	.circle,
	.circle .img {
		border-radius: 50%;
	}

	.img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.avatar-slot {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	.border {
		border: 4rpx solid #fff;
	}
	
	.fixed{
		position: fixed;
	}
</style>
