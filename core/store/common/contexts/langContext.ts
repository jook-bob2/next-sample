import { createContext } from 'react'
import { LangDispatch, LangState } from '../state/types'

interface ValueType {
	state: LangState
	dispatch: LangDispatch
	setLanguage: ({ lang, langText }: LangState) => void
}

export const LangStateContext = createContext<ValueType | null>(null)
