<template>
	<switch :checked="checked" :color="bgColor" :disabled="disabled" class="switch" :class="[size]" @change="change"></switch>
</template>

<script>
	export default {
		props: {
			checked: Boolean,
			disabled: Boolean,
			color: String,
			colorType: {
				type: String,
				default: 'primary'
			},
			size: String
		},
		data() {
			return {
				colorValue: {
					primary: '#3A375B',
					error: '#ff6059',
					warning: '#FF9F15',
					info: '#2db7f5',
					success: '#19be6b'
				}
			};
		},
		computed: {
			bgColor() {
				return this.color || this.colorType && this.colorValue[this.colorType]
			}
		},
		methods: {
			change(e) {
				this.$emit('change',e.detail.value)
			}
		}
	}
</script>

<style lang="scss" scoped>
.switch{
	transform: scale(0.8);
}
.small{
	transform: scale(0.6);
}
</style>
