import { authClient, noneAuthClient } from '@/core/config/axios'

interface LoginInfoType {
	email: string
	passwd: string
}

interface SilentRequestType {
	accessToken: string
	refreshToken: string
}

/*
 * 리프레쉬 토큰
 * @Param {*} refresh token, access token
 */
export async function postSilentRefresh(silentRequest: SilentRequestType) {
	return await authClient.post('/user/silent-refresh', silentRequest)
}

/*
 * 로그인
 * @param loginInfo(email, passwd)
 */
export async function postUserLogin(loginInfo: LoginInfoType) {
	return await noneAuthClient.post('/user/sign/in', loginInfo)
}

/*
 * 로그아웃
 */
export async function postUserLogout() {
	return await authClient.post(`/user/sign/out`)
}

/*
 * 토큰 시간 가져오기
 */
export async function getExpireTime() {
	return await authClient.get(`/user/expire-time`)
}
