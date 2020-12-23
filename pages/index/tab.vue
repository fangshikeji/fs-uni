<template>
	<view>
		<fs-panel title="基本用法">
			<fs-tab slot="content" :items="tabs" v-model="cur1"></fs-tab>
		</fs-panel>
		<fs-panel title="自定义颜色">
			<fs-tab slot="content" :items="tabs" colorType="error" v-model="cur2"></fs-tab>
			<fs-tab slot="content" :items="tabs" colorType="success" v-model="cur3"></fs-tab>
		</fs-panel>
		<fs-panel title="自定义宽度">
			<fs-tab slot="content" :items="tabs" barWidth="40px" v-model="cur4"></fs-tab>
		</fs-panel>
		<fs-panel title="风格">
			<view slot="content" style="padding: 0 10px;">
				<fs-tab :items="tabs" type="card" gutter v-model="cur5"></fs-tab>
				<fs-tab round :items="tabs" type="card" color-type="error" v-model="cur6"></fs-tab>
			</view>
		</fs-panel>
		<fs-panel title="居中">
			<fs-tab slot="content" center :items="tabs" type="card" gutter v-model="cur7"></fs-tab>
			<fs-tab slot="content" center :items="tabs" color-type="error" v-model="cur8"></fs-tab>
		</fs-panel>
		<fs-panel title="滑动">
			<fs-tab slot="content" :items="tabs1"  v-model="cur9"></fs-tab>
		</fs-panel>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [{
						text: 'tab',
						key: '0'
					},
					{
						text: 'tab',
						key: '1'
					},
					{
						text: 'tab',
						key: '2'
					},
				],
				tabs1: [{
						text: 'tab',
						key: '0'
					},
					{
						text: 'tab',
						key: '1'
					},
					{
						text: 'tab',
						key: '2'
					},
					{
						text: 'tab',
						key: '4'
					},
					{
						text: 'tab',
						key: '5'
					},
					{
						text: 'tab',
						key: '6'
					},
					{
						text: 'tab',
						key: '7'
					},
					{
						text: 'tab',
						key: '8'
					},
					{
						text: 'tab',
						key: '9'
					},
				],
				cur1: 0,
				cur2: 0,
				cur3: 0,
				cur4: 0,
				cur5: 0,
				cur6: 0,
				cur7: 0,
				cur8: 0,
				cur9: 0,
			};
		}
	}
</script>

<style lang="scss">

</style>
