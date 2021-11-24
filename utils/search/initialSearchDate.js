import { defaultFormat, getWeekCal } from '../date'
import moment from 'moment'

// 시작시간
export const startHms = '00:00:00'
// 끝시간
export const endHms = '23:59:59'

// 시작일 초기값
export const initialStartDt = getWeekCal(1) // 일주일전
// 마지막일 초기값
export const initialEndDt = createEndDate(new Date()) // 오늘
// 시작날짜/끝날짜 초기화
export const initialDate = {
	startDate: moment(initialStartDt).format(defaultFormat),
	endDate: moment(initialEndDt).format(defaultFormat),
}

// 시작날짜 생성(시작날짜 + 00:00:00)
export function createStartDate(date) {
	const d = new Date(date)
	const cYear = d.getFullYear()
	const cMonth = d.getMonth() + 1
	const cDay = d.getDate()
	return new Date(`${cYear}-${cMonth}-${cDay} ${startHms}`)
}

// 끝날짜 생성(시작날짜 + 23:59:59)
export function createEndDate(date) {
	const d = new Date(date)
	const cYear = d.getFullYear()
	const cMonth = d.getMonth() + 1
	const cDay = d.getDate()
	return new Date(`${cYear}-${cMonth}-${cDay} ${endHms}`)
}
