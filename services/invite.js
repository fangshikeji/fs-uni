import http from '@/utils/http'
import store from '@/store/index'

const invitePrefix = 'app/invite/'
const visitPrefix = 'app/visitor/'

// 邀请
export function invite(data) {
	return http.post(invitePrefix + 'save', data)
}
// 我邀请的列表
export function invitedList(data) {
	return http.get(invitePrefix + 'inviteList', data, {isAuth: false})
}
// 审核
export function inviteAudit(data) {
	return http.post(invitePrefix + 'updateStatus', data)
}
// 我被邀请的列表
export function beInviteList(data) {
	return http.get(invitePrefix + 'beInviteList', data, {isAuth: false})
}




// 我收到的列表
export function receiveList(data) {
	return http.get(visitPrefix + 'receiveList', data)
}
// 我发出的列表
export function sendList(data) {
	return http.get(visitPrefix + 'sendList', data)
}
// 审核
export function visitAudit(data) {
	return http.post(visitPrefix + 'updateStatus', data)
}
// 申请访问
export function applyVisit(data) {
	return http.post(visitPrefix + 'save', data)
}
// 访客统计
export function visitStats() {
	return http.get(visitPrefix + 'staticitsCount',{},{isAuth: false})
}
