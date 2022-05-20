import { createContext } from 'react'
import { ConfirmDispatch, ConfirmState } from '../state/types'

interface ValueType {
	state: ConfirmState
	dispatch: ConfirmDispatch
	openConfirm: (msg: string) => Promise<boolean>
	closeConfirm: () => void
}

export const ConfirmStateContext = createContext<ValueType | null>(null)
