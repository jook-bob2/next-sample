import React from 'react'
import HeaderRoute from '@/components/ui/styled/components/HeaderRoute'
import { useRouter } from 'next/router'

export default function PowerPlantDetail() {
	const { push } = useRouter()
	return (
		<>
			<HeaderRoute onClick={() => push('/power-plant/power-plant-info')} title="일광 발전소(1KW)" />
			<article>
				<div>
					<p>{'[ABC] Butter_405264'}</p>
				</div>
				<div>
					<div>
						<p>발전소 정보</p>
					</div>
					<div>
						<p>발전 정보</p>
					</div>
				</div>
			</article>
		</>
	)
}
