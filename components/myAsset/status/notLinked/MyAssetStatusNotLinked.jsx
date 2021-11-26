import React from 'react'
import Link from 'next/link'

export default function MyAssetStatusNotLinked() {
	return (
		<article>
			{/* 미연동 시 노출 되는 영역 */}
			<p>미연동 시 노출되는 영역</p>
			<div>
				<h1>발전소를 연동하여 더욱 간편하게 모니터링 해보세요!</h1>
				<span>실시간 발전량</span>
				<span>현재 수익</span>
				<span>발전소 상태</span>
			</div>
			<Link href={{ pathname: '/power-plant/power-plant-linkage' }}>
				<a>발전소 연동하기</a>
			</Link>
		</article>
	)
}
