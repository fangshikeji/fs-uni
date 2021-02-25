<template>
	<view class="grid" 
		:class="{border}"
		:style="styleStr"
	>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			gutter: {
				type: [Number,String],
				default: 0
			},
			border: Boolean,
			columnNum: {
				type: Number,
				default: 3
			}
		},
		provide() {
			return {
				grid: this
			}
		},
		data() {
			return {
				
			};
		},
		computed: {
			styleStr() {
				return `grid-template-columns: repeat(${this.columnNum},1fr);gap:${this.gutter};`
			}
		}
	}
</script>

<style lang="scss" scoped>
.grid{
	display: grid;
}
.border{
	border: 1px solid var(--border-color);
	border-bottom: none;
}
</style>

