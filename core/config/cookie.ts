import { setAxiosHeader } from './axios'
import { constants } from '@/core/config/constants'
import { decode } from '@/utils/crypto'
import { getLocale } from '@/lang/i18n'
import { GetServerSideProps } from 'next'

export declare type Cookie = any
export interface CookieSetOptions {
	path?: string
	expires?: Date
	maxAge?: number
	domain?: string
	secure?: boolean
	httpOnly?: boolean
	sameSite?: boolean | 'none' | 'lax' | 'strict'
	encode?: (value: string) => string
}

export const userCookieOption: CookieSetOptions = {
	expires: new Date(new Date().getTime() + 9.461e10),
	domain: '',
	path: '/',
	secure:
		process.env.NEXT_PUBLIC_ENV === 'production' || process.env.NEXT_PUBLIC_ENV === 'development' ? true : false,
	// httpOnly: process.env.NODE_ENV === 'production' ? true : false,
}
const { COOKIE_LANG, USER, SECURE } = constants

// 쿠키 정보를 가져옴.
// 2번째 인자인 cookie는 SSR일 경우에 받음
export function getCookieValue(key: string, cookie?: string) {
	const cookieKey = key + '='
	let result = ''
	const cookies = cookie ? cookie : document.cookie

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
export function setSsrHeader(headers: any) {
	let { cookie } = headers

	if (!cookie) cookie = `${COOKIE_LANG.LANG}=${headers['accept-language'].split(',')[0]}`
	if (cookie && !cookie.includes(COOKIE_LANG.LANG))
		cookie += `; ${COOKIE_LANG.LANG}=${headers['accept-language'].split(',')[0]}`

	setAxiosHeader(USER.IS_SSR, true, false)

	setAxiosHeader(COOKIE_LANG.LANGUAGE, getCookieValue(COOKIE_LANG.LANG, cookie), false)

	if (getCookieValue(USER.LOGIN_INFO, cookie)) {
		const tokenInfo = decode(getCookieValue(USER.LOGIN_INFO, cookie), {
			cookie: {
				data: cookie,
				name: SECURE.PSID1,
			},
		})

		const accessToken = tokenInfo.split(':')[0]

		setAxiosHeader(USER.AUTHORIZATION, accessToken, true)

		return true
	}

	return false
}

// 클라이언트사이드 렌더링 헤더 설정 함수
export function setCsrHeader(setCookieFunc) {
	if (!getCookieValue(COOKIE_LANG.LANG)) {
		const lang = getLocale()
		setCookieFunc(COOKIE_LANG.LANG, lang, {
			expires: new Date(new Date().getTime() + 9.461e10),
			domain: location.hostname,
			path: '/',
		})

		setAxiosHeader(COOKIE_LANG.LANGUAGE, lang, false)
	} else {
		setAxiosHeader(COOKIE_LANG.LANGUAGE, getCookieValue(COOKIE_LANG.LANG), false)
	}

	if (getCookieValue(USER.LOGIN_INFO)) {
		const accessToken = decode(getCookieValue(USER.LOGIN_INFO), {
			cookie: {
				name: SECURE.PSID1,
			},
		})
		setAxiosHeader(USER.AUTHORIZATION, accessToken, true)

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
