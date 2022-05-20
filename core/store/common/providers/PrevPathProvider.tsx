import React, { useContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import { CNProps } from '../state/types'
import { prevPathInitialState } from '../state'
import { prevPathReducer } from '../reducer/prevPathReducer'
import { PrevPathStateContext } from '../contexts/prevPathContext'

export function PrevPathProvider({ children }: CNProps) {
	const [state, dispatch] = useReducer(prevPathReducer, prevPathInitialState)
	const { asPath } = useRouter()

	useEffect(() => {
		const { curPath, prevPath } = state
		if (!curPath && !prevPath) {
			dispatch({
				type: 'SET_PATH_HISTORY',
				prevPath: '',
				curPath: asPath,
			})
		} else {
			dispatch({
				type: 'SET_PATH_HISTORY',
				prevPath: curPath,
				curPath: asPath,
			})
		}
	}, [asPath])

	return <PrevPathStateContext.Provider value={{ state, dispatch }}>{children}</PrevPathStateContext.Provider>
}
export function usePrevPath() {
	const { state, dispatch } = useContext(PrevPathStateContext)
	if (!state) {
		throw new Error('Cannot find LangProvider')
	}
	return { state, dispatch }
}
