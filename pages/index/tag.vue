<template>
	<view>
		<fs-panel title="基础用法">
		  <fs-row slot="content">
		    <fs-col col="2">
		      <fs-tag>标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag type="primary">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag type="success">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag type="info">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag type="warning">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag type="error">标签</fs-tag>
		    </fs-col>
		  </fs-row>
		</fs-panel>
		
		<fs-panel title="空心标签">
		  <fs-row slot="content">
		    <fs-col col="2">
		      <fs-tag plain>标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag plain type="primary">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag plain type="success">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag plain type="info">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag plain type="warning">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag plain type="error">标签</fs-tag>
		    </fs-col>
		  </fs-row>
		</fs-panel>
		
		<fs-panel title="圆角标签">
		  <fs-row slot="content">
		    <fs-col col="2">
		      <fs-tag round>标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag round type="primary">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag round type="success">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag round type="info">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag round type="warning">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag round type="error">标签</fs-tag>
		    </fs-col>
		  </fs-row>
		</fs-panel>
		
		<fs-panel title="自定义颜色">
		  <fs-row slot="content">
		    <fs-col col="2">
		      <fs-tag bg-color="purple">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag plain color="purple">标签</fs-tag>
		    </fs-col>
		  </fs-row>
		</fs-panel>
		
		<fs-panel title="标记样式">
		  <fs-row slot="content">
		    <fs-col col="2">
		      <fs-tag mark>标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag mark type="primary">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag mark type="success">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag mark type="info">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag mark type="warning">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag mark type="error">标签</fs-tag>
		    </fs-col>
		  </fs-row>
		</fs-panel>
		
		<fs-panel title="大小">
		  <fs-row slot="content">
		    <fs-col col="2">
		      <fs-tag type="primary">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag size="medium" type="success">标签</fs-tag>
		    </fs-col>
		    <fs-col col="2">
		      <fs-tag size="large" type="info">标签</fs-tag>
		    </fs-col>
		  </fs-row>
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
