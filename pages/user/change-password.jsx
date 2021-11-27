import Meta from '@/components/ui/common/Meta'
import UserChangePasswordComponent from '@/components/user/UserChangePasswordComponent'
import AuthContainer from '@/containers/AuthContainer'
import React from 'react'

export default function ChangePassword() {
	return (
		<AuthContainer>
			<Meta />
			<UserChangePasswordComponent />
		</AuthContainer>
	)
}
