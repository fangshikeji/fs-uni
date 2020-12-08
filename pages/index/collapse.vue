<template>
	<view>
		<fs-panel title="折叠面板">
			<fs-collapse slot="content" :active="0">
				<fs-collapse-item v-for="(item, index) in data" :name="index">
					<view slot="title">{{item.title}}</view>
					<view slot="content" class="layout-box">{{item.content}}</view>
				</fs-collapse-item>
			</fs-collapse>
		</fs-panel>

		<fs-panel title="手风琴效果">
			<fs-collapse slot="content" accordion>
				<fs-collapse-item v-for="(item, index) in data" :name="index">
					<view slot="title">{{item.title}}</view>
					<view slot="content" class="layout-box">{{item.content}}</view>
				</fs-collapse-item>
			</fs-collapse>
		</fs-panel>
		
		<fs-panel title="卡片类型">
			<view class="layout-box" slot="content" style="background-color: #f0f0f0;">
				<fs-collapse card allOpen>
					<fs-collapse-item v-for="(item, index) in data" :name="index">
						<view slot="title">{{item.title}}</view>
						<view slot="content">
							<fs-cell border :title="item.content"></fs-cell>
							<fs-cell :title="item.content"></fs-cell>
						</view>
					</fs-collapse-item>
				</fs-collapse>
			</view>
		</fs-panel>
		
		<fs-panel title="展开高亮">
			<fs-collapse slot="content" accordion activeType="primary">
				<fs-collapse-item v-for="(item, index) in data" :name="index">
					<view slot="title">{{item.title}}</view>
					<view slot="content" class="layout-box">{{item.content}}</view>
				</fs-collapse-item>
			</fs-collapse>
			<fs-gutter slot="content"></fs-gutter>
			<fs-collapse slot="content" accordion activeType="error">
				<fs-collapse-item v-for="(item, index) in data" :name="index">
					<view slot="title">{{item.title}}</view>
					<view slot="content" class="layout-box">{{item.content}}</view>
				</fs-collapse-item>
			</fs-collapse>
		</fs-panel>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
						title: '面板标题',
						content: '面板内容'
					},
					{
						title: '面板标题',
						content: '面板内容'
					},
					{
						title: '面板标题',
						content: '面板内容'
					}
				]
			};
		}
	}
</script>

<style lang="scss">

</style>
