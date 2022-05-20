import { userInitialState } from '../state'
import { UserAction, UserState } from '../state/types'

export const userReducer = (state: UserState, { type, payload }: UserAction) => {
	switch (type) {
		case 'ADD_USER':
			return { ...state, ...payload }
		case 'INIT_USER':
			return userInitialState
		default:
			break
	}
}
