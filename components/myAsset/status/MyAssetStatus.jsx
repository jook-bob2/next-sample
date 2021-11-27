import React from 'react'
import { useHistoryPath } from '@/core/store/common/providers/PathHistoryProvider'
import MyAssetStatusNotLinked from './notLinked/MyAssetStatusNotLinked'
import MyAssetStatusLinked from './linked/MyAssetStatusLinked'
import HeaderRoute from '@/components/ui/styled/components/HeaderRoute'
import { useRouter } from 'next/router'

export default function MyAssetStatus() {
	const { state: history } = useHistoryPath()
	const { push } = useRouter()

	function handleClickBack() {
		history.prevPath ? push(history.prevPath) : push('/')
	}
	return (
		<>
			<HeaderRoute onClick={() => handleClickBack()} title="자산 현황" />
			{/* 미연동 시 노출 */}
			<MyAssetStatusNotLinked />
			{/* 연동 완료 시 노출 */}
			<MyAssetStatusLinked />
		</>
	)
}
