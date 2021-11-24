import { initialPageData } from '@/utils/pagination'
import React, { useEffect, useState } from 'react'
import { Grid, Pagination, Table } from 'semantic-ui-react'

const TYPE = {
	TABLE: 'table',
	GRID: 'grid',
}

export default function Paging({ type, pageData, onPageChange }) {
	const [attribute, setAttribute] = useState(initialPageData)
	const { colSpan, activePage, totalPages, firstCnt, lastCnt, width } = attribute

	useEffect(() => {
		if (pageData) {
			setAttribute({
				...attribute,
				...pageData,
			})
		}

		return () => {
			setAttribute(initialPageData)
		}
	}, [pageData])

	if (!type) throw new Error('Type of undefined')
	if (type !== TYPE.TABLE && type !== TYPE.GRID) throw new Error('Type is not correct')

	return (
		<>
			{type === TYPE.TABLE && (
				<Table.Footer>
					<Table.Row textAlign="center">
						<Table.HeaderCell colSpan={colSpan}>
							<Pagination
								activePage={activePage}
								totalPages={totalPages}
								onPageChange={onPageChange}
								firstItem={activePage > firstCnt ? undefined : null}
								prevItem={activePage > 1 ? undefined : null}
								nextItem={activePage < totalPages ? undefined : null}
								lastItem={totalPages - activePage > lastCnt ? undefined : null}
							/>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
			)}
			{type === TYPE.GRID && (
				<Grid.Footer>
					<Grid.Row textAlign="center">
						<Grid.Column width={width}>
							<Pagination
								activePage={activePage}
								totalPages={totalPages}
								onPageChange={onPageChange}
								firstItem={activePage > firstCnt ? undefined : null}
								prevItem={activePage > 1 ? undefined : null}
								nextItem={activePage < totalPages ? undefined : null}
								lastItem={totalPages - activePage > lastCnt ? undefined : null}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid.Footer>
			)}
		</>
	)
}
