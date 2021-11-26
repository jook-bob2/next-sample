import React from 'react'
import Link from 'next/link'
import { useHistoryPath } from '@/core/store/common/providers/PathHistoryProvider'
import MyAssetStatusNotLinked from './notLinked/MyAssetStatusNotLinked'
import MyAssetStatusLinked from './linked/MyAssetStatusLinked'

export default function MyAssetStatus() {
	const { state: history } = useHistoryPath()
	return (
		<>
			<header>
				<Link href={{ pathname: history.prevPath ? history.prevPath : '/' }}>
					<a>Go Dashboard</a>
				</Link>
				<h1>자산 현황</h1>
			</header>
			{/* 미연동 시 노출 */}
			<MyAssetStatusNotLinked />
			{/* 연동 완료 시 노출 */}
			<MyAssetStatusLinked />
		</>
	)
}
