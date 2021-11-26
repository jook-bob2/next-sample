import React, { useContext, useEffect, useReducer } from 'react'
import { LangStateContext } from '@store/common/create'
import { langInitialState } from '@store/common/initialState'
import { langReducer } from '@store/common/reducer'
import { getLocale, i18nChangeLanguage } from '@lang/i18n'
import { constants } from '@store/common/constants'
import { useCookies } from 'react-cookie'
import { constants as configConstants } from '@/core/config/constants'
import { setAxiosHeader } from '@/core/config/axios'
import { getCookieValue } from '@/core/config/cookie'
import { resource } from '@/lang/resource'
import { EventBus } from '@/utils/eventBus'
import { useRouter } from 'next/router'

const { SET_LANG } = constants
const { COOKIELANG } = configConstants

export function LangProvider({ children }) {
	const [langState, langDispatch] = useReducer(langReducer, langInitialState)
	const [, setCookie] = useCookies([COOKIELANG.LANG])
	const { asPath } = useRouter()

	/*
	 * 쿠키에 언어코드가 없는 경우 언어 설정
	 * 클라이언트 사이드 렌더링 전용
	 */
	useEffect(() => {
		const eventBus = new EventBus()
		eventBus.$on('emitLanguage', (lang) => {
			if (lang !== langState.lang || (lang && !getCookieValue(COOKIELANG.LANG))) {
				Object.values(resource).forEach((l) => {
					if (l.value === lang) useLanguage({ lang, langText: l.text })
				})
			}
		})
	}, [])

	/*
	 * 쿠키에 언어코드가 없는 경우 언어 설정
	 * 서버사이드 렌더링 전용
	 */
	useEffect(() => {
		if (!getCookieValue(COOKIELANG.LANG)) {
			const lang = getLocale()
			Object.values(resource).forEach((l) => {
				if (l.value === lang) useLanguage({ lang, langText: l.text })
			})
		}
	}, [asPath])

	/*
	 * 기본 언어 설정
	 */
	useEffect(() => {
		let lang = null

		// 쿠키에 언어가 설정 되어 있다면 유지 그렇지 않으면 locale 언어를 가져옴.
		if (getCookieValue(COOKIELANG.LANG)) {
			lang = getCookieValue(COOKIELANG.LANG)
			setAxiosHeader(COOKIELANG.LANG, lang)
		} else {
			lang = getLocale()
			setAxiosHeader(COOKIELANG.LANG, lang)
		}

		if (lang) {
			Object.values(resource).forEach((l) => {
				if (l.value === lang) useLanguage({ lang, langText: l.text })
			})
		}
	}, [])

	/*
	 * 언어 설정 함수
	 */
	function useLanguage({ lang, langText }) {
		langDispatch({
			type: SET_LANG,
			lang,
			langText,
		})

		i18nChangeLanguage(lang)

		setCookie(COOKIELANG.LANG, lang, {
			expires: new Date(new Date().getTime() + 9.461e10),
			domain: location.hostname,
			path: '/',
		})

		setAxiosHeader(COOKIELANG.LANGUAGE, lang, false)

		// await getChangeLanguage()
	}

	return (
		<LangStateContext.Provider value={{ langState, langDispatch, useLanguage }}>
			{children}
		</LangStateContext.Provider>
	)
}
export function useLanguageContext() {
	const { langState: state, langDispatch: dispatch, useLanguage } = useContext(LangStateContext)
	if (!state) {
		throw new Error('Cannot find LangProvider')
	}
	return { state, dispatch, useLanguage }
}
