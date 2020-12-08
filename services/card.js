import http from '@/utils/http'

const folderPrefix = 'app/bcdExCard/'
const collectPrefix = 'app/cardCollect/'
const prefix = 'app/bcdCard/'

export function getCardInfoById(id) {
	return http.get(prefix + 'detail', {
		id
	},{isAuth: false})
}
export function exchangeCard(leftCardId, rightCardId) {
	return http.get(prefix + 'exchange', {
		leftCardId,
		rightCardId
	})
}
export function shareSave(cardId) {
	return http.get(prefix + 'shareSave', {
		cardId
	})
}
export function delForderCard(id) {
	return http.get(folderPrefix + 'delete', {
		id
	}, {
		loadingTitle: '提交中...'
	})
}


export function collectCard(cardId) {
	return http.get(collectPrefix + '/add', {
		'bcdCard.id': cardId
	}, {
		loadingTitle: '提交中...'
	}).then(res => {
		if (res.code === 200) {
			uni.showToast({
				icon: 'none',
				title: '收藏成功'
			})
		} else {
			uni.showToast({
				icon: 'none',
				title: res.msg
			})
		}
		
		return res
	})
}

export function delCollectedCard(cardId) {
	return http.get(collectPrefix + '/delete', {
		'bcdCard.id': cardId
	}, {
		loadingTitle: '提交中...'
	}).then(res => {
		if (res.code === 200) {
			uni.showToast({
				icon: 'none',
				title: '取消收藏成功'
			})
		} else {
			uni.showToast({
				icon: 'none',
				title: res.msg
			})
		}
		return res
	})
}

export function isCollectedCard(cardId) {
	return http.get(collectPrefix + '/checkIsCollect', {
		'bcdCard.id': cardId
	})
}

export function collectCardList() {
	return http.get(collectPrefix + '/list')
}

// 名片夹相关
export function getFolderList(data, showLoading = true) {
	return http.get(folderPrefix + 'list', data, {
		showLoading,
		isAuth: false
	})
}
