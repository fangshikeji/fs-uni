<template>
	<view>
		<fs-panel title="基本用法" gutter>
		  <fs-checkbox-group slot="content">
		    <fs-checkbox label="多选框" value="1"></fs-checkbox>
		    <fs-checkbox label="多选框" value="2"></fs-checkbox>
		  </fs-checkbox-group>
		</fs-panel>
		<fs-panel title="默认选中" gutter>
		  <fs-checkbox-group slot="content" bind:change="change">
		    <fs-checkbox checked label="多选框" value="1"></fs-checkbox>
		    <fs-checkbox label="多选框" value="2"></fs-checkbox>
		    <fs-checkbox label="多选框" value="3"></fs-checkbox>
		  </fs-checkbox-group>
		</fs-panel>
		<fs-panel title="最多选中2个" gutter>
		  <fs-checkbox-group slot="content" :max="2">
		    <fs-checkbox label="多选框" value="1"></fs-checkbox>
		    <fs-checkbox label="多选框" value="2"></fs-checkbox>
		    <fs-checkbox label="多选框" value="3"></fs-checkbox>
		  </fs-checkbox-group>
		</fs-panel>
		<fs-panel title="颜色自定义" gutter>
		  <fs-checkbox-group slot="content">
		    <fs-checkbox checkedColorType="warning" label="多选框" value="2"></fs-checkbox>
		    <fs-checkbox checkedColorType="error" label="多选框" value="3"></fs-checkbox>
		    <fs-checkbox checkedColor="purple" label="多选框" value="3"></fs-checkbox>
		  </fs-checkbox-group>
		</fs-panel>
		<fs-panel title="图标自定义" gutter>
		  <fs-checkbox-group slot="content">
		    <fs-checkbox checkedColorType="error" icon="icon-users" label="多选框" value="1"></fs-checkbox>
		    <fs-checkbox icon="icon-agree" label="多选框" value="2"></fs-checkbox>
		  </fs-checkbox-group>
		</fs-panel>
		<fs-panel title="位置" gutter>
		  <fs-checkbox-group reverse slot="content">
		    <fs-checkbox checkedColorType="error" label="多选框" value="1"></fs-checkbox>
		    <fs-checkbox label="多选框" value="2"></fs-checkbox>
		  </fs-checkbox-group>
		  <fs-checkbox-group reverse justify="right" slot="content">
		    <fs-checkbox checkedColorType="error" icon="icon-users" label="多选框" value="1"></fs-checkbox>
		    <fs-checkbox icon="icon-agree" label="多选框" value="2"></fs-checkbox>
		  </fs-checkbox-group>
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
