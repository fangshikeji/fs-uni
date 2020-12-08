<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		provide() {
			return {
				swipeGroup: this
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
			toggle() {
				this.children.forEach(item => {
					if (item.moving) {
						item.moving = undefined
					} else{
						item.moveX = 0
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
