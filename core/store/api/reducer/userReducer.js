import { userConstants } from '../costants/userConstants'
import {
	userLoginHandler,
	userLogoutHandler,
	userJoinHandler,
	userFindIdHandler,
	userFromCodeHandler,
	userSendLinkHandler,
	userChangePwHandler,
	userChangeTempPwHandler,
	userInfoDetailHandler,
	userVerifyUpdateHandler,
	userInfoDetailUpdateHandler,
} from '../create/userCreate'

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
export function userReducer(state, action) {
	switch (action.type) {
		case userConstants.POST_USER_LOGIN:
		case userConstants.POST_USER_LOGIN_SUCCESS:
		case userConstants.POST_USER_LOGIN_ERROR:
			return userLoginHandler(state, action)
		case userConstants.POST_USER_LOGOUT:
		case userConstants.POST_USER_LOGOUT_SUCCESS:
		case userConstants.POST_USER_LOGOUT_ERROR:
			return userLogoutHandler(state, action)
		case userConstants.POST_USER_JOIN:
		case userConstants.POST_USER_JOIN_SUCCESS:
		case userConstants.POST_USER_JOIN_ERROR:
			return userJoinHandler(state, action)
		case userConstants.GET_USER_ID:
		case userConstants.GET_USER_ID_SUCCESS:
		case userConstants.GET_USER_ID_ERROR:
			return userFindIdHandler(state, action)
		case userConstants.GET_USER_FROM_CODE:
		case userConstants.GET_USER_FROM_CODE_SUCCESS:
		case userConstants.GET_USER_FROM_CODE_ERROR:
			return userFromCodeHandler(state, action)
		case userConstants.POST_USER_MAIL:
		case userConstants.POST_USER_MAIL_SUCCESS:
		case userConstants.POST_USER_MAIL_ERROR:
			return userSendLinkHandler(state, action)
		case userConstants.POST_NEW_PW:
		case userConstants.POST_NEW_PW_SUCCESS:
		case userConstants.POST_NEW_PW_ERROR:
			return userChangePwHandler(state, action)
		case userConstants.POST_USER_PW:
		case userConstants.POST_USER_PW_SUCCESS:
		case userConstants.POST_USER_PW_ERROR:
			return userChangeTempPwHandler(state, action)
		case userConstants.GET_USER_INFO_DETAIL:
		case userConstants.GET_USER_INFO_DETAIL_SUCCESS:
		case userConstants.GET_USER_INFO_DETAIL_ERROR:
			return userInfoDetailHandler(state, action)
		case userConstants.POST_USER_INFO:
		case userConstants.POST_USER_INFO_SUCCESS:
		case userConstants.POST_USER_INFO_ERROR:
			return userInfoDetailUpdateHandler(state, action)
		case userConstants.PATCH_VERIFY_TOKEN:
		case userConstants.PATCH_VERIFY_TOKEN_SUCCESS:
		case userConstants.PATCH_VERIFY_TOKEN_ERROR:
			return userVerifyUpdateHandler(state, action)
		default:
			throw new Error(`Unhanded action type: ${action.type}`)
	}
}
