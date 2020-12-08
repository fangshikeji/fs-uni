<template>
	<view class="img-list flex">
		<view v-for="(item, index) in photoList" :key="index" class="img-box pr">
			<fs-icon type="icon-close" size="20px" color="#0F82FF" class="del" @click="deleteImg(index)"></fs-icon>
			<fs-avatar :src="baseUrl + item " :shape="shape" :size="size" radius @click="previewImage(item)"></fs-avatar>
		</view>
		<fs-avatar :shape="shape" :size="size" radius bgColor="#EBEFF5" @click="upload" class="img-box" v-if="photoList.length < count">
			<fs-icon type="icon-plus2" :size="iconSize"></fs-icon>
		</fs-avatar>
	</view>
</template>

<script>
	import utils from '@/utils/utils.js'
	import config from "@/utils/config.js"
	export default {
		props: {
			count: {
				type: Number,
				default: 3
			},
			photoList: {
				type: Array,
				default: () => []
			},
			shape: {
				type: String,
				default: ''
			},
			size: {
				type: String,
				default: '150rpx'
			},
			iconSize: {
				type: String,
				default: '80rpx'
			},
		},
		data() {
			return {
				baseUrl: config.baseUrl
			}
		},
		methods: {
			deleteImg(index) {
				this.photoList.splice(index, 1)
				this.$emit('update:photoList',this.photoList)
			},
			previewImage(item) {
				uni.previewImage({
					current: item,
					urls: this.photoList
				})
			},
			upload() {
				utils.chooseAndUploadFile({
					count: this.count
				}).then(res => {
					this.$emit('update:photoList',[...this.photoList, ...res])
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
	.img-list{
		flex-wrap: wrap;
		padding-top: 30rpx;
	}
	.img-box{
		margin-bottom: 30rpx;
		margin-left: 30rpx;
	}
	.del{
	  position: absolute;
	  top: 0;
	  right: 0;
	  transform: translate(50%, -50%);
	  font-size: 22px;
	  color: var(--sub);
	  z-index: 10;
	}
</style>

