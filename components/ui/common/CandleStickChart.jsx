import { Chart } from 'react-google-charts'

/* SAMPLE DATA */
const chartData = [
	['day', 'sample1', 'sample2', 'sample3', 'sample4'],
	['Mon', 20, 28, 38, 45],
	['Tue', 31, 38, 55, 66],
	['Wed', 50, 55, 77, 80],
	['Thu', 77, 77, 66, 50],
	['Fri', 68, 66, 22, 15],
]

// export default function CandleStickChart({ chartData }) {
export default function CandleStickChart() {
	return (
		<div>
			<Chart
				chartType="CandlestickChart"
				/* SET SIZE OF COMPONENT AREA */
				// width={'100%'}
				// height={350}
				loader={<div>Loading Chart</div>}
				data={chartData}
				options={{
					/* SET SIZE OF CHART AREA ONLY */
					width: 900,
					height: 500,

					/* SET GENERAL FONT SIZE */
					fontSize: 16, // 기본값은 14

					// title: '차트 제목을 입력하세요',

					/* LEGEND SETTING */
					legend: 'none',
					// legend: {
					// 	position: 'top',
					// 	textStyle: {
					// 		// color: '#000000',
					// 		fontSize: 16,
					// 	},
					// },

					/* TOOLTIP SETTING */
					tooltip: {
						textStyle: {
							// color: '#000000',
							// fontSize: 16,
							bold: false,
							// italic: true,
						},
						// showColorCode: true,
					},

					bar: {
						groupWidth: '100%',
					}, // Remove space between bars.

					candlestick: {
						/* 감소 옵션 */
						fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red

						/* 증가 옵션 */
						risingColor: { strokeWidth: 0, fill: '#2277f4' }, // blue
						// risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
					},

					/* HORIZONTAL AXIS UNIT */
					hAxis: {
						title: '변화량',
						// title: {
						// 	TextStyle: {
						// 		color: 'red',
						// 		// fontName: '',
						// 		fontSize: 20,
						// 		bold: true,
						// 		italic: true,
						// 	},
						// },

						// baselineColor: '#ff0000',

						// gridlines: {
						// 	color: '#ff0000',
						// 	minSpacing: 20,
						// },
						// format: 'none',
						// format: 'decimal',
						// format: 'scientific',
						// format: 'currency',
						// format: 'percent',
						// format: 'short',
						// format: 'long',
					},

					/* VERTICAL AXIS UNIT */
					vAxis: {
						title: '요일',
						// titleTextStyle: {
						// 	color: '#000000',
						// },
						// textStyle: { color: '#000000', fontSize: 16 },
						// logScale: true,

						/* 세로축 기준선 */
						// baseline: 100,

						/* 세로축 기준선 색상 */
						// baselineColor: '#ff0000',
					},
				}}
				// rootProps={{ 'data-testid': '2' }}
			/>
		</div>
	)
}
