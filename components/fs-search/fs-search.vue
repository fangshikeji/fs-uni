<template>
	<view class="search-box" :style="{backgroundColor: bgColor}">
		<view class="input-box" :class="[{round}]" @click="handleLink" :style="{backgroundColor: inputBgColor}">
			<view class="sub input" v-if="link">{{placeholder}}</view>
			<input v-else :type="type" :placeholder="placeholder" @input="change" v-model="value" @focus="focus" @blur="blur" :focus="autoFocus"
			 class="input" />
			<view class="icon icon-search">
				<slot name="icon">
					<fs-icon type="icon-search" color="#666666"></fs-icon>
				</slot>
			</view>
			<view class="icon icon-close" v-if="value" @click="clear">
				<fs-icon type="icon-close" color="#666666"></fs-icon>
			</view>
		</view>
		<view class="cancel" :class="[actionColorType]" :style="{color:actionColor}" @click="handleAction" v-if="showAction">{{actionText}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: {
				type: String,
				default: '搜索'
			},
			actionColor: String,
			actionColorType: String,
			actionText: {
				type: String,
				default: '取消'
			},
			autoFocus: Boolean,
			showAction: Boolean,
			round: Boolean,
			type: {
				type: String,
				default: 'text'
			},
			bgColor: {
				type: String,
				default: '#fff'
			},
			inputBgColor: {
				type: String,
				default: '#f0f0f0'
			},
			link: String,
			linkType: {
				type: String,
				default: 'navigateTo'
			}
		},
		data() {
			return {
				value: ''
			};
		},
		methods: {
			clear() {
				this.value = ''
				this.$emit('change', '')
			},
			change(e) {
				this.$emit('change', this.value)
			},
			handleAction() {
				this.$emit('action', this.value)
			},
			focus() {
				this.$emit('focus')
			},
			blur() {
				this.$emit('blur')
			},
			handleLink(e) {
				if (this.link) {
					uni[this.linkType]({
						url: this.link
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.search-box{
  width: 100%;
  height: 110rpx;
  padding: 20rpx var(--gutter);
  display: flex;
  background-color: #fff;
  box-sizing: border-box;
  align-items: center;
}
.input-box {
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: #f0f0f0;
	
	.sub{
	  line-height: 70rpx;
	  color: var(--sub);
	}
	
	&.round{
		border-radius: 20px;
		.input{
			border-radius: inherit;
		}
	}
}
.input{
  height: 100%;
  width: 100%;
  padding-left: 62rpx;
  padding-right: 60rpx;
  border-radius: 6rpx;
  box-sizing: border-box;
	outline: none;
	
	/* #ifdef H5 */
	background-color: inherit;
	border: none;
	/* #endif */
}

.cancel{
  margin-left: 20rpx;
}
.icon{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--sub);
  z-index: 10;
}
.icon-search{
  left: 20rpx;
}
.icon-close{
  right: 20rpx;
}
</style>
