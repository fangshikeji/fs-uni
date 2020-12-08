<template>
	<fs-swipe-group>
		<fs-swipe-action :options="options" :optionData="{id: 1}" @clickOption="handleOption">
			<fs-cell value="name" tighten border>
				<fs-avatar slot="title"></fs-avatar>
			</fs-cell>
		</fs-swipe-action>
		<fs-swipe-action :options="options">
			<fs-cell value="name" tighten>
				<fs-avatar slot="title"></fs-avatar>
			</fs-cell>
		</fs-swipe-action>
	</fs-swipe-group>
</template>

<script>
	export default {
		data() {
			return {
				options: [
					{
						text: 'option1',
						bgColor: '#0063F5'
					},
					{
						text: 'option2',
						bgColor: 'red'
					},
				]
			};
		},
		methods: {
			handleOption(res) {
				console.log(res);
				uni.showToast({
					icon: 'none',
					title: res.item.text
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
