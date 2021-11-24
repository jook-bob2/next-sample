import CryptoJS from 'crypto-js'
import HashTable from './hashTable'
import { constants } from '@/core/config/constants'
import { getCookieValue, userCookieOption } from '@/core/config/cookie'

const { SECURE } = constants

// encode 초기화 옵션
const encodeInitialOption = {
	cookie: {
		setCookie: () => {}, // 쿠키 셋팅 함수
		name: '', // 쿠키명
	},
	hashKey: '', // 해시키
}

// decode 초기화 옵션
const decodeInitialOption = {
	cookie: {
		data: '', // ssr 쿠키 데이터
		name: '', // 쿠키명
	},
	hashKey: '', // 해시키
}

/*
 * 인코딩 함수
 */
export function encode(value, option = encodeInitialOption) {
	let secureKey,
		secondValue = null

	const hashTable = new HashTable()
	const { cookie, hashKey } = option

	if (!hashKey) throw new Error('There is no secure key.')

	secondValue = cookie.name === SECURE.PSID1 ? value.split('.')[1] : value

	if (cookie) {
		hashTable.set(hashKey, secondValue)
		secureKey = hashTable.get(hashKey)
		userCookieOption.domain = location.hostname
		cookie.setCookie(cookie.name, secureKey, userCookieOption)
	} else {
		hashTable.set(hashKey, secondValue)
		secureKey = hashTable.get(hashKey)
	}

	return CryptoJS.AES.encrypt(JSON.stringify(value), secureKey).toString()
}

/*
 * 디코딩 함수
 */
export function decode(value, option = decodeInitialOption) {
	const { cookie, hashKey } = option
	let secureKey = null

	if (cookie?.name) {
		secureKey = decodeURIComponent(getCookieValue(cookie.name, cookie.data))
	} else if (hashKey) {
		secureKey = hashKey
	} else {
		throw new Error('key undefined')
	}

	const bytes = CryptoJS.AES.decrypt(decodeURIComponent(value), secureKey)
	return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
}
