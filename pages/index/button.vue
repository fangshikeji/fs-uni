<template>
	<view>
		<fs-panel title="一般按钮">
		  <fs-row slot="content" gutter="10">
		    <fs-col col="4">
		      <fs-button class="mb" bind:tap="test">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button class="mb" type="primary">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button class="mb" type="success">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button type="error">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button type="info">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button type="warning">button</fs-button>
		    </fs-col>
		  </fs-row>
		</fs-panel>
		
		<fs-panel title="幽灵按钮">
		  <fs-row slot="content" gutter="10">
		    <fs-col col="4">
		      <fs-button class="mb" plain>button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button class="mb" plain type="primary">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button class="mb" plain type="success">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button plain type="error">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button plain type="info">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button plain type="warning">button</fs-button>
		    </fs-col>
		  </fs-row>
		</fs-panel>
		
		<fs-panel title="带圆角按钮">
		  <fs-row slot="content" gutter="10">
		    <fs-col col="4">
		      <fs-button class="mb" radius>button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button class="mb" radius type="primary">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button class="mb" radius type="success">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button radius type="warning">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button radius plain type="error">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button radius plain type="info">button</fs-button>
		    </fs-col>
		  </fs-row>
		</fs-panel>
		
		<fs-panel title="半圆按钮">
		  <fs-row slot="content" gutter="10">
		    <fs-col col="4">
		      <fs-button class="mb" round>button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button class="mb" round type="primary">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button class="mb" round type="success">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button class="mb" round type="warning">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button class="mb" round plain type="error">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button class="mb" round plain type="info">button</fs-button>
		    </fs-col>
		    <fs-col col="12">
		      <fs-button round block type="primary">button</fs-button>
		    </fs-col>
		  </fs-row>
		</fs-panel>
		
		<fs-panel title="不同尺寸按钮">
		  <fs-row slot="content">
		    <fs-col col="4">
		      <fs-button size="mini" type="primary">button</fs-button>
		    </fs-col>
		    <fs-col col="4">
		      <fs-button size="medium" type="primary">button</fs-button>
		    </fs-col>
				<fs-col col="4">
				  <fs-button type="primary">button</fs-button>
				</fs-col>
		  </fs-row>
		</fs-panel>
		
		<fs-panel title="块状按钮">
		  <view slot="content">
				<fs-button block type="primary">button</fs-button>
				<fs-button block plain type="success">button</fs-button>
			</view>
		</fs-panel>
		
		<fs-panel title="通屏按钮">
		  <view slot="content">
				<fs-button block full type="primary">button</fs-button>
				<fs-button block full plain type="success">button</fs-button>
			</view>
		</fs-panel>
		
		<userButton>获取用户新消息</userButton>
		<!-- <fs-panel title="按钮组选择(单选)" gutter>
		  <view slot="content">
		    <fs-button-group :value="['1']" gutter="10px" bind:change="buttonChange">
		      <fs-button radius name="1">button</fs-button>
		      <fs-button radius name="2">button</fs-button>
		      <fs-button radius name="3">button</fs-button>
		      <fs-button radius name="4">button</fs-button>
		    </fs-button-group>
		  </view>
		</fs-panel>
		<fs-panel title="按钮组选择(多选)" gutter>
		  <view slot="content">
		    <fs-button-group :value="['1','2']" type="checkbox" gutter="10px" bind:change="">
		      <fs-button  radius size="mini" name="1">按钮</fs-button>
		      <fs-button  radius size="mini" name="2">按钮</fs-button>
		      <fs-button  radius size="mini" name="3">按钮</fs-button>
		      <fs-button  radius size="mini" name="4">按钮</fs-button>
		    </fs-button-group>
		  </view>
		</fs-panel> -->
	</view>
</template>

<script>
import { userButton } from "@/business/userButton.vue";
	export default {
		components: {
			userButton
		},
		data() {
			return {
			};
		},
		created() {
			
		}
	}
</script>

<style lang="scss">
page{
  text-align: center;
}
.mb{
	margin-bottom: 20rpx;
	display: inline-block;
}
</style>
