import CryptoJS from 'crypto-js'
import HashTable from './hashTable'
import { constants } from '@/core/config/constants'
import { getCookieValue, userCookieOption } from '@/core/config/cookie'

interface EncodeType {
	cookie: {
		setCookie: any
		name: string
	}
	hashKey: string
}

interface DecodeType {
	cookie: {
		data?: any
		name: string
	}
	hashKey?: string
}

const { SECURE } = constants

/*
 * 인코딩 함수
 */
export function encode(value: string, option: EncodeType) {
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
export function decode(value: string, option: DecodeType) {
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
