<template>
	<view>
		<fs-panel title="基础用法">
			<view class="layout-box"  slot="content">
				<fs-timeline :options="list" color="#CDD3D9">
					<template #default="{item}">
						<view class="title">{{item.title}}</view>
						<view class="content">{{item.desc}}</view>
					</template>
				</fs-timeline>
			</view>
		</fs-panel>
		
		<fs-panel title="自定义">
			<view slot="content" class="log-box">
				<fs-timeline :options="logList" color="#CDD3D9">
					<template #dot="{item}">
						<view class="sub" style="padding: 10rpx 0;">{{item.date}}</view>
					</template>
					<template #default="{item}">
						<view class="log-box-item" :class="item.isOwn ? 'own' : 'other'">
							<view class="log-title">{{item.author}}</view>
							<view class="log-content">{{item.content}}</view>
						</view>
					</template>
				</fs-timeline>
			</view>
		</fs-panel>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						title: '已完成',
						desc: 'xxx'
					},
					{
						title: '进行中',
						desc: 'xxx'
					}
				],
				logList: [
					{
						date: '2020-12',
						author: '编辑文章',
						content: '这个项目规划写的真好！行云流水，这个项目规划写的真好！行云流水~',
						isOwn: true
					},
					{
						date: '2020-12',
						author: '编辑文章',
						content: '这个项目规划写的真好！行云流水，这个项目规划写的真好！行云流水~'
					}
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
.log-box{
		padding: 80rpx 30rpx 100rpx 60rpx;
		height: 100%;
		overflow: auto;
		&-item{
			padding: 20rpx;
			border: 2rpx solid #8838FF;
			border-radius: 20rpx;
			white-space: normal;
			margin-left: 40rpx;
		}
		.own{
			border: 2rpx solid #0F82FF;
			padding-left: 40rpx;
			.log-title{
				&::before{
					background-color: #0F82FF;
					left: -30rpx;
				}
			}
		}
		
		.other{
			border: 2rpx solid #8838FF;
			padding-right: 40rpx;
			.log-title{
				text-align: right;
				&::before{
					background-color: #8838FF;
					right: -30rpx;
				}
			}
		}
	}
	.log-title{
		color: var(--title-color);
		font-size: 13px;
		position: relative;
		line-height: 21px;
		margin-bottom: 10rpx;
		&::before{
			position: absolute;
			content: '';
			width: 12rpx;
			height: 40rpx;
			background-color: #8838FF;
			border-radius: 6rpx;
			
		}
	}
	.log-content{
		line-height: 21px;
		font-size: 12px;
	}
</style>
