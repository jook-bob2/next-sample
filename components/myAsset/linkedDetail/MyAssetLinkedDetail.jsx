import React, { useState } from 'react'
import { initialStartDt } from '@/utils/search/initialSearchDate'
import moment from 'moment'
import HeaderRoute from '@/components/ui/styled/components/HeaderRoute'
import { useRouter } from 'next/router'

export default function MyAssetLinkedDetail() {
	const [startDate] = useState(initialStartDt) //달력의 시작일
	const { push } = useRouter()
	return (
		<>
			<HeaderRoute onClick={() => push('/my-asset/asset-status')} title="일광 발전소(1KW)" />
			<article>
				<div>
					<div>
						<span>일</span>
					</div>
					<div>
						<span>월</span>
					</div>
					<div>
						<span>년</span>
					</div>
				</div>
				<div>
					<p>{moment(startDate).format('YYYY-MM-DD')}</p>
				</div>
				<div>
					<div>
						<p>수익</p>
						<p>(정상)</p>
					</div>
					<div>
						<span>555,555원</span>
					</div>
				</div>
			</article>
		</>
	)
}
