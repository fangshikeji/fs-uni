<template>
	<view>
		<fs-panel title="基础用法">
		  <fs-avatar slot="content" size="100rpx" src="/static/images/temp.png"></fs-avatar>
		</fs-panel>
		
		<fs-panel title="头像形状">
		  <fs-avatar slot="content" shape="square" src="/static/images/temp.png"></fs-avatar>
		  <fs-avatar slot="content" shape="circle" src="/static/images/temp.png"></fs-avatar>
		</fs-panel>
		
		<fs-panel title="头像大小">
		  <fs-row slot="content">
		    <fs-col col="4">
		      <fs-avatar size="60rpx" shape="square" src="/static/images/temp.png"></fs-avatar>
		    </fs-col>
		    <fs-col col="4">
		      <fs-avatar size="100rpx" shape="circle" src="/static/images/temp.png"></fs-avatar>
		    </fs-col>
		    <fs-col col="4">
		      <fs-avatar size="140rpx" shape="square" src="/static/images/temp.png"></fs-avatar>
		    </fs-col>
		  </fs-row>
		</fs-panel>
		
		<fs-panel title="不限于头像">
		  <fs-row slot="content">
		    <fs-col col="3">
		      <fs-avatar>F</fs-avatar>
		    </fs-col>
				<fs-col col="3">
				  <fs-avatar colorType="error">S</fs-avatar>
				</fs-col>
		    <fs-col col="3">
		      <fs-avatar shape="square"  colorType="info">方</fs-avatar>
		    </fs-col>
				<fs-col col="3">
				  <fs-avatar shape="square" colorType="success">是</fs-avatar>
				</fs-col>
		  </fs-row>
		</fs-panel>
		
		<fs-panel title="与其他组件组合（包含但不限于下面的例子）">
		  <fs-cell slot="content" justify="left" align="center">
		    <fs-avatar slot="title" size="100rpx" src="/static/images/temp.png"></fs-avatar>
		    <view slot="value">
		      <view>配合单元格使用</view>
		      <view>其他内容</view>
		    </view>
		  </fs-cell>
		</fs-panel>
		
		<fs-avatar fixed size="100rpx">悬浮</fs-avatar>
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
page{
  text-align: center;
}
</style>
