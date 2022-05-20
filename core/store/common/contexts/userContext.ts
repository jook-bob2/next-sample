import { createContext } from 'react'
import { UserDispatch, UserState } from '../state/types'

interface ValueType {
	state: UserState
	dispatch: UserDispatch
	onLoginSuccess: (data: UserState) => void
	onLogoutSuccess: () => void
	getToken: () => TokenType
}

interface TokenType {
	accessToken: string
	refreshToken: string
}

export const UserStateContext = createContext<ValueType | null>(null)
