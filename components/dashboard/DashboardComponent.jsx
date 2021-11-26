import React from 'react'
import DashboardMarketTrend from './marketTrend/DashboardMarketTrend'
import DashboardTodaysCommon from './todaysCommon/DashboardTodaysCommon'
import DashboardTodaysPowerPlant from './todaysPowerPlant/DashboardTodaysPowerPlant'

export default function DashboardComponent() {
	return (
		<main>
			<DashboardTodaysCommon />
			<DashboardTodaysPowerPlant />
			<DashboardMarketTrend />
		</main>
	)
}
