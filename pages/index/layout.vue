<template>
	<view>
		<fs-panel title="基础布局">
		  <fs-row slot="content">
		    <fs-col class="col" col="12"><view class="bg1">12：100%</view></fs-col>
		  </fs-row>
		  <fs-row slot="content">
		    <fs-col class="col" col="6"><view class="bg1">6：50%</view></fs-col>
		    <fs-col class="col" col="6"><view class="bg2">6：50%</view></fs-col>
		  </fs-row>
		  <fs-row slot="content">
		    <fs-col class="col" col="4"><view class="bg1">4：33.33%</view></fs-col>
		    <fs-col class="col" col="4"><view class="bg2">4：33.33%</view></fs-col>
		    <fs-col class="col" col="4"><view class="bg1">4：33.33%</view></fs-col>
		  </fs-row>
		  <fs-row slot="content">
		    <fs-col class="col" col="3"><view class="bg1">3：25%</view></fs-col>
		    <fs-col class="col" col="3"><view class="bg2">3：25%</view></fs-col>
		    <fs-col class="col" col="3"><view class="bg1">3：25%</view></fs-col>
		    <fs-col class="col" col="3"><view class="bg2">3：25%</view></fs-col>
		  </fs-row>
		  <fs-row slot="content">
		    <fs-col class="col" col="8"><view class="bg1">8：75%</view></fs-col>
		    <fs-col class="col" col="4"><view class="bg2">4：25%</view></fs-col>
		  </fs-row>
		</fs-panel>
		
		<fs-panel title="带间隔(间隔距离自定义)">
		  <fs-row slot="content" gutter="20">
		    <fs-col class="col" col="6"><view class="bg1">6：50%</view></fs-col>
		    <fs-col class="col" col="6"><view class="bg2">6：50%</view></fs-col>
		  </fs-row>
		  <fs-row slot="content" gutter="30">
		    <fs-col class="col" col="4"><view class="bg1">4：33.33%</view></fs-col>
		    <fs-col class="col" col="4"><view class="bg2">4：33.33%</view></fs-col>
		    <fs-col class="col" col="4"><view class="bg1">4：33.33%</view></fs-col>
		  </fs-row>
		  <fs-row slot="content" gutter="10">
		    <fs-col class="col" col="3"><view class="bg1">3：25%</view></fs-col>
		    <fs-col class="col" col="3"><view class="bg2">3：25%</view></fs-col>
		    <fs-col class="col" col="3"><view class="bg1">3：25%</view></fs-col>
		    <fs-col class="col" col="3"><view class="bg2">3：25%</view></fs-col>
		  </fs-row>
		  <fs-row slot="content" gutter="40">
		    <fs-col class="col" col="8"><view class="bg1">8：75%</view></fs-col>
		    <fs-col class="col" col="4"><view class="bg2">4：25%</view></fs-col>
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
.col{
  text-align: center;
  color: #fff;
  height: 60rpx;
  line-height: 60rpx;
  margin-bottom: 10rpx;
  background-clip: content-box;
}
.bg1{
  background-color: #2d8cf0;
}
.bg2{
  background-color: #7bb0ff;
}
</style>
