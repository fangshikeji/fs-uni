<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			justify: String,
			reverse: Boolean
		},
		provide() {
			return {
				radioGroup: this
			}
		},
		data() {
			return {
				selectedValue: ''
			};
		},
		created() {
			this.children = []
		},
		methods: {
			radioStrategy(value) {
				this.children.forEach(item => {
					item.selected = item.value === this.selectedValue
				})
			},
		},
		watch: {
			selectedValue: {
				handler(newValue) {
					this.radioStrategy()
					this.$emit('change', this.selectedValue)
				},
				deep: true
			}
		}
	}
</script>

<style lang="scss">

</style>
