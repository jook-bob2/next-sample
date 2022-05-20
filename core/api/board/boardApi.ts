import { noneAuthClient } from '@/core/config/axios'
import { useQuery } from 'react-query'
import { BoardListResponse, BoardListType } from './types'

const BOARD_PATH = '/board'
const GET_BOARD_LIST_PATH = `${BOARD_PATH}/list`

/*
 * 게시판 목록
 */
export async function getBoardList(request: BoardListType) {
	console.log('ddddddddddddddddd => ', request)
	return await noneAuthClient.get<BoardListResponse>(GET_BOARD_LIST_PATH, {
		params: {
			...request,
		},
	})
}

export function useBoardList(request: BoardListType) {
	return useQuery(['boardList', request], () => getBoardList(request))
}
