import React from 'react'
import { Animation, EventTracker, Palette } from '@devexpress/dx-react-chart'
import { Chart, PieSeries } from '@devexpress/dx-react-chart-bootstrap4'

import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css'
import style from '@styles/mySilkroad/mySilkroadbasic/mySilkroadMonitoring.module.scss'

export default function PieChart({ chartData }) {
	const customPalette = ['#4b3f8f', '#f1fbff']
	if (chartData.length > 1) {
		return (
			<Chart className={style.chart_height} data={chartData} palette={customPalette} height="130">
				<Palette scheme={customPalette} />
				<PieSeries valueField="valueField" argumentField="argumentField"></PieSeries>
				<Animation />
				<EventTracker />
			</Chart>
		)
	}
}
