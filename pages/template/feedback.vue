<template>
	<view>
		<fs-panel title="请选择您遇到的问题">
			<view slot="content">
			  <fs-cell border justify="right" :title="item.title" @click="selectProblem(index)" v-for="(item, index) in problemList">
			    <view class="select" slot="value">
						<fs-icon type="icon-right" colorType="primary" v-if="curProblemIndex === index"></fs-icon>
			    </view>
			  </fs-cell>
			</view>
		</fs-panel>
		
		<fs-panel title="请补充详情问题和意见(必填)">
			<view class="textarea-box" slot="content">
				<fs-form textareaHeight="200rpx">
					<fs-field type="textarea"  placeholder="请输入问题描述..." v-model="detail"></fs-field>
				 <!-- #ifndef MP-ALIPAY -->
				  <view class="input-num">{{detail.length}}/140</view>
				 <!-- #endif -->
				</fs-form>
			</view>
		</fs-panel>
		
		<fs-panel title="请上传相关问题图片">
			<uploadImg slot="content" :photoList.sync="photoList"></uploadImg>
		</fs-panel>
		
		<fs-button block type="primary" round @click="submit">提交</fs-button>
	</view>
</template>

<script>
	import uploadImg from "@/business/uploadImg.vue"
	import { addAdvice } from "@/services/common.js"
	export default {
		components: {
			uploadImg
		},
		provide() {
			return {
				parentForm: this
			}
		},
		data() {
			return {
				problemList: [
					{
						title: '功能异常：功能故障或不可用'
					},
					{
						title: '产品建议：用的不爽，我有建议'
					},
					{
						title: '安全问题：密码、隐私、欺诈等'
					},
					{
						title: '其他问题'
					},
				],
				curProblemIndex: 0,
				detail: '',
				photoList: [],
				rules: {
					detail: {required: true,message: '请输入问题描述'}
				}
			};
		},
		methods: {
			selectProblem(index) {
				this.curProblemIndex = index
			},
			submit() {
				this.form.validate({
					detail: this.detail
				},() => {
					addAdvice({
						type: this.problemList[this.curProblemIndex].title,
						content: this.detail,
						images: this.photoList.join('|')
					}).then(res => {
						uni.showToast({
							icon: 'none',
							title: '提交成功'
						})
						setTimeout(function() {
							uni.navigateBack();
						}, 1500)
					})
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.textarea-box {
  width: 100%;
  height: 240rpx;
  background: #fff;
  box-sizing: border-box;
  position: relative;
}
.input-num{
  position: absolute;
  right: 30rpx;
  bottom: 20rpx;
  color: #AAAAAA;
  font-size: 30rpx;
	z-index: 10;
}
</style>
