import { commonProviderArray } from './providers'
import { ProviderCreate } from '@store/config/ProviderCreate'
import { CNProps } from './state/types'

export function CommonProvider({ children }: CNProps) {
	return <ProviderCreate contexts={commonProviderArray}>{children}</ProviderCreate>
}
