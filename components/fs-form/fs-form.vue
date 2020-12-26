<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			labelWidth: {
				type: String,
				default: '120rpx'
			},
			textareaHeight: {
				type: String,
				default: '200rpx'
			},
		},
		provide() {
			return {
				form: this
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			
		},
	}
</script>

<style lang="scss">

</style>
