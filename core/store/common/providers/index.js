import { LangProvider } from './LangProvider'
import { AlertProvider } from './AlertProvider'
import { ConfirmProvider } from './ConfirmProvider'
import { UserProvider } from './UserProvider'
import { PathHistoryProvider } from './PathHistoryProvider'

export const commonProviderArray = [
	LangProvider,
	AlertProvider,
	ConfirmProvider,
	UserProvider,
	PathHistoryProvider,
].reverse()
