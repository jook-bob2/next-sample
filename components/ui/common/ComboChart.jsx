import React, { useMemo } from 'react'
import { Chart } from 'react-google-charts'
import style from '@styles/mySilkroad/mySilkroadStat/mySilkroadStat.module.scss'
import { Icon } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'
import ChartLoading from '../styled/components/ChartLoading'
const TRANS_MESSAGE_TRAFFICCOMMON = 'mySilkroad.trafficStatDetail.trafficCommon.'

export default function ComboChart({ chartData, trafficUnits, showTextInterval }) {
	const { t } = useTranslation()
	const data = useMemo(() => getChartData, [chartData])

	function getChartData() {
		if (chartData?.length > 1) {
			if (chartData[1][0] !== 'NO DATA') {
				return chartData
			}
		}
		return []
	}

	/* SAMPLE DATA */
	// let chartData = [
	// 	['Hour', 'Traffic', 'Hit'],
	// 	['00:00', 0, 0],
	// 	['01:00', 0, 0],
	// 	['02:00', 0, 0],
	// 	['03:00', 1, 1],
	// 	['04:00', 0, 0],
	// 	['05:00', 0, 0],
	// 	['06:00', 0, 0],
	// 	['07:00', 0, 0],
	// 	['08:00', 0, 0],
	// 	['09:00', 0, 0],
	// 	['10:00', 1, 1],
	// 	['11:00', 3, 2],
	// 	['12:00', 7, 3],
	// 	['13:00', 10, 6],
	// 	['14:00', 12, 7],
	// 	['15:00', 19, 12],
	// 	['16:00', 27, 13],
	// 	['17:00', 31, 16],
	// 	['18:00', 30, 18],
	// 	['19:00', 16, 11],
	// 	['20:00', 20, 12],
	// 	['21:00', 28, 15],
	// 	['22:00', 11, 9],
	// 	['23:00', 6, 2],
	// 	['24:00', 0, 0],
	// ]

	return (
		<>
			{/* {data().length > 1 && chartData[1][0] !== 'NO DATA' ? ( */}
			{data().length > 1 ? (
				<div>
					<Chart
						// width={'500px'}
						// height={'300px'}
						chartType="ComboChart"
						loader={<ChartLoading />}
						/* SAMPLE DATA */
						data={chartData}
						options={{
							width: '100%',
							height: 320,
							// chartArea: { width: '80%', height: '30%' },

							// title: 'Traffic usage detail',
							// titleTextStyle: {
							// 	color: '#FF0000',
							// },
							vAxis: {
								title: t(TRANS_MESSAGE_TRAFFICCOMMON + 'traffic') + ' (' + trafficUnits + ')',
							},
							hAxis: {
								// title: 'Time',
								title: '',
								showTextEvery: showTextInterval,
								// showTextEvery: 12, // 1시간씩 끊기
								// showTextEvery: 24, // 2시간씩 끊기
								// showTextEvery: 36, // 3시간씩 끊기
							},
							seriesType: 'bars',
							series: {
								0: { color: '#457591' },
								1: { color: '#ffc31d', type: 'line' },
								// 2: { color: '#457591', visibleInLegend: false },
							},
							// legend: { position: 'bottom', textStyle: { color: 'black', fontSize: 16 } },
							// legend: 'bottom',
							legend: { position: 'bottom', alignment: 'end', orientation: 'vertical' },
						}}
						// rootProps={{ 'data-testid': '1' }}
					/>
				</div>
			) : (
				<div className={style.item_contents}>
					<div className={style.error_wrap}>
						<div className={style.error_icon}>
							<Icon name="warning circle" color="orange"></Icon>
							{t('error.nodata')}
						</div>
					</div>
				</div>
			)}
		</>
	)
}
