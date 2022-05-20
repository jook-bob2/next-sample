import { ErrorType } from '@/constants/errorType'
import React, { Dispatch } from 'react'

export interface CNProps {
	children: React.ReactNode
}

export interface CRProps extends CNProps {
	contexts: React.FC[]
}

export interface ResponseApi {
	msg: string
	data: any
	success: boolean
	code: number | 'SUCCESS' | ErrorType
}

// 알럿 타입
export type AlertAction = { type: 'SHOW_ALERT'; msg: string } | { type: 'CLOSE_ALERT'; msg?: string }
export type AlertDispatch = Dispatch<AlertAction>
export interface AlertState {
	open?: boolean
	msg?: string
}

// 컨펌 타입
export type ConfirmAction = { type: 'SHOW_CONFIRM'; msg: string } | { type: 'CLOSE_CONFIRM'; msg?: string }
export type ConfirmDispatch = Dispatch<ConfirmAction>
export interface ConfirmState {
	open: boolean
	msg?: string
}

// 유저 정보 타입
export type UserAction = { type: 'ADD_USER'; payload: UserState } | { type: 'INIT_USER'; payload?: UserState }
export type UserDispatch = Dispatch<UserAction>
export interface UserState {
	id?: number
	name?: string
	email?: string
	accessToken?: string
	refreshToken?: string
	isLoggedIn?: boolean
}

// 언어 상태
export type LangAction = { type: 'SET_LANG'; lang: string; langText: string }
export type LangDispatch = Dispatch<LangAction>
export interface LangState {
	lang: string
	langText: string
}

// 이전 경로 상태
export type PrevPathAction = { type: 'SET_PATH_HISTORY'; prevPath: string; curPath: string }
export type PrevPathDispatch = Dispatch<PrevPathAction>
export interface PrevPathState {
	prevPath: string
	curPath: string
}
