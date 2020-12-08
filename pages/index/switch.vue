<template>
	<view class="layout-box">
		<fs-switch size="small" checked @change="change"></fs-switch>
		<fs-switch checked colorType="error"></fs-switch>
		<fs-switch checked colorType="success"></fs-switch>
		<fs-switch checked colorType="warning"></fs-switch>
		<fs-switch checked colorType="info"></fs-switch>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			change(value) {
				console.log(value);
			}
		}
	}
</script>

<style lang="scss">

</style>
