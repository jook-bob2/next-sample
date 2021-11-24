import jwtDecode from 'jwt-decode'

// 만료 시간 URL
const EXPIRE_TIME_URL = '/user/expire-time'
// 리프레쉬 URL
const SILENT_REFRESH = '/user/silent-refresh'

/*
 * 토큰 검증 함수
 */
export function validateTimeAccessToken(accessToken) {
	if (!accessToken) {
		return false
	}

	// jwt를 decode해서 payload를 추출한다.
	const decodePayload = jwtDecode(accessToken, {
		payload: true,
	})
	// exp가 UNIX Time으로 나오기 때문에 변환을 해준다.
	const exp = new Date(decodePayload.exp * 1000).getTime()
	const now = new Date().getTime()
	return now < exp ? true : false
}

/*
 * API 주소가 리프레쉬 url인지 체크
 */
export function isNotRefreshUrl(url) {
	if (url !== EXPIRE_TIME_URL && url !== SILENT_REFRESH) return true
	return false
}
