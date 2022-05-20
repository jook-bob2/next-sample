import { createContext } from 'react'
import { PrevPathDispatch, PrevPathState } from '../state/types'

interface ValueType {
	state: PrevPathState
	dispatch: PrevPathDispatch
}

export const PrevPathStateContext = createContext<ValueType | null>(null)
