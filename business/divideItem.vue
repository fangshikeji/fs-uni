<template>
	<view class="divide-list">
		<fs-grid :columnNum="list.length">
			<view v-for="item in list" class="item">
				<fs-grid-item>
					<slot :item="item"></slot>
				</fs-grid-item>
			</view>
		</fs-grid>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		},
	}
</script>

<style lang="scss" scoped>
	.divide-list{
		background-color: #fff;
		border-radius: 12rpx;
	}
	.item{
		position: relative;
		padding: 20rpx;
		& + &{
			&::before{
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				width: 2rpx;
				height: 43rpx;
				background-color: #D9D9D9;
				content: '';
			}
		}
	}
</style>
