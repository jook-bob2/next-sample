import React, { useContext, useEffect, useReducer } from 'react'
import { PathHistoryStateContext } from '@store/common/create'
import { pathHistoryInitialState } from '@store/common/initialState'
import { pathHistoryReducer } from '@store/common/reducer'
import { constants } from '@store/common/constants'
import { useRouter } from 'next/router'

const { SET_PATH_HISTORY } = constants

export function PathHistoryProvider({ children }) {
	const [historyState, historyDispatch] = useReducer(pathHistoryReducer, pathHistoryInitialState)
	const { asPath } = useRouter()

	useEffect(() => {
		const { curPath, prevPath } = historyState
		if (!curPath && !prevPath) {
			historyDispatch({
				type: SET_PATH_HISTORY,
				prevPath: '',
				curPath: asPath,
			})
		} else {
			historyDispatch({
				type: SET_PATH_HISTORY,
				prevPath: curPath,
				curPath: asPath,
			})
		}
	}, [asPath])

	return (
		<PathHistoryStateContext.Provider value={{ historyState, historyDispatch }}>
			{children}
		</PathHistoryStateContext.Provider>
	)
}
export function useHistoryPath() {
	const { historyState: state, historyDispatch: dispatch } = useContext(PathHistoryStateContext)
	if (!state) {
		throw new Error('Cannot find LangProvider')
	}
	return { state, dispatch }
}
