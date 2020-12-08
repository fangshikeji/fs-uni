<template>
	<view>
		<fs-panel title="基础用法">
			<uploadImg slot="content" :photoList.sync="photoList1"></uploadImg>
		</fs-panel>
		<fs-panel title="形状/大小">
			<uploadImg slot="content" shape="circle" size="100rpx" iconSize="26px" :photoList.sync="photoList2"></uploadImg>
		</fs-panel>
		<fs-panel title="个数限制">
			<uploadImg slot="content" :count="1" :photoList.sync="photoList3"></uploadImg>
		</fs-panel>
	</view>
</template>

<script>
	import uploadImg from '@/business/uploadImg.vue'
	export default {
		components: {
			uploadImg
		},
		data() {
			return {
				photoList1: [],
				photoList2: [],
				photoList3: [],
			};
		}
	}
</script>

<style lang="scss">

</style>
