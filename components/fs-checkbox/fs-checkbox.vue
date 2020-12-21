<template>
	<view class="radio" :class="[justify,{reverse}]" @tap="toggle">
		<fs-icon v-if="icon" source="out" :type="icon" :color-type="selected ? checkedColorType : 'gray'" :size="iconSize"></fs-icon>
		<fs-icon v-else :type="selected ? 'icon-squarecheck' : 'icon-square'" :color-type="selected ? checkedColorType : 'gray'"
		 :size="iconSize"></fs-icon>
		<view class="lable">
			{{label}}
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			label: String,
			iconSize: {
				type: String,
				default: '20px'
			},
			value: {
				type: [String, Object]
			},
			icon: String,
			checkedColor: String,
			checkedColorType: {
				type: String,
				default: 'primary'
			},
			checked: Boolean
		},
		inject: ['checkboxGroup'],
		data() {
			return {
				selected: this.checked,
				reverse: false,
				justify: ''
			};
		},
		created() {
			const checkboxGroup = this.checkboxGroup
			if (checkboxGroup) {
				checkboxGroup.children.push(this)
				this.reverse = checkboxGroup.reverse
				this.justify = checkboxGroup.justify
			}
		},
		methods: {
			toggle() {
				const {
					selectedValue: parentValue,
					max
				} = this.checkboxGroup

				if (parentValue.length < max || max === -1) {
					this.selected = !this.selected
					
				} else {
					this.selected = false
				}
			},
		},
		watch: {
			selected() {
				const {
					selectedValue: parentValue,
				} = this.checkboxGroup
				const index = parentValue.indexOf(this.value)
				if (index === -1) {
					parentValue.push(this.value)
				} else {
					parentValue.splice(index, 1)
				}
				
				this.checkboxGroup.selectedValue = parentValue
			}
		}
	}
</script>

<style lang="scss" scoped>
	.radio {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.lable {
		margin-left: 20rpx;
	}

	.reverse {
		flex-direction: row-reverse;
		justify-content: flex-end;
	}

	.reverse .lable {
		margin-left: 0;
		margin-right: 20rpx;
	}

	.right {
		justify-content: space-between;
	}
</style>
