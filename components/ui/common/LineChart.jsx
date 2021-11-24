import React from 'react'
import { Chart } from 'react-google-charts'

const chartTitle = '아일랜드의 연간 기온, 일조량 평균'

/* SAMPLE DATA */
export const chartData = [
	['날짜', '평균 기온', '평균 일조 시간'],
	['2021-03-01', -0.5, 5.7],
	['2021-03-11', 0.4, 8.7],
	['2021-03-21', 0.5, 12],
	['2021-04-01', 2.9, 15.3],
	['2021-04-11', 6.3, 18.6],
	['2021-04-21', 9, 20.9],
	['2021-05-01', 10.6, 19.8],
	['2021-05-11', 10.3, 16.6],
	['2021-05-21', 7.4, 13.3],
	['2021-06-01', 4.4, 9.9],
	['2021-06-11', 1.1, 6.6],
	['2021-06-21', -0.2, 4.5],
	// [
	// 	{
	// 		type: 'date',
	// 		label: 'Day',
	// 	},
	// 	'평균 기온',
	// 	'평균 일조 시간',
	// ],
	// [new Date(2014, 0), -0.5, 5.7],
	// [new Date(2014, 1), 0.4, 8.7],
	// [new Date(2014, 2), 0.5, 12],
	// [new Date(2014, 3), 2.9, 15.3],
	// [new Date(2014, 4), 6.3, 18.6],
	// [new Date(2014, 5), 9, 20.9],
	// [new Date(2014, 6), 10.6, 19.8],
	// [new Date(2014, 7), 10.3, 16.6],
	// [new Date(2014, 8), 7.4, 13.3],
	// [new Date(2014, 9), 4.4, 9.9],
	// [new Date(2014, 10), 1.1, 6.6],
	// [new Date(2014, 11), -0.2, 4.5],
]

// export default function LineChart({ chartData }) {
export default function LineChart() {
	if (chartData.length > 1) {
		return (
			<div className="card">
				<Chart
					chartType="Line"
					/* SET SIZE OF COMPONENT AREA */
					// width={'100%'}
					// height={'720'}
					/* SET LOADING */
					loader={<div>Loading Chart</div>}
					/* SET CHART DATA */
					data={chartData}
					options={{
						chart: {
							title: { chartTitle },
							// subtitle: '부제목을 입력하세요',
						},
						/* SET SIZE OF CHART AREA ONLY */
						width: 900,
						height: 500,
						curveType: 'function',
						lineWidth: 4,

						/* INTERVAL OPTION */
						intervals: {
							style: 'line',
							// style: 'bars',
							// style: 'sticks',
							// style: 'points', pointSize: 4,
							// style: 'area',
							// lineWidth: 1, barWidth: 1, style: 'boxes',
							// i0: { style: 'line', color: '#D3362D', lineWidth: 0.5 },
							// i1: { style: 'line', color: '#F1CA3A', lineWidth: 1 },
							// i2: { style: 'line', color: '#5F9654', lineWidth: 2 },
							// i0: {
							// 	color: '#4374E0',
							// 	style: 'bars',
							// 	barWidth: 0,
							// 	lineWidth: 4,
							// 	pointSize: 10,
							// 	fillOpacity: 1,
							// },
							// i1: {
							// 	color: '#E49307',
							// 	style: 'bars',
							// 	barWidth: 0,
							// 	lineWidth: 4,
							// 	pointSize: 10,
							// 	fillOpacity: 1,
							// },
							// i2: { style: 'area', curveType: 'function', fillOpacity: 0.3 },
						},

						/* CHART LEGEND */
						// legend: 'none',

						/* SERIES OPTION */
						series: {
							// Gives each series an axis name that matches the Y-axis below.
							0: {
								axis: '평균 기온',
								color: '#5F88E2',
							},
							1: {
								axis: '일조량',
								color: '#E32260',
							},
							// 2: { curveType: 'function' },
						},

						/* LABEL OPTION */
						// axes: {
						// 	// Adds labels to each axis; they don't have to match the axis names.
						// 	y: {
						// 		Temps: { label: '기온 (섭씨)' },
						// 		Daylight: { label: '일조량' },
						// 	},
						// },
						// hAxis: { title: '시간' },
						// vAxis: { title: '대중성' },
					}}
					// rootProps={{ 'data-testid': '4' }}
				></Chart>
			</div>
		)
	}
}
