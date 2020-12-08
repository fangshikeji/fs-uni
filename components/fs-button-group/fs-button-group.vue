<template>
	<view class="button-group">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'button-group',
		props: {
			gutter: {
				type: String,
				default: '20rpx'
			},
			type: {
				type: String,
				default: 'radio'
			},
			value: {
				type: Array,
				default: () => []
			}
		},
		provide() {
			return {
				buttonGroup: this
			}
		},
		data() {
			return {
				selectedValue: []
			};
		},
		created() {
			this.children = []
			this.selectedValue = this.value
		},
		methods: {
			radioStrategy() {
				this.children.forEach(child => {
					if (child.name === this.selectedValue[0]) {
						child.value = true
					} else {
						child.value = false
					}
				})
			},
			checkboxStrategy() {
				this.children.forEach(child => {
					if (this.selectedValue.indexOf(child.name) !== -1) {
						child.value = true
					} else {
						child.value = false
					}
				})
			}
		},
		watch: {
			selectedValue: {
				handler(newValue) {
					this[`${this.type}Strategy`]()
				},
				deep: true
			},
			value() {
				this.selectedValue = this.value
			},
		}
	}
</script>

<style lang="scss">

</style>
