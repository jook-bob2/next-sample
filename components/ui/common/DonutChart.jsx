import React, { useEffect, useMemo, useState } from 'react'
import { Chart } from 'react-google-charts'
import style from '@styles/mySilkroad/mySilkroadStat/mySilkroadStat.module.scss'
import { Icon } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'
import ChartLoading from '../styled/components/ChartLoading'
// const TRANS_MESSAGE_TRAFFICCOMMON = 'mySilkroad.trafficStatDetail.trafficCommon.'

export default function DonutChart({ chartData }) {
	const { t } = useTranslation()
	const data = useMemo(() => getChartData, [chartData])
	const [countryTraffic, setCountryTraffic] = useState([])

	function getChartData() {
		if (chartData?.length > 1 && chartData[1][0] !== 'NO DATA') {
			return chartData
		}
		return []
	}

	useEffect(() => {
		if (chartData?.length > 1 && chartData[1][0] !== 'NO DATA') {
			let cData = []
			for (let i = 0; i < chartData.length; i++) {
				if (i > 0 && i < chartData.length) {
					cData.push(chartData[i])
					// chartData[i][0] - 국가코드 2글자
					// chartData[i][1] - 전송량(트래픽)
				}
			}
			setCountryTraffic(cData)
		}
	}, [chartData])

	/* SAMPLE DATA */
	// let chartData = [
	// 	['country', 'traffic'],
	// 	['대한민국(KR)', 123.1],
	// 	['미국(US)', 104.3],
	// 	['아시아(AP)', 132.5],
	// 	['싱가포르(SG)', 45.7],
	// 	['영국(UK)', 12.3],
	// ]

	return (
		<>
			{/* {data().length > 1 && chartData[1][0] !== 'NO DATA' ? ( */}
			{data().length > 1 ? (
				<div className={style.pie_container}>
					<Chart
						className={style.chart_style}
						chartType="PieChart"
						loader={<ChartLoading />}
						// height={'200px'}
						data={chartData}
						/* OPTIONS */
						options={{
							// title: 'Current Traffic Usage',
							width: '100%',
							height: 320,
							// chartArea: { width: '100%', height: '30%' },
							pieHole: 0.4,
							/* CHART LEGEND */
							legend: { position: 'labeled', alignment: 'center' },
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

							/* COLOR SETTING - mySilkroadStat.module.scss - nth-of-type() 와 일치시키기 */
							slices: {
								0: { color: '#39b3e4' },
								1: { color: '#ffc31d' },
								2: { color: '#58de6f' },
								3: { color: '#f1519b' },
								4: { color: '#b70f0f' },
								5: { color: '#752ab8' },
								6: { color: '#ff8827' },
								7: { color: '#11a6b1' },
								8: { color: '#203ec2' },
								9: { color: '#491209' },
								10: { color: '#1c6147' },
								11: { color: '#000000' },
								12: { color: '#ff00ea' },
								13: { color: '#bbff00' },
							},
						}}

						/* ETC */
						// rootProps={{ 'data-testid': '2' }}
					/>

					{/* 국가별 전송량(트래픽) 표시 */}
					<ul className={style.chart_label}>
						{countryTraffic.map((i) => (
							<li key={i}>
								<span className={style.chart_label_wordbreak}>{i[0]}</span>
								<span>{i[1]}</span>
							</li>
						))}
					</ul>
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
