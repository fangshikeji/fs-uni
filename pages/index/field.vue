<template>
	<fs-form>
		<fs-panel title="基本用法">
		  <fs-field placeholder="请输入您的姓名" slot="content"></fs-field>
		</fs-panel>
		<fs-panel title="带标签">
		  <fs-field slot="content" label="姓名" required placeholder="请输入您的姓名"></fs-field>
		  <fs-field slot="content" label="手机号" type="number" placeholder="请输入您的手机号"></fs-field>
		</fs-panel>
		<fs-panel title="带边框">
		  <fs-field slot="content"  placeholder="请输入您的姓名" border></fs-field>
		  <fs-field slot="content"  placeholder="请输入您的姓名" border></fs-field>
		</fs-panel>
		<fs-panel title="圆角" bg-color="#0F82FF" gutter>
		  <fs-field placeholder="圆角" slot="content" round></fs-field>
		</fs-panel>
		<fs-panel title="半透明" bg-color="#0F82FF" gutter>
		  <fs-field placeholder="圆角" slot="content" round opacity></fs-field>
		</fs-panel>
		<fs-panel title="其他">
		  <fs-field slot="content" label="手机号" type="number" placeholder="请输入您的手机号">
		    <fs-button slot="after" radius type="primary">发送验证码</fs-button>
		  </fs-field>
		</fs-panel>
	</fs-form>
</template>

<script>
	export default {
		provide() {
			return {
				parentForm: this
			}
		},
		data() {
			return {
				disabled: false,
				timerText: '获取验证码'
			};
		},
		methods: {
			getPhone (e) {
			    this.phone = e.detail
			  },
			  sendCaptcha () {
			    const toast = this.selectComponent('#toast')
			    if (!utils.isPhone(this.phone)) {
			      return toast.handleShow('请输入正确的手机号')
			    }
			    utils.sendCaptcha(this)
			  },
			  getCaptcha (e) {
			    this.captcha = e.detail
			
			    if (this.captcha.length === 6) {
			      utils.checkCaptcha(this, () => console.log('pass'))
			    }
			  }
		}
	}
</script>

<style lang="scss">

</style>
