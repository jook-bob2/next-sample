import { userReducer } from '../reducer/userReducer'
import { initialAsyncState, initialResponse } from '../utils/initialAsyncState'
import { UserContext } from '../create/userCreate'
import { useContext, useReducer } from 'react'

// 유저정보 상세 초기화 데이터
export const initialUserInfoDetailState = {
	...initialAsyncState,
	data: {
		...initialResponse,
		data: {
			id: 0,
			email: '',
			name: '',
			phone: '',
			country: '',
			subscribeFlag: 'N',
		},
	},
}

// UsersContext 에서 사용 할 기본 상태
const initialState = {
	userLogin: initialAsyncState,
	userLogout: initialAsyncState,
	userJoin: initialAsyncState,
	userInfoDetail: initialUserInfoDetailState,
	userInfoDetailUpdate: initialUserInfoDetailState,
	userVerifyUpdate: initialAsyncState,
	userFindId: initialAsyncState,
}

export function UserApiProvider({ children }) {
	const [state, dispatch] = useReducer(userReducer, initialState)

	return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>
}

export function useUserContext() {
	const { state, dispatch } = useContext(UserContext)
	if (!state) {
		throw new Error('Cannot find UserState')
	}
	return { state, dispatch }
}
