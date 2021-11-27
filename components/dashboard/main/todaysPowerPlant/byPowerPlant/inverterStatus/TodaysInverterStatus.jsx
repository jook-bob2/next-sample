import React from 'react'
import Link from 'next/link'

export default function TodaysInverterStatus() {
	return (
		<header style={{ border: 'solid 1px red' }}>
			<Link href={{ pathname: '/inverter/inverter-info' }}>
				<a>인버터 화면으로 이동</a>
			</Link>
			<h1>인버터 상태</h1>
		</header>
	)
}
