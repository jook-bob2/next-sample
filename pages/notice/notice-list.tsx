import NoticeListComponent from '@/components/notice/NoticeListComponent'
import Meta from '@/components/ui/common/Meta'
import { setSsrHeader } from '@/core/config/cookie'
import { GetServerSideProps } from 'next'
import React from 'react'
import { QueryClient } from 'react-query'
import { getBoardList, useBoardList } from '@/core/api/board/boardApi'
import { BoardListResponse } from '@/core/api/board/types'

interface Props {
	boardListResponse: BoardListResponse
}

export default function NoticeList({ boardListResponse }: Props) {
	// console.log(boardListResponse.data.content)
	const { isLoading, isError, data } = useBoardList({
		searchString: '',
		boardCd: '',
		page: 0,
		size: 10,
		sort: 'regDate,desc',
	})

	console.log(data)

	return (
		<>
			<Meta />
			<NoticeListComponent />
		</>
	)
}

// export async function getStaticProps() {
// 	const queryClient = new QueryClient()

// 	await queryClient.prefetchQuery(['posts', 10], () => fetchPosts(10))

// 	return {
// 	  props: {
// 		dehydratedState: dehydrate(queryClient),
// 	  },
// 	}
//   }

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
	const result = {
		props: {
			boardListResponse: {} as BoardListResponse,
		},
	}

	const { searchString, boardCd } = query
	setSsrHeader(req.headers)

	const queryClient = new QueryClient()
	const params = {
		searchString: searchString ? searchString : '',
		boardCd: boardCd ? boardCd : '',
		page: 0,
		size: 10,
		sort: 'regDate,desc',
	}

	try {
		const boardListResponse = await getBoardList(params)
		console.log('aaaaaaaaaaaaaaaa => ', boardListResponse.data)
		result.props.boardListResponse = boardListResponse.data
	} catch (error) {
		result.props.boardListResponse = error
	}

	console.log(queryClient)

	return result
}
