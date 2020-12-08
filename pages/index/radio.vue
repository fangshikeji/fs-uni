<template>
	<view>
		<fs-panel title="基本用法" gutter>
		  <fs-radio-group slot="content">
		    <fs-radio label="单选框" value="1"></fs-radio>
		    <fs-radio label="单选框" value="2"></fs-radio>
		  </fs-radio-group>
		</fs-panel>
		<fs-panel title="默认选中" gutter>
		  <fs-radio-group slot="content" @change="change">
		    <fs-radio checked label="单选框" value="1"></fs-radio>
		    <fs-radio label="单选框" value="2"></fs-radio>
		    <fs-radio label="单选框" value="3"></fs-radio>
		  </fs-radio-group>
		</fs-panel>
		<fs-panel title="颜色自定义" gutter>
		  <fs-radio-group slot="content">
		    <fs-radio checked="" checkedColorType="warning" label="单选框" value="2"></fs-radio>
		    <fs-radio checkedColorType="error" label="单选框" value="3"></fs-radio>
		    <fs-radio checkedColor="purple" label="单选框" value="4"></fs-radio>
		  </fs-radio-group>
		</fs-panel>
		<fs-panel title="图标自定义" gutter>
		  <fs-radio-group slot="content">
		    <fs-radio checkedColorType="error" icon="icon-users" label="单选框" value="1"></fs-radio>
		    <fs-radio icon="icon-agree" label="单选框" value="2"></fs-radio>
		  </fs-radio-group>
		</fs-panel>
		<fs-panel title="位置" gutter>
		  <fs-radio-group reverse slot="content">
		    <fs-radio checkedColorType="error" label="单选框" value="1"></fs-radio>
		    <fs-radio label="单选框" value="2"></fs-radio>
		  </fs-radio-group>
		  <fs-radio-group reverse justify="right" slot="content">
		    <fs-radio checkedColorType="error" label="单选框" value="1"></fs-radio>
		    <fs-radio label="单选框" value="2"></fs-radio>
		  </fs-radio-group>
		</fs-panel>
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
