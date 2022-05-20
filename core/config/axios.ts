import { decode } from '@/utils/crypto'
import axios from 'axios'
import { getCookieValue } from './cookie'
import { validateTimeAccessToken } from './validToken'
import { constants as configConstants } from '@/core/config/constants'
import { ErrorType } from '@/constants/errorType'
import { EventBus } from '@/utils/eventBus'

interface OptionType {
	authentication?: boolean
}

const { USER, SECURE } = configConstants
const { AUTHORIZATION, BAD_REQUEST, UNKNOWN_ERROR, UNAUTHORIZED_CODE, UNAUTHORIZED } = ErrorType

/*
 * axios 인터셉터 설정
 */
function setInterceptors(instance) {
	instance.interceptors.request.use(
		(config) => {
			// 서버 Exception 메시지 언어 셋팅
			const { isSsr } = config.headers

			if (isSsr === true) {
				// 서버사이드 렌더링인 경우
				const { Authorization: accessToken } = config.headers
				if (validateTimeAccessToken(accessToken)) {
					config.headers[AUTHORIZATION] = accessToken
				}
			} else {
				if (getCookieValue(USER.LOGIN_INFO)) {
					const tokenInfo = decode(getCookieValue(USER.LOGIN_INFO), {
						cookie: {
							name: SECURE.PSID1,
						},
					})

					const accessToken = tokenInfo.split(':')[0]
					const refreshToken = tokenInfo.split(':')[1]
					if (validateTimeAccessToken(accessToken)) {
						if (config.url !== '/user/silent-refresh') {
							const eventBus = new EventBus()
							eventBus.$emit('fetchEvent', {
								authentication: config.authentication,
								accessToken,
								refreshToken,
							})
						}
						config.headers[AUTHORIZATION] = accessToken
					}
				}
			}

			return config
		},
		(error) => {
			return Promise.reject(error)
		},
	)
	instance.interceptors.response.use(
		(response) => {
			return response
		},
		(error) => {
			const { response } = error
			// const originalRequest = config
			// console.log(response)

			if (response) {
				// 서버 오류일 경우
				// 아래와 같은 데이터가 반환 된다.
				// config: {url: "/user/login", method: "post", data: "{\"email\":\"sha256@naver.com\",\"passwd\":\"asdf1414!\"}", headers: {…}, baseURL: "http://localhost:8080", …}
				// data: {success: false, code: "ESVC005", msg: "토큰 정보가 없거나 유효하지 않습니다."}
				// headers: {content-type: "application/json"}
				// request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
				// status: 401
				// statusText: ""
				if (response.data) {
					const { code, msg, status, error } = response.data
					if (code && msg) {
						if (code === UNAUTHORIZED_CODE) {
							return Promise.reject({ success: false, code, msg })
						}
						return Promise.reject({ success: false, code, msg })
					}
					if (status && error && status === 404) {
						return Promise.reject({ success: false, code: status, msg: error })
					}
				} else if (response.status === 400) {
					return Promise.reject({ success: false, code: response.status, msg: BAD_REQUEST })
				} else if (response.status === 401) {
					return Promise.reject({ success: false, code: UNAUTHORIZED_CODE, msg: UNAUTHORIZED })
				}
			}

			// 알 수 없는 오류일 경우
			return Promise.reject({ success: false, code: 40999, msg: UNKNOWN_ERROR })
		},
	)
	return instance
}

// 권한 axios
function authCreate(url: string, options: OptionType) {
	const instance = axios.create(Object.assign({ baseURL: url }, options))
	setInterceptors(instance)
	return instance
}

// 비권한 axios
function noneAuthCreate(url: string, options: OptionType) {
	const instance = axios.create(Object.assign({ baseURL: url }, options))
	setInterceptors(instance)
	return instance
}

// 권한 여부에 따른 axios 헤더 셋팅
export function setAxiosHeader(key: string, value: any, auth: boolean) {
	// 권한이 있는 경우 모두 셋팅
	if (auth) authClient.defaults.headers[key] = value
	// 권한이 없는 경우에만 셋팅
	if (!auth) noneAuthClient.defaults.headers[key] = value
}

// 토큰 검증 할 때 사용
export const authClient = authCreate(process.env.NEXT_PUBLIC_API_URL, { authentication: true })
// 토큰 검증 안 할 때 사용
export const noneAuthClient = noneAuthCreate(process.env.NEXT_PUBLIC_API_URL, { authentication: false })
