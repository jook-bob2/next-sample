import React from 'react'
import Meta from '@/components/ui/common/Meta'
import MainComponent from '@/components/main/MainComponent'
import { dehydrate, QueryClient } from 'react-query'

/*
 * 메인 페이지 프로그램
 */
export default function Main() {
	return (
		<>
			<Meta />
			<MainComponent />
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

// export async function getStaticProps() {
// 	const queryClient = new QueryClient()

// 	await queryClient.prefetchQuery(['posts', 10], () => fetchPosts(10))

// 	return {
// 	  props: {
// 		dehydratedState: dehydrate(queryClient),
// 	  },
// 	}
//   }
