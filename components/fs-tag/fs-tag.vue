<template>
	<view class="tag" :class="[{round,plain,mark,'mark-reverse':markReverse},type, size]" :style="{color:color,backgroundColor:bgColor}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			plain: Boolean,
			round: Boolean,
			mark: Boolean,
			markReverse: Boolean,
			type: {
				type: String,
				default: 'default'
			},
			color: String,
			bgColor: String,
			size: String
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.tag{
  display: inline-block;
  height: 38rpx;
  line-height: 38rpx;
  padding: 0 10rpx;
  font-size: 11px;
  color: #fff;
  vertical-align: middle;
  border-radius: 4rpx;
}

.default{
  background-color: var(--disabled);
}
.primary{
  background-color: var(--primary);
}
.success{
  background-color: var(--success);
}
.error{
  background-color: var(--error);
}
.info{
  background-color: var(--info);
}
.warning{
  background-color: var(--warning);
}

.plain{
  background-color: transparent;
  line-height: 32rpx;
	&.default{
		color: var(--disabled);
		border: 2rpx solid currentColor;
	}
	&.primary{
	  color: var(--primary);
	  border: 2rpx solid currentColor;
	}
	&.success{
	  color: var(--success);
	  border: 2rpx solid currentColor;
	}
	&.error{
	  color: var(--error);
	  border: 2rpx solid currentColor;
	}
	&.info{
	  color: var(--info);
	  border: 2rpx solid currentColor;
	}
	&.warning{
	  color: var(--warning);
	  border: 2rpx solid currentColor;
	}
}

.round{
  border-radius: 30rpx;
}
.mark{
  border-radius: 0 25rpx 25rpx 0;
}
.mark-reverse{
	border-radius: 25rpx 0 0 25rpx;
}

.medium{
  font-size: 14px;
  height: 60rpx;
  line-height: 60rpx;
  padding: 0 30rpx;
	&.plain{
	  line-height: 60rpx;
	}
	&.mark-reverse{
		border-radius: 50rpx 0 0 50rpx;
	}
}

.large{
  font-size: 14px;
  height: 52rpx;
  line-height: 52rpx;
  padding: 0 15rpx;
	&.plain{
	  line-height: 48rpx;
	}
}

</style>
