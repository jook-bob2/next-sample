import React from 'react'
import Link from 'next/link'

export default function PowerPlantInfoNotLinked() {
	return (
		<article>
			<div>
				<span>발전소를 연동하여 더욱 간편하게 모니터링 해보세요!</span>
				<div>
					<p>발전 정보</p>
				</div>
				<div>
					<p>발전소 정보</p>
				</div>
				<div>
					<p>설비 정보</p>
				</div>
			</div>
			<div>
				<Link href={{ pathname: '/power-plant/power-plant-linkage' }}>
					<a>발전소 연동하기</a>
				</Link>
			</div>
		</article>
	)
}
