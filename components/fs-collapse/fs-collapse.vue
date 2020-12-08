<template>
	<view class="collapse" :class="{card}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			accordion: Boolean,
			active: {
				type: [Number, String],
				default: '0'
			},
			position: {
				type: String,
				default: 'right'
			},
			rotate: {
				type: [Number, String],
				default: 90
			},
			activeType: String,
			activeColor: String,
			allOpen: Boolean,
			card: Boolean
		},
		provide() {
			return {
				collapse: this
			}
		},
		data() {
			return {

			};
		},
		created() {
			this.children = []
		},
		methods: {
			setActive(name) {
				this.children.forEach(item => {
					if (this.accordion) {
						item.setActive(name === item.name ? !item.open : false)
					} else {
						if (name === item.name) {
							item.setActive(!item.open)
						}
					}
				})
			},
			emitEvent(name) {
				this.setActive(name)
				this.$emit('change', name)
			}
		},
		watch: {
			active() {
				this.setActive(this.active)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.collapse{
		// background-color: #fff;
	}
</style>
