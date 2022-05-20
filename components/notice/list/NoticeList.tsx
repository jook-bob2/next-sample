import HeaderRoute from '@/components/ui/styled/components/HeaderRoute'
import { useRouter } from 'next/router'
import React from 'react'

export default function NoticeList() {
	const { push } = useRouter()
	return (
		<>
			<HeaderRoute onClick={() => push('/')} title="공지사항" />
			<article>
				<div>검색 라인</div>
				<div>
					<p>목록 라인</p>
					<button onClick={() => push('/notice/notice-detail')}>공지사항 상세로 이동</button>
				</div>
			</article>
		</>
	)
}
