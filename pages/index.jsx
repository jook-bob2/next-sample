import React from 'react'
import Meta from '@/components/ui/common/Meta'
import DashboardComponent from '@/components/dashboard/DashboardComponent'

/*
 * 메인 페이지 프로그램
 */
export default function Dashboard() {
	return (
		<>
			<Meta />
			<DashboardComponent />
		</>
	)
}

// export const getServerSideProps = async ({ req }) => {
// 	const result = { props: {} }
// 	setSsrHeader(req.headers)

// 	try {
// 		const productResponse = await getTestApi({ data })
// 		result.props.productListData = productResponse
// 	} catch (error) {
// 		result.props.productListData = error
// 	}

// 	return result
// }
