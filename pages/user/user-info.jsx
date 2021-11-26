import Meta from '@/components/ui/common/Meta'
import UserInfoComponent from '@/components/user/UserInfoComponent'
import AuthContainer from '@/containers/AuthContainer'
import React from 'react'

export default function UserInfo() {
	return (
		<AuthContainer>
			<Meta />
			<UserInfoComponent />
		</AuthContainer>
	)
}
