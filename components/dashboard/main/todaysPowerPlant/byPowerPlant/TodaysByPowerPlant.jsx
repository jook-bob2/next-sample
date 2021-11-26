import React from 'react'
import TodaysExpectedReturn from './expectedReturn/TodaysExpectedReturn'
import TodaysInverterStatus from './inverterStatus/TodaysInverterStatus'
import TodaysPowerTime from './powerTime/TodaysPowerTime'
import TodaysWeather from './weather/TodaysWeather'

export default function TodaysByPowerPlant() {
	return (
		<div>
			<TodaysPowerTime />
			<TodaysExpectedReturn />
			<TodaysWeather />
			<TodaysInverterStatus />
		</div>
	)
}
