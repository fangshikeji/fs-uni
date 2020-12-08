import http from '@/utils/http'

const prefix = 'app/invoice/'

export function saveInvoice(data) {
	return http.post(prefix + 'save', data)
}
export function delInvoice(id) {
	return http.post(prefix + 'delete', {
		id
	})
}
export function getInvoiceList(data) {
	return http.get(prefix + 'list', data)
}