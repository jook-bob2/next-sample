import { LangProvider } from './LangProvider'
import { AlertProvider } from './AlertProvider'
import { ConfirmProvider } from './ConfirmProvider'
import { UserProvider } from './UserProvider'
import { PrevPathProvider } from './PrevPathProvider'

export const commonProviderArray = [
	LangProvider,
	AlertProvider,
	ConfirmProvider,
	UserProvider,
	PrevPathProvider,
].reverse()
