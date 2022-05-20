import { ResponseApi } from '@/core/store/common/state/types'

export interface BoardListType {
	searchString?: string | string[]
	boardCd?: string | string[]
	page?: number
	size?: number
	totalPages?: number
	sort?: string
}

export interface BoardListResponse extends ResponseApi {
	data: {
		content: {
			content: string
			subject: string
			dtlCd: string
			dtlCdName: string
			id: number
			regDate: Date
			upperDtlCd: string
		}[]
	}
}
