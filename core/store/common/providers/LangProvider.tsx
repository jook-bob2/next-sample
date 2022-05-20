import React, { useContext, useEffect, useReducer } from 'react'
import { langInitialState } from '@/core/store/common/state'
import { getLocale, i18nChangeLanguage } from '@lang/i18n'
import { useCookies } from 'react-cookie'
import { constants as configConstants } from '@/core/config/constants'
import { setAxiosHeader } from '@/core/config/axios'
import { getCookieValue } from '@/core/config/cookie'
import { resource } from '@/lang/resource'
import { EventBus } from '@/utils/eventBus'
import { useRouter } from 'next/router'
import { CNProps, LangState } from '../state/types'
import { langReducer } from '../reducer/langReducer'
import { LangStateContext } from '../contexts/langContext'

const { COOKIE_LANG } = configConstants

export function LangProvider({ children }: CNProps) {
	const [state, dispatch] = useReducer(langReducer, langInitialState)
	const [, setCookie] = useCookies([COOKIE_LANG.LANG])
	const { asPath } = useRouter()

	/*
	 * 쿠키에 언어코드가 없는 경우 언어 설정
	 * 클라이언트 사이드 렌더링 전용
	 */
	useEffect(() => {
		const eventBus = new EventBus()
		eventBus.$on('emitLanguage', (lang: any) => {
			if (lang !== state.lang || (lang && !getCookieValue(COOKIE_LANG.LANG))) {
				Object.values(resource).forEach((l) => {
					if (l.value === lang) setLanguage({ lang, langText: l.text })
				})
			}
		})
	}, [])

	/*
	 * 쿠키에 언어코드가 없는 경우 언어 설정
	 * 서버사이드 렌더링 전용
	 */
	useEffect(() => {
		if (!getCookieValue(COOKIE_LANG.LANG)) {
			const lang = getLocale()
			Object.values(resource).forEach((l) => {
				if (l.value === lang) setLanguage({ lang, langText: l.text })
			})
		}
	}, [asPath])

	/*
	 * 기본 언어 설정
	 */
	useEffect(() => {
		let lang = null

		// 쿠키에 언어가 설정 되어 있다면 유지 그렇지 않으면 locale 언어를 가져옴.
		if (getCookieValue(COOKIE_LANG.LANG)) {
			lang = getCookieValue(COOKIE_LANG.LANG)
			setAxiosHeader(COOKIE_LANG.LANG, lang, true)
		} else {
			lang = getLocale()
			setAxiosHeader(COOKIE_LANG.LANG, lang, true)
		}

		if (lang) {
			Object.values(resource).forEach((l) => {
				if (l.value === lang) setLanguage({ lang, langText: l.text })
			})
		}
	}, [])

	/*
	 * 언어 설정 함수
	 */
	function setLanguage({ lang, langText }: LangState) {
		dispatch({
			type: 'SET_LANG',
			lang,
			langText,
		})

		i18nChangeLanguage(lang)

		setCookie(COOKIE_LANG.LANG, lang, {
			expires: new Date(new Date().getTime() + 9.461e10),
			domain: location.hostname,
			path: '/',
		})

		setAxiosHeader(COOKIE_LANG.LANGUAGE, lang, false)

		// await getChangeLanguage()
	}

	return <LangStateContext.Provider value={{ state, dispatch, setLanguage }}>{children}</LangStateContext.Provider>
}
export function useLanguage() {
	const { state, dispatch, setLanguage } = useContext(LangStateContext)
	if (!state) {
		throw new Error('Cannot find LangProvider')
	}
	return { state, dispatch, setLanguage }
}
