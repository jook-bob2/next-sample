import React from 'react'
import Link from 'next/link'

export default function TodaysExpectedReturn() {
	return (
		<header style={{ border: 'solid 1px red' }}>
			<Link href={{ pathname: '/my-asset/todays-expected-revenue' }}>
				<a>나의 자산 현황 화면으로 이동</a>
			</Link>
			<h1>오늘의 예상 수익</h1>
		</header>
	)
}
