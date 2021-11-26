import React from 'react'
import Meta from '@/components/ui/common/Meta'
import DashboardMainComponent from '@/components/dashboard/DashboardMainComponent'

/*
 * 메인 페이지 프로그램
 */
export default function Dashboard() {
	return (
		<>
			<Meta />
			<DashboardMainComponent />
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
