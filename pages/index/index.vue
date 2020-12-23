<template>
	<view class="">
		<fs-panel title="布局">
		  <fs-cell slot="content" border arrow link="./layout" title="Layout 栅格布局"></fs-cell>
		  <fs-cell slot="content" border arrow link="./cell" title="Cell 单元格"></fs-cell>
		  <fs-cell slot="content" border arrow link="./imageText" title="ImageText 图文"></fs-cell>
		  <fs-cell slot="content" border arrow link="./swipeAction" title="SwipeAction 滑动菜单"></fs-cell>
		  <fs-cell slot="content" border arrow link="./collapse" title="Collapse 折叠面板"></fs-cell>
		  <fs-cell slot="content" border arrow link="./grid" title="Grid 宫格"></fs-cell>
		  <fs-cell slot="content" arrow link="./indexList" title="IndexList 索引列表"></fs-cell>
		</fs-panel>
		
		<fs-panel title="基础组件">
		  <fs-cell slot="content" border arrow link="./button" title="Button 按钮"></fs-cell>
		  <fs-cell slot="content" border arrow link="./search" title="Search 搜索"></fs-cell>
		  <fs-cell slot="content" border arrow link="./tag" title="Tag 标签"></fs-cell>
		  <fs-cell slot="content" border arrow link="./avatar" title="Avatar 头像"></fs-cell>
		  <fs-cell slot="content" border arrow link="./badge" title="Badge 徽章"></fs-cell>
		  <fs-cell slot="content" border arrow link="./popup" title="Popup 弹出层"></fs-cell>
		  <fs-cell slot="content" border arrow link="./tab" title="Tab 标签页"></fs-cell>
		  <fs-cell slot="content" arrow link="./timeline" title="Timeline 时间轴"></fs-cell>
		</fs-panel>
		
		<fs-panel title="表单组件">
		  <view slot="content">
				<fs-cell border arrow link="./radio" title="Radio 单选框"></fs-cell>
				<fs-cell border arrow link="./checkbox" title="Checkbox 多选框"></fs-cell>
				<fs-cell border arrow link="./field" title="Field 输入框"></fs-cell>
				<fs-cell border arrow link="./switch" title="Switch 开关"></fs-cell>
			</view>
		</fs-panel>
		
		<fs-panel title="操作反馈">
		  <fs-cell slot="content" border arrow link="./action" title="Action 动作"></fs-cell>
		 <!-- <fs-cell slot="content" border arrow link="./modal" title="Modal 模态框"></fs-cell>
		  <fs-cell slot="content" border arrow link="./toast" title="Toast 轻提示"></fs-cell>
		  <fs-cell slot="content" border arrow link="./message" title="Message 消息通知"></fs-cell>
		  <fs-cell slot="content" arrow link="./spin" title="Spin 加载"></fs-cell> -->
		</fs-panel>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {

		}
	}
</script>
