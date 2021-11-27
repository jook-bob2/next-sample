import React from 'react'
import { useHistoryPath } from '@/core/store/common/providers/PathHistoryProvider'
import PowerPlantInfoNotLinked from './notLinked/PowerPlantInfoNotLinked'
import PowerPlantInfoLinked from './linked/PowerPlantInfoLinked'
import HeaderRoute from '@/components/ui/styled/components/HeaderRoute'
import { useRouter } from 'next/router'

export default function PowerPlantInfo() {
	const { state: history } = useHistoryPath()
	const { push } = useRouter()

	function handleClickBack() {
		history.prevPath ? push(history.prevPath) : push('/')
	}
	return (
		<>
			<HeaderRoute onClick={() => handleClickBack()} title="발전소 정보" />
			{/* 미연동 시 노출 */}
			<PowerPlantInfoNotLinked />
			{/* 연동 완료 시 노출 */}
			<PowerPlantInfoLinked />
		</>
	)
}
