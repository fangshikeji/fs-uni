<template>
	<view class="grid-item" :class="{border}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		inject: ['grid'],
		data() {
			return {
				border: this.grid.border
			};
		}
	}
</script>

<style lang="scss" scoped>
.grid-item{
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
}
.border{
	border: 1px solid var(--border-color);
	margin-left: -1px;
	margin-top: -1px;
}
</style>
