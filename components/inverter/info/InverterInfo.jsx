import HeaderRoute from '@/components/ui/styled/components/HeaderRoute'
import { useRouter } from 'next/router'
import React from 'react'

export default function InverterInfo() {
	const { push } = useRouter()
	return (
		<>
			<HeaderRoute onClick={() => push('/')} title="인버터 정보" />
			<article>
				<div>
					<span>발전소 선택영역</span>
				</div>
				<div>
					<p>일일 발전량</p>
					<p>PEAK</p>
					<p>누적 발전량</p>
				</div>
				<div>
					<p>인버터 1</p>
					<p>인버터 명이 노출되는 영역입니다.</p>
				</div>
			</article>
		</>
	)
}
