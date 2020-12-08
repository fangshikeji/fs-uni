<template>
	<view class="layout-box">
		<fs-grid>
			<fs-grid-item>
				<fs-badge dot>
				  <fs-avatar shape="square"></fs-avatar>
				</fs-badge>
			</fs-grid-item>
			<fs-grid-item>
				<fs-badge :count="2">
				  <fs-avatar shape="square"></fs-avatar>
				</fs-badge>
			</fs-grid-item>
			<fs-grid-item>
				<fs-badge :count="200">
				  <fs-avatar shape="square"></fs-avatar>
				</fs-badge>
			</fs-grid-item>
		</fs-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
