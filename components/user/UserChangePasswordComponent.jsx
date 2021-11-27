import { useRouter } from 'next/router'
import React from 'react'
import HeaderRoute from '../ui/styled/components/HeaderRoute'

export default function UserChangePasswordComponent() {
	const { push } = useRouter()
	return (
		<section>
			<HeaderRoute onClick={() => push('/user/user-info')} title="비밀번호 변경" />
			<article>
				<p>비밀번호 변경을 위해 휴대폰 인증하는 곳</p>
			</article>
		</section>
	)
}
