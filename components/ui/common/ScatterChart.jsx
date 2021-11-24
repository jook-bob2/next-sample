import React, { useMemo } from 'react'
import { Chart } from 'react-google-charts'
import style from '@styles/mySilkroad/mySilkroadStat/mySilkroadStat.module.scss'
import { Icon } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'
import ChartLoading from '../styled/components/ChartLoading'
const TRANS_MESSAGE_TRAFFICCOMMON = 'mySilkroad.trafficStatDetail.trafficCommon.'

export default function ScatterChart({ chartData, trafficUnits }) {
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
	// 	['Hour', 'Traffic', 'Hit', 'HitMain'],
	// 	['00:00', 0, 0, 0],
	// 	['01:00', 0, 0, 0],
	// 	['02:00', 0, 0, 0],
	// 	['03:00', 1, 1, 1],
	// 	['04:00', 0, 0, 0],
	// 	['05:00', 0, 0, 0],
	// 	['06:00', 0, 0, 0],
	// 	['07:00', 0, 0, 0],
	// 	['08:00', 0, 0, 0],
	// 	['09:00', 0, 0, 0],
	// 	['10:00', 1, 1, 1],
	// 	['11:00', 3, 2, 1],
	// 	['12:00', 7, 3, 1],
	// 	['13:00', 10, 6, 2],
	// 	['14:00', 12, 7, 3],
	// 	['15:00', 19, 12, 4],
	// 	['16:00', 27, 13, 4],
	// 	['17:00', 31, 16, 5],
	// 	['18:00', 30, 18, 5],
	// 	['19:00', 16, 11, 2],
	// 	['20:00', 20, 12, 3],
	// 	['21:00', 28, 15, 5],
	// 	['22:00', 11, 9, 2],
	// 	['23:00', 6, 2, 1],
	// 	['24:00', 0, 0, 0],
	// ]

	// 필드 수에 맞는 색상 사용
	return (
		<>
			{/* {data().length > 1 && chartData[1][0] !== 'NO DATA' ? ( */}
			{data().length > 1 ? (
				<>
					{data()[0].length < 4 ? (
						<Chart
							chartType="Scatter"
							loader={<ChartLoading />}
							data={chartData}
							options={{
								height: 320,
								// chartArea: { width: '80%', height: '30%' },
								// title: 'Traffic usage detail',
								// titleTextStyle: {
								// 	color: '#FF0000',
								// },
								vAxis: {
									title: t(TRANS_MESSAGE_TRAFFICCOMMON + 'traffic') + ' (' + trafficUnits + ')',
								},
								hAxis: { title: t(TRANS_MESSAGE_TRAFFICCOMMON + 'hour') },
								series: {
									0: { color: '#457591' },
									1: { color: '#ffc31d' },
								},
								legend: {
									position: 'labeled',
									orientation: 'vertical',
									maxLines: 4,
									alignment: 'center',
								},
								axes: {
									x: {
										0: { side: 'bottom' },
									},
									y: {
										Traffic: { label: 'Traffic' },
										Hit: { label: 'Hit' },
									},
								},
							}}
							// rootProps={{ 'data-testid': '1' }}
						/>
					) : (
						<Chart
							// width={'500px'}
							// height={'600px'}
							chartType="Scatter"
							loader={<ChartLoading />}
							data={chartData}
							options={{
								// width: '80%',
								height: 320,
								// chartArea: { width: '80%', height: '30%' },
								// title: 'Traffic usage detail',
								// titleTextStyle: {
								// 	color: '#FF0000',
								// },
								vAxis: {
									title: t(TRANS_MESSAGE_TRAFFICCOMMON + 'traffic') + ' (' + trafficUnits + ')',
								},
								// hAxis: { title: 'IP' },
								hAxis: {
									// title: 'Time',
									title: t(TRANS_MESSAGE_TRAFFICCOMMON + 'ip'),
									// showTextEvery: showTextInterval,
								},
								// label: 'none',
								series: {
									0: { color: '#5cae6a' },
									1: { color: '#457591' },
									2: { color: '#ffc31d' },
									// 2: { color: '#457591', visibleInLegend: false },
								},
								axes: {
									x: {
										0: { side: 'bottom' },
									},
									v: 'none',
								},

								/* CHART LEGEND */
								legend: { position: 'bottom', alignment: 'end', orientation: 'vertical' },

								// legend: { position: 'bottom', textStyle: { color: 'black', fontSize: 16 } },
							}}
							// rootProps={{ 'data-testid': '1' }}
						/>
					)}
				</>
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
