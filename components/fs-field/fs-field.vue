<template>
	<view class="field" :class="{tighten,round,opacity}">
		<view class="field-textarea" v-if="type === 'textarea'" :style="{height: textareaHeight}">
			<view class="label" :style="{width:labelWidth}" v-if="label">
				<view v-if="required" class="required">*</view>
				{{label}}
			</view>
			<slot name="before"></slot>
			<textarea 
				class="textarea" 
				:name="name" 
				:placeholder="placeholder"
			 	:placeholder-class="phClass" 
			 	:maxlength="maxlength" 
			 	:disabled="disabled" 
				:value="value" 
				:auto-height="autoHeight"
				@input="handleInput" 
				@focus="focus" 
				@blur="blur" 
				@confirm="confirm"
			>
		  </textarea>
			<fs-icon class="icon icon-close" type="icon-guanbi2fill" size="20px" @touchstart="clear" v-if="clearable"></fs-icon>
			<slot name="after"></slot>
		</view>
		
		<view class="field-input" :class="cls" v-else>
			<view class="label" :style="{width:labelWidth}" v-if="label">
				<view v-if="required" class="required">*</view>
				{{label}}
			</view>
			<slot name="before"></slot>
			<input 
				class="input" 
				:class="{clearable}" 
				:value="value" 
				:type="type" 
				:placeholder="placeholder"
			 	:placeholder-class="phClass" 
				:name="name" 
				:maxlength="maxlength" 
				:disabled="disabled" 
				@input="handleInput" 
				@focus="focus"
			 	@blur="blur" 
				@confirm="confirm" 
			/>
			<fs-icon class="icon icon-close" type="icon-guanbi2fill" size="20px" @touchstart="clear" v-if="clearable"></fs-icon>
			<slot name="after"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: String,
			value: String,
			phClass: {
				type: String,
				default: 'ph-class'
			},
			name: String,
			type: {
				type: String,
				default: 'text'
			},
			maxlength: {
				type: [Number, String],
				default: 140
			},
			label: String,
			round: Boolean,
			opacity: Boolean,
			disabled: Boolean,
			border: Boolean,
			clearable: Boolean,
			autoHeight: Boolean,
			required: Boolean,
			tighten: Boolean,
		},
		inject: ['form'],
		data() {
			return {
				labelWidth: '',
				textareaHeight: ''
			};
		},
		created() {
			this.labelWidth = this.form.labelWidth
			this.textareaHeight = this.form.textareaHeight
		},
		computed: {
			cls(data) {
				const {
					border
				} = data
				const classNames = []

				border && classNames.push('border')

				return classNames.join(' ')
			}
		},
		methods: {
			handleInput(e) {
				this.$emit('input', e.detail.value)
			},
			focus() {
				this.$emit('focus')
			},
			blur() {
				this.$emit('blur')
			},
			confirm() {
				this.$emit('confirm')
			},
			clear() {
				this.value = ''
				this.$emit('input', '')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.field {
		background-color: #fff;
		box-sizing: border-box;
		font-size: var(--content-size);
		padding: 0 var(--gutter);
		
		&-input {
			display: flex;
			height: 100rpx;
			align-items: center;
			position: relative;
		}
		&-textarea{
			display: flex;
			width: 100%;
			align-items: center;
			position: relative;
		}
	}
	.tighten {
		padding: 0 var(--tighten-gutter);
	}

	.round {
		border-radius: 35px;
	}

	.opacity {
		background-color: rgba(255, 255, 255, .5);
		color: #fff;
	}

	.border::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 2rpx;
		left: 0;
		bottom: 0;
		z-index: 10;
		background-color: var(--divider);
	}

	.textarea {
		width: 100%;
		height: 100%;
		flex: 1;
		box-sizing: border-box;
	}

	.input {
		width: 100%;
		height: 100%;
		flex: 1;
		box-sizing: border-box;
		padding: 20rpx;
		background: transparent;
	}

	.clearable {
		padding-right: 70rpx;
	}

	.ph-class {
		color: var(--sub);
		font-size: var(--content-size);
		;
	}

	.opacity .ph-class {
		color: #fff;
	}

	.icon {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		color: var(--sub);
		z-index: 10;
	}

	.icon-close {
		right: var(--gutter);
	}

	.label {
		text-align-last: justify;
		display: flex;
	}

	.required {
		color: red;
	}
</style>
