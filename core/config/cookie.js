import { setAxiosHeader } from './axios'
import { constants } from '@/core/config/constants'
import { decode } from '@/utils/crypto'
import { getLocale } from '@/lang/i18n'

export const userCookieOption = {
	expires: 0,
	domain: '',
	path: '/',
	secure:
		process.env.NEXT_PUBLIC_ENV === 'production' || process.env.NEXT_PUBLIC_ENV === 'development' ? true : false,
	// httpOnly: process.env.NODE_ENV === 'production' ? true : false,
}
const { COOKIELANG, USER, SECURE } = constants

// 쿠키 정보를 가져옴.
// 2번째 인자인 cookie는 SSR일 경우에 받음
export function getCookieValue(key, cookie) {
	let cookieKey = key + '='
	let result = ''
	let cookies = cookie ? cookie : document.cookie

	const cookieArr = cookies.split(';')

	for (let i = 0; i < cookieArr.length; i++) {
		if (cookieArr[i][0] === ' ') {
			cookieArr[i] = cookieArr[i].substring(1)
		}

		if (cookieArr[i].indexOf(cookieKey) === 0) {
			result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length)
			return result
		}
	}

	return result
}

// 서버사이드 렌더링 헤더 설정 함수
export function setSsrHeader(headers) {
	let { cookie } = headers

	if (!cookie) cookie = `${COOKIELANG.LANG}=${headers['accept-language'].split(',')[0]}`
	if (cookie && !cookie.includes(COOKIELANG.LANG))
		cookie += `; ${COOKIELANG.LANG}=${headers['accept-language'].split(',')[0]}`

	setAxiosHeader('ssr', true, false)

	setAxiosHeader(COOKIELANG.LANGUAGE, getCookieValue(COOKIELANG.LANG, cookie), false)

	if (getCookieValue(USER.LOGIN_INFO, cookie)) {
		const accessToken = decode(getCookieValue(USER.LOGIN_INFO, cookie), {
			cookie: {
				data: cookie,
				name: SECURE.PSID1,
			},
		})

		setAxiosHeader(USER.AUTHORIZATION, accessToken, true)

		return true
	}

	return false
}

// 클라이언트사이드 렌더링 헤더 설정 함수
export function setCsrHeader(setCookieFunc) {
	if (!getCookieValue(COOKIELANG.LANG)) {
		const lang = getLocale()
		setCookieFunc(COOKIELANG.LANG, lang, {
			expires: new Date(new Date().getTime() + 9.461e10),
			domain: location.hostname,
			path: '/',
		})

		setAxiosHeader(COOKIELANG.LANGUAGE, lang, false)
	} else {
		setAxiosHeader(COOKIELANG.LANGUAGE, getCookieValue(COOKIELANG.LANG), false)
	}

	if (getCookieValue(USER.LOGIN_INFO)) {
		const accessToken = decode(getCookieValue(USER.LOGIN_INFO), {
			cookie: {
				name: SECURE.PSID1,
			},
		})
		setAxiosHeader(USER.AUTHORIZATION, accessToken)

		return true
	}

	return false
}

// 유저정보를 쿠키에 저장 시켜주는 함수
export function setUserCookie(setCookieFunc, { aesToken }) {
	if (typeof setCookieFunc !== 'function') throw new Error('setCookieFunc is not a function')
	userCookieOption.domain = location.hostname
	setCookieFunc(USER.LOGIN_INFO, aesToken, userCookieOption)
}

// 유저정보를 삭제
export function removeUserCookie(removeCookieFunc) {
	if (typeof removeCookieFunc !== 'function') throw new Error('removeCookieFunc is not a function')

	userCookieOption.domain = location.hostname

	removeCookieFunc(USER.LOGIN_INFO, userCookieOption)
	removeCookieFunc(SECURE.PSID1, userCookieOption)
}
