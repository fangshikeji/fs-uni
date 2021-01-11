<template>
	<button 
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
		value ? 'selected' : ''
	]"
	:style="[{'margin-right':gutter,'margin-bottom':gutter,width:width},customStyle]" 
	:form-type="formType" 
	@getuserinfo="getUserInfo"
	@contact="contact" 
	@getphonenumber="getPhoneNumber" 
	@opensetting="openSetting" 
	@error="error"
	@click="handleTap">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		props: {
			openType: String,
			formType: String,
			size: {
				type: String,
				default: 'default'
			},
			type: {
				type: String,
				default: 'default'
			},
			plain: Boolean,
			radius: Boolean,
			round: Boolean,
			disabled: Boolean,
			full: Boolean,
			block: Boolean,
			name: [String, Object],
			link: String,
			linkType: {
				type: String,
				default: 'navigateTo'
			},
			width: String,
			customStyle: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		// inject: ['buttonGroup'],
		data() {
			return {
				gutter: '',
				value: ''
			};
		},
		created() {
			const buttonGroup = this.buttonGroup
			if(buttonGroup) {
				buttonGroup.children.push(this)
				buttonGroup[`${buttonGroup.type}Strategy`]()
				this.gutter = buttonGroup.gutter
			}
		},
		computed: {
			cls() {
				const {
					full
				} = this.$props
				const classNames = []
				full && classNames.push('block full')

				return classNames.join(' ')
			},
		},
		methods:{
			getUserInfo(event) {
				this.$emit('getuserinfo', event.detail)
			},
			contact(event) {
				this.$emit('contact', event.detail)
			},
			getPhoneNumber(event) {
				this.$emit('getphonenumber', event.detail)
			},
			openSetting(event) {
				this.$emit('opensetting', event.detail);
			},
			error(event) {
				this.$emit('error', event.detail);
			},
			radioStrategy() {
				if (!this.value) {
					this.buttonGroup.selectedValue = this.name
				} else {
					this.buttonGroup.selectedValue = []
				}
			},
			checkboxStrategy() {
				const parentValue = this.buttonGroup.selectedValue
				const { value, name } = this
				const index = parentValue.indexOf(name)
				if (!value) {
					if (index === -1) {
						parentValue.push(name)
					}
				} else {
					index !== -1 && parentValue.splice(index, 1)
				}
				
				this.buttonGroup.selectedValue = parentValue
			},
			handleTap(e) {
				this.buttonGroup && this[`${this.buttonGroup.type}Strategy`]()
				if (this.link && !this.disabled) {
					uni[this.linkType]({
						url: this.link
					})
				}
				!this.disabled && this.$emit('click')
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
		background-color: #CFCFCF;
		margin: 0;
		border: 0;
		
		&.primary, &.primary.selected,&.selected {
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

		&.plain, &.plain.selected {
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
		opacity: .5;
	}

	.radius {
		border-radius: 10rpx;
	}

	.round {
		border-radius: 30px;
	}

	.plain.primary, .button.plain.selected {
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
