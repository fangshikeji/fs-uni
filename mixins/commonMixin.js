import dayjs from 'dayjs'
import utils from '@/utils/utils.js'

const commonMixin = {
	data() {
		return {
			pageSize: 20,
			pageNo: 1
		}
	},
	methods: {
		formatDate(date, format = 'YYYY-MM-DD') {
			return dayjs(date).format(format)
		},
		authRoute(route) {
			utils.authLogin(() => {
				uni.navigateTo({
					url: route
				})
			})
		}
	},
}
export default commonMixin
