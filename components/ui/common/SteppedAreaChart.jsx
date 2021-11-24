import React from 'react'
import { Chart } from 'react-google-charts'
import { Icon } from 'semantic-ui-react'
import style from '@styles/mySilkroad/mySilkroadbasic/mySilkroadMonitoring.module.scss'
import { useTranslation } from 'react-i18next'

export default function SteppedAreaChart({ chartData, trafficUnits }) {
	const { t } = useTranslation()

	return (
		<>
			{/* {data().length > 2 ? ( */}
			{chartData.length > 2 ? (
				<Chart
					className={style.item_contents}
					width={'650px'}
					height={'300px'}
					chartType="SteppedAreaChart"
					loader={<div>Loading Chart</div>}
					data={chartData}
					/* SAMPLE DATA FORMAT */
					// data={[
					// 	['argumentField', 'valueField'],
					// 	['16:00', 20],
					// 	['16:05', 21],
					// 	['16:10', 25],
					// 	['16:15', 30],
					// 	['16:20', 20],
					// 	['16:25', 10],
					// 	['16:30', 15],
					// 	['16:35', 20],
					// 	['16:40', 15],
					// 	['16:45', 10],
					// 	['16:50', 30],
					// 	['16:55', 20],
					// 	['16:60', 25],
					// ]}
					options={{
						// title: "The decline of 'The 39 Steps'",
						vAxis: {
							title: trafficUnits,
							direction: 1, // 아래에서 위로 그리기. 뒤집으려면 -1
							// titleTextStyle: {
							// 	color: 'black',
							// 	fontSize: 12,
							// 	bold: true,
							// 	italic: true,
							// },
						},
						hAxis: {
							// showTextEvery: 1, // 5분단위로 끊기
							// showTextEvery: 12, // 1시간씩 끊기
							// showTextEvery: 24, // 2시간씩 끊기
							showTextEvery: 36, // 3시간씩 끊기
						},
						backgroundColor: 'transparent',
						colors: ['#4b3f8f'],
						// colors: ['#4b3f8f', '#33ff99', '#ff00ff', '#bb66aa'],
						legend: { position: 'bottom' },
						isStacked: false,
					}}
					// rootProps={{ 'data-testid': '1' }}
				/>
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
