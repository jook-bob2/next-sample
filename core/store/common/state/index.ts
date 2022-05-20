import { AlertState, ConfirmState, LangState, PrevPathState, UserState } from './types'

// 알럿 초기 상태 값
export const alertInitialState: AlertState = {
	open: false,
	msg: '',
}

// 컨펌 초키 상태 값
export const confirmInitialState: ConfirmState = {
	open: false,
	msg: '',
}

// 유저 정보 초기 상태 값
export const userInitialState: UserState = {
	id: 0,
	name: '',
	email: '',
	accessToken: '',
	refreshToken: '',
	isLoggedIn: false,
}

// 언어 상태
export const langInitialState: LangState = {
	lang: '',
	langText: '',
}

// path history state
export const prevPathInitialState: PrevPathState = {
	prevPath: '',
	curPath: '',
}
