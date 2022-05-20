export enum ErrorType {
	AUTHORIZATION = 'Authorization', // 인증 오류
	FORBIDDEN_OCCURRED = 'Forbidden', // 403 에러
	UNAUTHORIZED = 'Unauthorized', // 401 에러
	UNKNOWN_ERROR = 'An unknown error has occurred.', // 알 수 없는 에러
	BAD_REQUEST = 'Bad request', // 400 에러
	UNAUTHORIZED_CODE = 'ESVC005', // 401 서버 익셉션 에러
	SERVER_ERROR_CODE = 'ESVC000', // 500 서버 익셉션 에러
	LOGIN_FAIL = 'ESVC003', // 로그인 실패
	ALREADY_EMAIL = 'ESVC022', // 이메일을 통해 인증을 진행하신 후 다시 시도해 주세요.
}
