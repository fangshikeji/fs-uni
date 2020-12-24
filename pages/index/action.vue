<template>
	<view>
		<fs-button-group>
			<fs-button type="primary" @click="toggle('show')">action</fs-button>
			<fs-button type="error" @click="toggle('show1')">action</fs-button>
		</fs-button-group>
		<fs-action :list="list" v-model="show" @itemTap="itemTap"></fs-action>
		<fs-action v-model="show1" :showCancel="false">
			<fs-cell title="action" value="custom content" border></fs-cell>
			<fs-cell title="action" value="custom content"></fs-cell>
		</fs-action>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{name: 'action1'},
					{name: 'action2'},
					{name: 'action3'},
				],
				show: false,
				show1: false
			};
		},
		methods: {
			toggle(show) {
				this[show] = true
			},
			itemTap(item){
				uni.showToast({
					title: `点击了${item.name}`,
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
