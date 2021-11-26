import React from 'react'
import DashboardMarketTrend from './main/marketTrend/DashboardMarketTrend'
import DashboardQuickMenu from './main/quickMenu/DashboardQuickMenu'
import DashboardTodaysCommon from './main/todaysCommon/DashboardTodaysCommon'
import DashboardTodaysPowerPlant from './main/todaysPowerPlant/DashboardTodaysPowerPlant'

export default function DashboardMainComponent() {
	return (
		<section>
			<DashboardTodaysCommon />
			<DashboardTodaysPowerPlant />
			<DashboardMarketTrend />
			<DashboardQuickMenu />
		</section>
	)
}
