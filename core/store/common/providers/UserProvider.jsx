import React, { useContext, useEffect, useReducer } from 'react'
import { UserStateContext } from '@store/common/create'
import { userInitialState } from '@store/common/initialState'
import { userReducer } from '@store/common/reducer'
import { constants as configConstants } from '@/core/config/constants'
import { useTranslation } from 'react-i18next'
import { useAlertContext } from '../../common/providers/AlertProvider'
import { constants } from '@store/common/constants'
import { setAxiosHeader } from '@/core/config/axios'
import { useRouter } from 'next/router'
import { getCookieValue, removeUserCookie, setUserCookie } from '@/core/config/cookie'
import { getExpireTime, getRefreshToken } from '@/core/api/user/userApi'
import jwtDecode from 'jwt-decode'
import { useCookies } from 'react-cookie'
import { decode, encode } from '@/utils/crypto'
import authPathList from '@/core/config/authPathList'
import { EventBus } from '@/utils/eventBus'

const { SET_ADD_USER, SET_INIT_USER, CLOSE_ALERT } = constants
const { USER, SECURE } = configConstants

export function UserProvider({ children }) {
	const [userState, userDispatch] = useReducer(userReducer, userInitialState)
	const { $alert, alertDispatch } = useAlertContext()
	const [, setCookie, removeCookie] = useCookies(['LOGIN_INFO'])
	const router = useRouter()
	const { t } = useTranslation()

	/*
	 * 클라이언트 사이드 렌더링 전용 토큰 검증
	 */
	useEffect(() => {
		const eventBus = new EventBus()
		eventBus.$on('fetchEvent', (response) => {
			const { ssr, authentication } = response
			if (ssr === false && authentication === true) {
				userAccess('csr')
			}
		})
	}, [])

	/*
	 * 서버사이드 렌더링 전용 토큰 검증
	 */
	useEffect(() => {
		// 페이지 이동 시 Alert 끄기
		alertDispatch({ type: CLOSE_ALERT })
		userAccess('ssr')
	}, [router.asPath])

	function setUserInfo(payload) {
		userDispatch({
			type: SET_ADD_USER,
			payload: payload,
		})
	}

	function initUser() {
		// user state 초기화
		userDispatch({
			type: SET_INIT_USER,
			payload: userInitialState,
		})
	}

	function authenticationPathIndex() {
		return authPathList.findIndex((path) => {
			let authPath = path
			if (path.includes('/**')) authPath = path.replace('/**', '')
			return router.pathname.includes(authPath)
		})
	}

	function userAccess(renderType) {
		if (getCookieValue(USER.LOGIN_INFO)) {
			const accessToken = decode(getCookieValue(USER.LOGIN_INFO), {
				cookie: {
					name: SECURE.PSID1,
				},
			})

			setAxiosHeader(USER.AUTHORIZATION, accessToken)

			if (validateAccessToken(accessToken)) {
				if (!userState.id) {
					// Axios 토큰 셋팅
					const { id, email, name } = jwtDecode(accessToken)
					setUserInfo({ id, email, name })
				}
			} else {
				if (authenticationPathIndex() > -1) {
					$alert(t('user.tokenExprire')).then(() => {
						// 로그인 페이지로 이동
						router.push('/user/user-login')
					})
				}
			}
		} else if (!getCookieValue(USER.LOGIN_INFO)) {
			credentialExpiration()

			if (renderType === 'ssr' && authenticationPathIndex() > -1) {
				router.push('/user/user-login')
			}

			if (renderType === 'csr') {
				validateAccessToken(null)
			}
		}
	}

	/*
	 * 토큰 검증 하는 함수
	 * @return boolean
	 */
	function validateAccessToken(accessToken) {
		if (!accessToken) {
			credentialExpiration()
			if (authenticationPathIndex() > -1) {
				$alert(t('user.authNoAlert')).then(() => {
					// 로그인 페이지로 이동
					router.push('/user/user-login')
				})
			}
			return false
		}

		// jwt를 decode해서 payload를 추출한다.
		const decodePayload = jwtDecode(accessToken)

		// exp가 UNIX Time으로 나오기 때문에 변환을 해준다.
		const exp = new Date(decodePayload.exp * 1000).getTime()
		const now = new Date().getTime() // 테스트시 주석처리 하면 됨

		// 토큰세션 유지시간 테스트용 딜레이 타임
		// const delayTime = 18000 // 딜레이 타임 (1000 = 1초)
		// const now = new Date().getTime() + (3600000 - delayTime)

		if (now < exp) {
			// 30분 미만일 경우 토큰 갱신
			const refreshTime = 1000 * 60 * 30
			if (exp - now < refreshTime) {
				// if (renderType === 'ssr') signExtension()
				signExtension()
			}
			return true
		}

		credentialExpiration()

		return false
	}

	/*
	 * 인증정보 만료 됐을 경우 실행되는 함수
	 */
	function credentialExpiration() {
		// user state 초기화
		initUser()

		// 쿠키를 지움
		removeUserCookie(removeCookie)
	}

	/*
	 * Refresh 토큰과 유저 정보 호출
	 */
	async function onSilentRefresh() {
		if (getCookieValue(USER.LOGIN_INFO)) {
			try {
				const response = await getRefreshToken()
				onRefreshSuccess(response)
			} catch (error) {
				console.error(error)
			}
		}
	}

	/*
	 * Refresh 토큰 발급 성공 시 호출
	 */
	function onRefreshSuccess(response) {
		if (response.success) {
			const { data: accessToken } = response
			// accessToken 설정
			setAxiosHeader(USER.AUTHORIZATION, accessToken)
			// 유저정보 쿠키에 저장
			const aesToken = encode(accessToken, {
				cookie: {
					setCookie,
					name: SECURE.PSID1,
				},
				hashKey: SECURE.PSID1K,
			})

			setUserCookie(setCookie, { aesToken })
		}
	}

	/*
	 * accessToken 만료되기 30분 전에 로그인 연장 함수 호출하는 함수
	 */
	async function signExtension() {
		try {
			const response = await getExpireTime()
			if (response.data < 1800) {
				onSilentRefresh()
			}
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<UserStateContext.Provider value={{ userState, userDispatch, setUserInfo, initUser }}>
			{children}
		</UserStateContext.Provider>
	)
}

export function useUser() {
	const { userState, userDispatch, setUserInfo, initUser } = useContext(UserStateContext)
	if (!userState) {
		throw new Error('Cannot find userState')
	}
	return { userState, userDispatch, setUserInfo, initUser }
}
