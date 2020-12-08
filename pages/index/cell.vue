<template>
	<view>
		<fs-panel title="一般用法">
		  <fs-cell slot="content" title="单行列表" value="详细信息"></fs-cell>
			<fs-gutter slot="content"></fs-gutter>
		  <fs-cell slot="content" title="单行列表" value="详细信息" justify="right"></fs-cell>
		</fs-panel>
		
		<fs-panel title="带描述信息">
		  <fs-cell slot="content" title="单行列表" value="详细信息" label="描述信息"></fs-cell>
		</fs-panel>
		
		<fs-panel title="带箭头">
		  <fs-cell slot="content" arrow title="带箭头" value="详细信息"></fs-cell>
		</fs-panel>
		
		<fs-panel title="带边框">
		  <fs-cell slot="content" border title="带边框" value="详细信息"></fs-cell>
		  <fs-cell slot="content" arrow border title="带边框" value="详细信息"></fs-cell>
		</fs-panel>
		
		<fs-panel title="圆角">
		  <view class="layout-box" slot="content" style="background-color: #007AFF;">
				<fs-cell  title="圆角" radius></fs-cell>
			</view>
		</fs-panel>
		
		<fs-panel title="阴影">
		  <view class="layout-box" slot="content">
				<fs-cell  title="阴影" shadow></fs-cell>
			</view>
		</fs-panel>
		
		<fs-panel title="紧缩">
		  <fs-cell slot="content" title="紧缩" tighten></fs-cell>
		</fs-panel>
		<fs-gutter></fs-gutter>
		
		<fs-panel title="跳转功能">
		  <fs-cell slot="content" arrow title="跳转到首页" value="详细信息" link="./index" linkType="switchTab"></fs-cell>
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
