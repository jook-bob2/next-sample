import AuthComponent from '@/components/auth/AuthComponent'
import Meta from '@/components/ui/common/Meta'
import AuthContainer from '@/containers/AuthContainer'
import React from 'react'

export default function Auth() {
	return (
		<AuthContainer>
			<Meta />
			<AuthComponent />
		</AuthContainer>
	)
}
