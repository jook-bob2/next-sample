// 페이지 기본 데이터
export const initialPageData = {
	page: 0,
	size: 10,
	totalPages: 0,
	sort: 'regDate,desc',
}

// 내림차순 페이지 계산
export const pageCalcDesc = ({ totalElements, index, activePage, pageSize }) => {
	return totalElements - index - (activePage - 1) * pageSize
}

// 오름차순 페이지 계산
export const pageCalcAsc = ({ activePage, index, pageSize }) => {
	return (activePage - 1) * pageSize + index + 1
}
