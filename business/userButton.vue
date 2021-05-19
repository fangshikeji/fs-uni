<template>
  <view>
    <button
      wx:if="canIUseGetUserProfile"
      hover-class="hover"
      class="button"
      :class="[
        cls,
        type,
        size,
        plain ? 'plain' : '',
        radius ? 'radius' : '',
        round ? 'round' : '',
        disabled ? 'disabled' : '',
        block ? 'block' : '',
      ]"
      :style="[
        { 'margin-right': gutter, 'margin-bottom': gutter, width: width },
        customStyle,
      ]"
      @click="handleTap"
    >
      <slot></slot>
    </button>

    <button
      wx:else
      hover-class="hover"
      :open-type="openType"
      class="button"
      :class="[
        cls,
        type,
        size,
        plain ? 'plain' : '',
        radius ? 'radius' : '',
        round ? 'round' : '',
        disabled ? 'disabled' : '',
        block ? 'block' : '',
        value ? 'selected' : '',
      ]"
      :style="[
        { 'margin-right': gutter, 'margin-bottom': gutter, width: width },
        customStyle,
      ]"
      @getuserinfo="getUserInfo"
    >
      <slot></slot>
    </button>
  </view>
</template>

<script>
export default {
  props: {
    desc: {
      type: String,
      default: '用于完善会员资料'
    },
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'primary'
    },
    plain: Boolean,
    radius: Boolean,
    round: Boolean,
    disabled: Boolean,
    full: Boolean,
    block: {
      type: Boolean,
      default: true
    },
    name: [String, Object],
    width: String,
    customStyle: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      gutter: '',
      value: '',
      canIUseGetUserProfile: false,
    };
  },
  created() {
    if (wx.getUserProfile) {
      this.canIUseGetUserProfile = true
    }
  },
  computed: {
    cls() {
      const { full } = this.$props
      const classNames = []
      full && classNames.push('block full')

      return classNames.join(' ')
    },
  },
  methods: {
    getUserInfo(event) {
      this.$emit('getuserinfo', event.detail)
    },
    handleTap(e) {
      wx.getUserProfile({
        desc: this.desc,
        success: (res) => {
          this.$emit('getuserinfo', res)
        },
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  font-weight: normal;
  font-size: 14px;
  color: #fff;
  padding: 0 40rpx;
  line-height: 1;
  text-align: center;
  border-radius: 0;
  display: inline-block;
  vertical-align: bottom;
  background-color: #cfcfcf;
  margin: 0;
  border: 0;

  &.primary,
  &.primary.selected,
  &.selected {
    background-color: var(--primary);
  }
  &.success {
    background-color: var(--success);
  }
  &.info {
    background-color: var(--info);
  }
  &.warning {
    background-color: var(--warning);
  }
  &.error {
    background-color: var(--error);
  }

  &.plain,
  &.plain.selected {
    background-color: transparent;
    box-shadow: inset 0 0 0 1px currentColor;
    color: #999999;
  }

  &.default {
    height: 80rpx;
    line-height: 80rpx;
  }

  &.medium {
    width: auto !important;
    height: 70rpx;
    line-height: 70rpx;
    font-size: 13px;
    padding: 0 30rpx;
  }

  &.mini {
    width: auto !important;
    height: 50rpx;
    line-height: 50rpx;
    font-size: 12px;
    padding: 0 20rpx;
    display: inline-block;
  }
}

.button::after {
  border: none;
}

.hover {
  opacity: 0.5;
}

.radius {
  border-radius: 10rpx;
}

.round {
  border-radius: 30px;
}

.plain.primary,
.button.plain.selected {
  color: var(--primary);
}

.plain.success {
  color: var(--success);
}

.plain.warning {
  color: var(--warning);
}

.plain.error {
  color: var(--error);
}

.plain.info {
  color: var(--info);
}

.block {
  display: block;
  height: 100rpx !important;
  line-height: 100rpx !important;
  margin-left: var(--gutter) !important;
  margin-right: var(--gutter) !important;
  font-size: 17px;
  width: auto;

  &.radius {
    border-radius: 16rpx;
  }
}

.full {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.disabled {
  opacity: 0.5;
}
</style>
