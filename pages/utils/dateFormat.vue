<template>
	<view>
		<fs-cell border title="YYYY年MM月DD日" justify="right">
			<view slot="value">{{formatDate(date,'YYYY年MM月DD日')}}</view>
		</fs-cell>
		<fs-cell border title="YYYY-MM-DD" justify="right">
			<view slot="value">{{formatDate(date,'YYYY-MM-DD')}}</view>
		</fs-cell>
		<fs-cell border title="一年后" justify="right">
			<view slot="value">{{date1}}</view>
		</fs-cell>
	</view>
</template>

<script>
	// 具体api参考：https://github.com/iamkun/dayjs
	import mixin from '@/utils/mixin.js'
	import dayjs from 'dayjs'
	export default {
		mixins: [mixin],
		data() {
			return {
				date: new Date(),
				date1: dayjs().add(1, 'year').format('YYYY年MM月DD日'),
			};
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">

</style>
