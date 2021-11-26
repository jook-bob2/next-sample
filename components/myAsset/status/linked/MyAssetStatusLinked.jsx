import React from 'react'
import Link from 'next/link'

export default function MyAssetStatusLinked() {
	return (
		<article>
			{/* 연동 완료 시 노출 되는 영역 */}
			<p>연동 완료 시 노출되는 영역</p>
			<div>
				<Link href={{ pathname: '/power-plant/power-plant-detail', query: { id: 1 } }}>
					<a>일광 발전소 (1KW)</a>
				</Link>
			</div>
			<div>
				<Link href={{ pathname: '/power-plant/power-plant-detail', query: { id: 2 } }}>
					<a>발전소 명 노출 영역 (1KW)</a>
				</Link>
			</div>
			<div>
				<Link href={{ pathname: '/power-plant/power-plant-detail', query: { id: 3 } }}>
					<a>발전소 명 최대 12자 (1KW)</a>
				</Link>
			</div>
		</article>
	)
}
