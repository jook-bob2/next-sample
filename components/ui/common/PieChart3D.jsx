import React, { useMemo } from 'react'
import { Chart } from 'react-google-charts'
import style from '@styles/mySilkroad/mySilkroadbasic/mySilkroadMonitoring.module.scss'
import { Icon } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'

export default function PieChart({ chartData }) {
	const { t } = useTranslation()
	const data = useMemo(() => getChartData, [chartData])

	function getChartData() {
		if (chartData.length > 1) {
			return chartData
		}
		return []
	}

	if (chartData.length > 1) {
		return (
			<>
				{data().length > 1 ? (
					<div>
						<Chart
							className={style.chart_style}
							chartType="PieChart"
							loader={<div>Loading Chart</div>}
							data={chartData}
							/* SET SIZE OUTSIDE OF PIE */
							// width={'400px'}
							// height={'200px'}

							/* SAMPLE DATA FORMAT */
							// data={[
							// 	['Driver', 'Ranking'],
							// 	['Verstappen', 1],
							// 	['Hamilton', 2],
							// 	['Bottas', 3],
							// 	['Norris', 4],
							// 	['Perez', 5],
							// 	['Leclerc', 6],
							// 	['Sainz', 7],
							// 	['Gasly', 8],
							// 	['Riccardo', 9],
							// 	['Alonso', 10],
							// ]}

							/* OPTIONS */
							options={{
								/* TITLE */
								// title: 'Current Traffic Usage',

								/* PIE SIZE SETTING */
								width: 200,
								height: 130,
								chartArea: { width: '100%', height: '80%' },

								/* CHART LEGEND */
								legend: 'none',
								// legend: { position: 'bottom' },

								/* 3D OPTION */
								is3D: true,

								/* TOOLTIP OPTION */
								// tooltip: { trigger: 'none' },
								// tooltip: { trigger: 'selection' },
								// tooltip: { isHtml: true },

								/* 파이 조각 내부 텍스트 (기본값은 %) */
								// pieSliceText: 'label',
								// pieSliceText: 'value',

								/* 파이 조각 내부 텍스트 스타일 */
								pieSliceTextStyle: {
									// color: '#000000',
									color: 'white',
								},

								/* COLOR SETTING */
								slices: {
									0: { color: '#4b3f8f' },
									1: { color: '#f1fbff' },
								},
							}}

							/* ETC */
							// rootProps={{ 'data-testid': '2' }}
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
}
