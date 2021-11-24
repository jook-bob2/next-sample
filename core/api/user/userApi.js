import { authClient, noneAuthClient } from '@/core/config/axios'

/*
 * 리프레쉬 토큰
 * @param loginInfo(email)
 */
export async function getRefreshToken(loginInfo) {
	return await authClient.post('/user/silent-refresh', loginInfo)
}

/*
 * 로그인
 * @param loginInfo(email, passwd)
 */
export async function postUserLogin(loginInfo) {
	return await noneAuthClient.post('/user/login', loginInfo)
}

/*
 * 로그아웃
 */
export async function postUserLogout() {
	return await authClient.post(`/user/logout`)
}

/*
 * 토큰 시간 가져오기
 */
export async function getExpireTime() {
	return await authClient.get(`/user/expire-time`)
}

/* 
 *  회원가입
 *  @param {
        "country": "KR", // 국적
        "email": "yuyu9494@starlabs.co.kr", // 이메일
        "name": "김동규", // 이름
        "passwd": "abcd1234!", // 패스워드
        "phone": "01093818518", // 연락처
        "picnuFlag": "Y", // 필수동의 항목
        "subscribeFlag": "Y" // 선택동의 항목(개인정보수집)
    }
*/
export async function postUserJoin(userInfo) {
	return await noneAuthClient.post(`/user/sign_up`, userInfo)
}

/*
 * 이메일 중복 체크
 * @param email
 */
export async function getEmailDupCheck(email) {
	return await noneAuthClient.get(`/user/duplicate/${email}`)
}

/**
 * 유저 목록 조회
 * @returns
 */
export async function getUserList() {
	return await authClient.get('/user')
}

/**
 * 회원 비밀번호 변경
 * @param {*} userPasswdDto
 * @returns
 */
export async function putUserPwdUpdate(userPasswdDto) {
	return await authClient.put('/user/change/passwd', userPasswdDto)
}

/**
 * 회원 정보 상세 조회
 * @returns
 */
export async function getUserInfoDetail() {
	return await authClient.get('/user/detail')
}

/**
 * 회원가입 이메일 토큰 유효성 검증
 * @param {*} userVerifyRequest
 * @returns
 */
export async function postUserJoinVerify(userVerifyRequest) {
	return await noneAuthClient.post('/user/verify-confirm', userVerifyRequest)
}

/**
 * 회원 이메일 인증상태 변경
 * @param {*} userVerifyRequest
 * @returns
 */
export async function patchVerifyTokenUpdate(userVerifyRequest) {
	return await noneAuthClient.patch(`/user/verify-update`, userVerifyRequest)
}

/**
 * 회원 정보 수정
 * @param {*} userDto
 * @returns
 */
export async function putUserInfoUpdate(userDto) {
	return await authClient.put('/user/update', userDto)
}

/**
 * 아이디 찾기
 * @param {*} name, phoneNum
 * @returns 아이디(이메일)
 */
export async function getUserId({ name, phoneNum }) {
	return await noneAuthClient.get(`/user/find-id`, {
		params: {
			name,
			phoneNum,
		},
	})
}

/**
 * 비밀번호 찾기 - 재설정 메일 전송
 * @param {*} name, email
 * @returns 메일 전송 성공 여부
 */
export async function postUserMail({ name, email }) {
	return await noneAuthClient.get(`/user/send-link`, {
		params: {
			name,
			email,
		},
	})
}

/**
 * 비밀번호 찾기 - 이메일 링크의 난수를 가지고 아이디 찾기
 * @param {*} tempCode
 * @returns id
 */
export async function getUserFromCode({ tempCode }) {
	return await noneAuthClient.get(`/user/find-id-from-code`, {
		params: {
			tempCode,
		},
	})
}

/**
 * 비밀번호 찾기 - 비밀번호 변경
 * @param {*} id, passwd
 * @returns 비밀번호 변경 성공 여부
 */
export async function postNewPassword({ id, passwd, tempCode }) {
	return await noneAuthClient.get(`/user/update-pw`, {
		params: { id, passwd, tempCode },
	})
}

/**
 * 회원정보관리 - 비밀번호 변경
 * @param {*} id, oldpw, passwd
 * @returns 비밀번호 변경 성공 여부
 */
export async function postNewPasswordCheckOld({ id, oldPw, passwd }) {
	return await authClient.get(`/user/update-pw-after-chk`, {
		params: { id, oldPw, passwd },
	})
}

/**
 * 회원정보관리 - 수정
 * @param id, email, name, phone, country, subscribeFlag
 * @returns 변경 성공 여부
 */
export async function postUserInfo({ id, email, name, phone, country, subscribeFlag }) {
	return await authClient.get(`/user/update-user`, {
		params: { id, email, name, phone, country, subscribeFlag },
	})
}
// export async function postUserInfo(userUpdateRequest) {
// 	return await authClient.get(`/user/update-user`, userUpdateRequest)
// }

/**
 * 회원에 따른 accountId가 유효한지 검증
 * @param {*} accountId
 * @returns Boolean
 */
export async function getAuthenticationAccountId({ accountId }) {
	return await authClient.get(`/user/authentication/${accountId}`)
}
