import { useHistoryPath } from '@/core/store/common/providers/PathHistoryProvider'
import { useRouter } from 'next/router'
import React from 'react'
import HeaderRoute from '../ui/styled/components/HeaderRoute'

export default function UserInfoComponent() {
	const { push } = useRouter()
	const { state: history } = useHistoryPath()

	function handleClickBack() {
		history.prevPath ? push(history.prevPath) : push('/')
	}
	return (
		<section>
			<HeaderRoute onClick={() => handleClickBack()} title="내 정보" />
			<article>
				<p>내정보 출력</p>
				<div>
					<button onClick={() => push('/user/change-password')}>비밀번호 변경</button>
				</div>
			</article>
		</section>
	)
}
