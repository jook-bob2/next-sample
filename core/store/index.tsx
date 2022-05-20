import React from 'react'
import { CommonProvider } from './common'
import { ApiProvider } from './api'
import { CNProps } from './common/state/types'

export default function Store({ children }: CNProps) {
	return (
		<CommonProvider>
			<ApiProvider>{children}</ApiProvider>
		</CommonProvider>
	)
}
