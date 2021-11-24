import React, { useMemo } from 'react'
import {
	Chart,
	// Title, // 타이틀 필요할 때 사용
	AreaSeries,
	// Legend, // 사용자 구분 필요할 때 사용
	Tooltip,
	ArgumentAxis, // 가로축(날짜)
	ValueAxis, // 세로축(트래픽)
} from '@devexpress/dx-react-chart-bootstrap4'
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css'
import { Icon } from 'semantic-ui-react'
import style from '@styles/mySilkroad/mySilkroadbasic/mySilkroadMonitoring.module.scss'
import { EventTracker } from '@devexpress/dx-react-chart'
import { curveCatmullRom, area } from 'd3-shape'
import { useTranslation } from 'react-i18next'

const Area = props => (
	<AreaSeries.Path
		{...props}
		path={area()
			.x(({ arg }) => arg)
			.y1(({ val }) => val)
			.y0(({ startVal }) => startVal)
			.curve(curveCatmullRom)}
	/>
)
// const chartTitle = 'Monthly Trend'

export default function SplineAreaChart({ chartData }) {
	const { t } = useTranslation()
	const data = useMemo(() => getChartData, [chartData])

	function getChartData() {
		if (chartData.length > 1) {
			return chartData
		}

		return []
	}

	return (
		<>
			{data().length > 0 ? (
				<div className={style.item_contents}>
					{/* <label className={style.chart_units}>{chartData[0].units}</label>
					CSS에 추가
					.chart_units {
						font-size: 8pt;
						padding-left: 10px;
					}
					*/}
					<label>{chartData[0].units}</label>
					<Chart data={data()} height="200">
						<ArgumentAxis />
						<ValueAxis />
						<AreaSeries
							valueField="valueField"
							argumentField="argumentField"
							seriesComponent={Area}
							color="#3619c78f"
						/>
						{/* <AreaSeries
							color="#2b65f0"
							name="valueField"
							valueField="valueField"
							argumentField="argumentField"
							seriesComponent={Area}
						/>
						<AreaSeries
							color="rgb(50,190,150)"
							name="valueField"
							valueField="valueField"
							argumentField="argumentField"
							seriesComponent={Area}
						/> */}
						{/* Todo: 애니메이션 오류로인한 주석 처리 */}
						{/* <Animation /> */}
						{/* 바텀 데이터 필요시 주석 해제 */}
						{/* <Legend position="bottom" /> */}
						{/* 헤더 타이틀 필요시 주석 해제*/}
						{/* <Title text="MiB" /> */}
						<EventTracker />
						<Tooltip />
					</Chart>
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
	// return (
	// 	<div className={style.item_contents}>
	// 		<div className={style.error_wrap}>
	// 			<div className={style.error_icon}>
	// 				<Icon name="warning circle" color="orange"></Icon>
	// 				{t('error.nodata')}
	// 			</div>
	// 		</div>
	// 	</div>
	// )
}
