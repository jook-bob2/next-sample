import { createContext } from 'react'
import { createAsyncDispatcher } from '../utils/createAsyncDispatcher'
import { createAsyncHandler } from '../utils/createAsyncHandler'
import {
	postUserJoin,
	postUserLogin,
	postUserLogout,
	getUserId,
	postUserMail,
	getUserFromCode,
	postNewPassword,
	postNewPasswordCheckOld,
	postUserInfo,
	getUserInfoDetail,
	patchVerifyTokenUpdate,
} from '@api/user/userApi'
import { userConstants } from '../costants/userConstants'

// 컨텍스트를 생성함
export const UserContext = createContext(null)

// 핸들러를 생성함.
export const userLoginHandler = createAsyncHandler(userConstants.POST_USER_LOGIN, 'userLogin')
export const userLogoutHandler = createAsyncHandler(userConstants.POST_USER_LOGOUT, 'userLogout')
export const userJoinHandler = createAsyncHandler(userConstants.POST_USER_JOIN, 'userJoin')
export const userFindIdHandler = createAsyncHandler(userConstants.GET_USER_ID, 'userFindId')

export const userFromCodeHandler = createAsyncHandler(userConstants.GET_USER_FROM_CODE, 'userFromCode')
export const userChangeTempPwHandler = createAsyncHandler(userConstants.POST_USER_PW, 'userChangeTempPw')
export const userSendLinkHandler = createAsyncHandler(userConstants.POST_USER_MAIL, 'userSendLink')
export const userChangePwHandler = createAsyncHandler(userConstants.POST_NEW_PW, 'userChangePw')
export const userInfoDetailHandler = createAsyncHandler(userConstants.GET_USER_INFO_DETAIL, 'userInfoDetail')
export const userVerifyUpdateHandler = createAsyncHandler(userConstants.PATCH_VERIFY_TOKEN, 'userVerifyUpdate')
export const userInfoDetailUpdateHandler = createAsyncHandler(userConstants.POST_USER_INFO, 'userInfoDetailUpdate')

// 액션을 핸들링하고, API 호출함.
export const POST_USER_LOGIN = createAsyncDispatcher(userConstants.POST_USER_LOGIN, postUserLogin)
export const POST_USER_LOGOUT = createAsyncDispatcher(userConstants.POST_USER_LOGOUT, postUserLogout)
export const POST_USER_JOIN = createAsyncDispatcher(userConstants.POST_USER_JOIN, postUserJoin)
export const GET_USER_ID = createAsyncDispatcher(userConstants.GET_USER_ID, getUserId)

export const POST_USER_MAIL = createAsyncDispatcher(userConstants.POST_USER_MAIL, postUserMail)
export const GET_USER_FROM_CODE = createAsyncDispatcher(userConstants.GET_USER_FROM_CODE, getUserFromCode)
export const POST_USER_PW = createAsyncDispatcher(userConstants.POST_USER_PW, postNewPassword) //비밀번호찾기-비밀번호변경
export const POST_NEW_PW = createAsyncDispatcher(userConstants.POST_NEW_PW, postNewPasswordCheckOld) //회원정보관리-비밀번호변경

export const POST_USER_INFO = createAsyncDispatcher(userConstants.POST_USER_INFO, postUserInfo)
export const GET_USER_INFO_DETAIL = createAsyncDispatcher(userConstants.GET_USER_INFO_DETAIL, getUserInfoDetail)
export const PATCH_VERIFY_TOKEN = createAsyncDispatcher(userConstants.PATCH_VERIFY_TOKEN, patchVerifyTokenUpdate)
