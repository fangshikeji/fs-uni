<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			max: {
				type: Number,
				default: -1
			},
			justify: String,
			reverse: Boolean
		},
		provide() {
			return {
				checkboxGroup: this
			}
		},
		data() {
			return {
				selectedValue: []
			};
		},
		created() {
			this.children = []
		},
		methods: {
			checkboxStrategy(value) {
				this.children.forEach(item => {
					item.selected = item.value === this.selectedValue
				})
			},
		},
		watch: {
			selectedValue: {
				handler(newValue) {
					// this.checkboxStrategy()
					this.$emit('change', this.selectedValue)
				},
				deep: true
			}
		}
	}
</script>

<style lang="scss">

</style>
