import React from 'react'
import TodaysExpectedReturn from './expectedReturn/TodaysExpectedReturn'
import TodaysInverterStatus from './inverterStatus/TodaysInverterStatus'
import TodaysPowerTime from './powerTime/TodaysPowerTime'
import TodaysWeather from './weather/TodaysWeather'

export default function TodaysByPowerPlant() {
	return (
		<section>
			<TodaysPowerTime />
			<TodaysExpectedReturn />
			<TodaysWeather />
			<TodaysInverterStatus />
		</section>
	)
}
