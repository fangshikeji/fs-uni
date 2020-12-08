<template>
	<view>
		<fs-panel title="基本用法">
		  <fs-search slot="content"></fs-search>
		</fs-panel>
		<fs-panel title="半角">
		  <fs-search slot="content" round></fs-search>
		</fs-panel>
		<fs-panel title="自定义操作文字及颜色">
		  <fs-search slot="content" showAction></fs-search>
		  <fs-search slot="content" showAction actionText="搜索" action-color-type="primary"></fs-search>
		</fs-panel>
		<fs-panel title="自定义背景色">
		  <fs-search slot="content" bgColor="#f0f0f0" inputBgColor="#fff" showAction></fs-search>
		</fs-panel>
		<fs-panel title="跳转">
		  <fs-search placeholder="到新页面搜索" slot="content" round link="./index" linkType="switchTab"></fs-search>
		</fs-panel>
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
