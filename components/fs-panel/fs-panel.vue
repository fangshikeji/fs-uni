<template>
	<view class="panel">
	  <view class="panel-title">
	    <block v-if="title">{{title}}</block>
	    <block v-else><slot name="title"></slot></block>
	  </view>
	  <view class="panel-content" :class="{gutter: gutter}" :style="{'background-color':bgColor}">
			<slot name="content"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			gutter: Boolean,
			bgColor: {
				type: String,
				default: '#fff'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.panel-title{
  padding: 20rpx var(--gutter);
  color: var(--title);
  text-align: left;
  background-color: var(--bg-color);
}
.panel-content{
  background-color: #fff;
}
.gutter{
  padding: var(--gutter);
}
</style>
