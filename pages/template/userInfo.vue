<template>
	<view>
		<fs-form>
			<avatar :src.sync="userInfoCopy.photo"></avatar>
			<fs-field tighten label="姓名" border placeholder="请输入姓名" v-model="userInfoCopy.name"></fs-field>
			<fs-cell title="性别" border tighten>
				<fs-radio-group slot="value" @change="sexChange">
					<view class="flex">
						<fs-radio :checked="userInfoCopy.sex != 2" label="男" value="1" class="radio"></fs-radio>
						<fs-radio :checked="userInfoCopy.sex == 2" label="女" value="2"class="radio"></fs-radio>
					</view>
				</fs-radio-group>
			</fs-cell>
			<fs-field tighten label="公司" border autoHeight placeholder="请输入公司" v-model="userInfoCopy.companyName"></fs-field>
			<fs-field tighten label="职位" border placeholder="请输入职位" v-model="userInfoCopy.job"></fs-field>
		</fs-form>
		<fs-gutter height="60px" bgColor="#fff"></fs-gutter>
		<fs-button block round type="primary" @click="save">保存</fs-button>
	</view>
</template>

<script>
	import avatar from "@/business/avatar.vue"
	import { login } from "@/services/common.js"
	import { mapState, mapMutations } from 'vuex'
	import commonMixin from "@/mixins/commonMixin.js"
	import utils from "@/utils/utils.js"
	export default {
		components: {
			avatar
		},
		mixins: [commonMixin],
		provide() {
			return {
				parentForm: this
			}
		},
		data() {
			return {
				rules: {
					name: { required: true, message: '请输入姓名' },
					companyName: { required: true, message: '请输入公司' },
				}
			}
		},
		computed: {
			userInfoCopy() {
				return this.$store.state.userInfo 
			}
		},
		methods: {
			...mapMutations(['setUserInfo']),
			sexChange(value) {
				this.userInfoCopy.sex = value
			},
			save() {
				this.form.validate(this.userInfoCopy,() => {
					this.$http.post('user/saveMember',this.userInfoCopy).then(res => {
						if (res.code === 200) {
							this.setUserInfo(this.userInfoCopy)
							uni.navigateBack()
						} else{
							uni.showToast({
								icon: 'none',
								title: res.msg
							})
						}
					})
				})
			},
		},
	}
</script>

<style lang="scss">
page{
	background-color: #fff;
}
</style>
<style lang="scss" scoped>
	.radio{
		margin-left: 60rpx;
		padding: 10rpx 0;
	}
</style>