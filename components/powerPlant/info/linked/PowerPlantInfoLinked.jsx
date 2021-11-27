import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function PowerPlantInfoLinked() {
	const { push } = useRouter()
	return (
		<article>
			<div>
				<div>
					<h3>일광 발전소(1KW)</h3>
					<span onClick={() => push({ pathname: '/power-plant/power-plant-detail' })}>
						{'>> 상세로 이동'}
					</span>
				</div>
				<div>
					<h3>발전소 명 노출 영역 (1KW)</h3>
					<span onClick={() => push({ pathname: '/power-plant/power-plant-detail' })}>
						{'>> 상세로 이동'}
					</span>
				</div>
				<div>
					<h3>발전소 명 최대 12자 (1KW)</h3>
					<span onClick={() => push({ pathname: '/power-plant/power-plant-detail' })}>
						{'>> 상세로 이동'}
					</span>
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
