import { createContext } from 'react'
import { AlertDispatch, AlertState } from '../state/types'

interface ValueType {
	state: AlertState
	dispatch: AlertDispatch
	openAlert: (msg: string) => Promise<boolean>
	closeAlert: () => void
}

export const AlertStateContext = createContext<ValueType | null>(null)
