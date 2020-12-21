<template>
	<view class="radio" :class="[justify,{reverse}]" @tap="toggle">
	  <fs-icon v-if="icon" source="out" :type="icon" :color-type="selected ? checkedColorType : 'gray'" :size="iconSize" :color="checkedColor"></fs-icon>
	  <fs-icon v-else :type="selected ? 'icon-checked' : 'icon-uncheck'" :color-type="selected ? checkedColorType : 'gray'" :size="iconSize" :color="checkedColor"></fs-icon>
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
			value: [String, Object],
			icon: String,
			checkedColor: String,
			checkedColorType: {
				type: String,
				default: 'primary'
			},
			checked: Boolean
		},
		inject: ['radioGroup'],
		data() {
			return {
				selected: this.checked,
				reverse: false,
				justify: ''
			};
		},
		created() {
			const radioGroup = this.radioGroup
			if(radioGroup) {
				radioGroup.children.push(this)
				this.reverse = radioGroup.reverse
				this.justify = radioGroup.justify
			}
		},
		methods: {
			toggle() {
				if (this.radioGroup) {
					this.radioGroup.selectedValue = this.value
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
.radio{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.lable{
  margin-left: 20rpx;
}
.reverse{
  flex-direction: row-reverse;
  justify-content: flex-end;
}
.reverse .lable{
  margin-left: 0;
  margin-right: 20rpx;
}
.right{
  justify-content: space-between;
}
</style>
