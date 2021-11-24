import React, { useEffect } from 'react'
import Meta from '@/components/ui/common/Meta'
import TestComponent from '@/components/test/TestComponent'
import { useRouter } from 'next/router'

export default function Test() {
	const { push } = useRouter()

	useEffect(() => {
		if (process.env.NEXT_PUBLIC_ENV !== 'local') push('/404')
	}, [])

	return (
		<>
			<Meta title="테스트" desc="테스트" />
			<TestComponent />
		</>
	)
}
