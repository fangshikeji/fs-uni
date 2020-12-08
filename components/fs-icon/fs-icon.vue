<template>
	<view :class="[type, colorType, source === 'inner' ? 'wefont' : 'iconfont']" :style="style" @click="handleClick"></view>
</template>

<script>
	export default {
		props: {
			type: String,
			size: {
				type: String,
				default: '32rpx',
			},
			color: String,
			colorType: String,
			source: {
				type: String,
				default: 'inner'
			}
		},
		data() {
			return {

			};
		},
		computed: {
			style(data) {
				const {
					size,
					color
				} = data
				let style = `font-size: ${size};`

				if (color) {
					style += `color: ${color};`
				}
				return style
			}
		},
		methods: {
			handleClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../common/iconfont.css';
.wefont{
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}
@font-face {font-family: "wefont";
  src: url('//at.alicdn.com/t/font_1546014_bboxlpajhe5.eot?t=1606983656848'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1546014_bboxlpajhe5.eot?t=1606983656848#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1546014_bboxlpajhe5.woff?t=1606983656848') format('woff'),
  url('//at.alicdn.com/t/font_1546014_bboxlpajhe5.ttf?t=1606983656848') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1546014_bboxlpajhe5.svg?t=1606983656848#wefont') format('svg'); /* iOS 4.1- */
}

.wefont {
  font-family: "wefont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-sex-male:before {
  content: "\e892";
}

.icon-sex-female:before {
  content: "\e893";
}

.icon-qr_code:before {
  content: "\e739";
}

.icon-time:before {
  content: "\e622";
}

.icon-star1:before {
  content: "\e650";
}

.icon-off:before {
  content: "\e621";
}

.icon-call:before {
  content: "\e613";
}

.icon-location:before {
  content: "\e620";
}

.icon-plus2:before {
  content: "\e6b3";
}

.icon-plus1:before {
  content: "\e7ba";
}

.icon-ArrowRight:before {
  content: "\e612";
}

.icon-plus:before {
  content: "\e60f";
}

.icon-star:before {
  content: "\e615";
}

.icon-square:before {
  content: "\e6d5";
}

.icon-squarecheck:before {
  content: "\e6d6";
}

.icon-photo:before {
  content: "\e710";
}

.icon-right:before {
  content: "\e64f";
}

.icon-d-down:before {
  content: "\e641";
}

.icon-checked:before {
  content: "\e61e";
}

.icon-uncheck:before {
  content: "\e61f";
}

.icon-Error:before {
  content: "\e600";
}

.icon-loading:before {
  content: "\e601";
}

.icon-mobile:before {
  content: "\e611";
}

.icon-more:before {
  content: "\e608";
}

.icon-search:before {
  content: "\e661";
}

.icon-feedback:before {
  content: "\e6f4";
}

.icon-edit:before {
  content: "\e609";
}

.icon-close:before {
  content: "\e670";
}

.icon-version:before {
  content: "\e60b";
}

.icon-pwd:before {
  content: "\e614";
}

.icon-msg:before {
  content: "\e659";
}

.icon-success:before {
  content: "\e6bd";
}

</style>
