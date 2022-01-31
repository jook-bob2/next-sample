import React, { useContext, useEffect, useReducer } from 'react'
import { UserStateContext } from '@store/common/create'
import { userInitialState } from '@store/common/initialState'
import { userReducer } from '@store/common/reducer'
import { constants as configConstants } from '@/core/config/constants'
import { constants } from '@store/common/constants'
import { setAxiosHeader } from '@/core/config/axios'
import { removeUserCookie, setUserCookie } from '@/core/config/cookie'
import { postSilentRefresh } from '@/core/api/user/userApi'
import { useCookies } from 'react-cookie'
import { decode, encode } from '@/utils/crypto'
import { validateTimeAccessToken } from '@/core/config/validToken'
import { EventBus } from '@/utils/eventBus'

const { SET_ADD_USER, SET_INIT_USER } = constants
const { USER, SECURE } = configConstants
export function UserProvider({ children }) {
	const [userState, userDispatch] = useReducer(userReducer, userInitialState)
	const [cookies, setCookie, removeCookie] = useCookies(['LOGIN_INFO'])

	/*
	 * 로그인 유무 검증
	 */
	useEffect(() => {
		if (cookies?.LOGIN_INFO) {
			const { accessToken, refreshToken } = getToken()
			if (validateTimeAccessToken(accessToken) && validateTimeAccessToken(refreshToken)) {
				const { id, name, email } = parseJwt(accessToken)
				onLoginSuccess({ id, email, name, accessToken, refreshToken })
			} else {
				onLogoutSuccess()
			}
		} else {
			onLogoutSuccess()
		}
	}, [])

	/*
	 * fetch 이벤트 핸들러
	 */
	useEffect(() => {
		const eventBus = new EventBus()
		eventBus.$on('fetchEvent', fetchEventHandler)

		return () => {
			eventBus.$remove('fetchEvent', fetchEventHandler)
		}
	}, [])

	/*
	 * Refresh token 이벤트 콜백 함수
	 */
	function fetchEventHandler(response) {
		const { authentication, accessToken, refreshToken } = response
		if (authentication === true) {
			const { exp } = parseJwt(accessToken)
			const now = new Date().getTime()
			const exp2 = new Date(exp * 1000).getTime()
			let expire_time = exp2 - now

			if (validateTimeAccessToken(accessToken) && validateTimeAccessToken(refreshToken)) {
				if (expire_time < 60000 * 2) {
					console.log('만료 10분전에 실행')
					onSilentRefresh({ accessToken, refreshToken })
				}
			} else {
				onLogoutSuccess()
			}
		}
	}

	/*
	 * 새로운 토큰 발급
	 */
	async function onSilentRefresh({ accessToken, refreshToken }) {
		try {
			const response = await postSilentRefresh({ accessToken, refreshToken })
			console.info('유저의 새로운 정보가 발급 되었습니다.')
			onLoginSuccess(response.data)
		} catch (error) {
			console.log('On silent refresh error ==> ', error)
		}
	}

	function onLoginSuccess({ id, email, accessToken, refreshToken, name }) {
		const data = { id, email, accessToken, refreshToken, name }
		setUserInfo(data)

		// 자동 로그인이 true인경우 자동 연장 진행
		// if (autoSign) {
		// 	console.log('expire_time', expire_time)
		// 	// accessToken 만료하기 1분 전에 로그인 연장
		// 	timeout = setTimeout(() => {
		// 		onSilentRefresh({ accessToken, refreshToken, autoSign })
		// 	}, expire_time - 60000)
		// }
	}

	function onLogoutSuccess() {
		initUserInfo()
	}

	/*
	 * 유저 정보 셋팅
	 */
	function setUserInfo(data) {
		userDispatch({
			type: SET_ADD_USER,
			payload: { ...data, isLoggined: true },
		})

		// 유저정보 쿠키에 저장
		const aesToken = encode(data.accessToken + ':' + data.refreshToken, {
			cookie: {
				setCookie,
				name: SECURE.PSID1,
			},
			hashKey: SECURE.PSID1K,
		})

		setAxiosHeader(USER.AUTHORIZATION, data.accessToken)
		setUserCookie(setCookie, { aesToken })
	}

	/*
	 * 유저 정보 초기화
	 */
	function initUserInfo() {
		// 회원정보 초기화
		userDispatch({
			type: SET_INIT_USER,
		})

		removeUserCookie(removeCookie)
	}

	/*
	 * JWT Parser
	 */
	function parseJwt(token) {
		const base64Url = token.split('.')[1]
		const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
		const jsonPayload = decodeURIComponent(
			atob(base64)
				.split('')
				.map(function (c) {
					return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
				})
				.join(''),
		)

		return JSON.parse(jsonPayload)
	}

	/*
	 * AES 디코딩 후 토큰 값 반환
	 */
	function getToken() {
		const tokenInfo = decode(cookies.LOGIN_INFO, {
			cookie: {
				name: SECURE.PSID1,
			},
		})
		const accessToken = tokenInfo.split(':')[0]
		const refreshToken = tokenInfo.split(':')[1]

		return { accessToken, refreshToken }
	}

	return (
		<UserStateContext.Provider value={{ userState, userDispatch, onLoginSuccess, onLogoutSuccess, getToken }}>
			{children}
		</UserStateContext.Provider>
	)
}

export function useUser() {
	const { userState, userDispatch, onLoginSuccess, onLogoutSuccess, getToken } = useContext(UserStateContext)
	if (!userState) {
		throw new Error('Cannot find userState')
	}
	return { userState, userDispatch, onLoginSuccess, onLogoutSuccess, getToken }
}
