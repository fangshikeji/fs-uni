import dayjs from 'dayjs'
import utils from '@/utils/utils.js'

const mixin = {
	data() {
		return {
			defaultAvatar: '/static/images/my/avatar.png',
			pageSize: 20,
			pageNo: 1
		}
	},
	onReachBottom() {
		
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
export default mixin
