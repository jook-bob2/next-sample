import React, { useState } from 'react'
import Link from 'next/link'
import { initialStartDt } from '@/utils/search/initialSearchDate'
import moment from 'moment'

export default function MyAssetTodaysExpectedRevenue() {
	/* datepicker */
	const [startDate] = useState(initialStartDt) //달력의 시작일

	return (
		<>
			<header>
				<Link href={{ pathname: '/' }}>
					<a>Go Dashboard</a>
				</Link>
				<h1>오늘의 예상 수익</h1>
			</header>
			<article>
				<div>
					<select>
						<option>일광 발전소(1KW)</option>
					</select>
				</div>
				<div>
					<button>일</button>
					<button>월</button>
					<button>년</button>
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
