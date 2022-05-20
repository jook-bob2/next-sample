import HeaderRoute from '@/components/ui/styled/components/HeaderRoute'
import { useRouter } from 'next/router'
import React from 'react'

export default function NoticeDetail() {
	const { push } = useRouter()
	return (
		<>
			<HeaderRoute onClick={() => push('/notice/notice-list')} title="공지사항" />
			<article>
				<div>
					<strong>타이틀 노출 영역</strong>
				</div>
				<div>내용 영역</div>
				<div>이전글 다음글 라인</div>
			</article>
		</>
	)
}
