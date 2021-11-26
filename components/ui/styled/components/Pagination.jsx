import styled from 'styled-components'
import Prev from '@/public/static/icon/paging_prev.svg'
import Next from '@/public/static/icon/paging_next.svg'
import { useMemo } from 'react'

const Paging = styled.ul`
	/* transition: all 0.3s; */
	width: auto;
	height: auto;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-top: 70px;
	li {
		border: 1px solid #ccc;
		& ~ li {
			border-left: none;
		}
		a {
			width: 30px;
			height: 30px;
			font-size: 12px;
			line-height: 30px;
			text-align: center;
			color: #2e2e2e;
			background: #fff;
			transition: 0.2s;
			svg {
				transition: 0.2s;
			}
		}
		&.active,
		&:hover,
		&:active {
			a {
				background: #4b3f8f;
				color: #fff;
				svg {
					fill: #fff;
				}
			}
		}
	}
`

function PageListComponent({ countArr, activePage, handleClickPageChange }) {
	const firstBottomNum = activePage - (activePage % 10)
	const lastBottomNum = activePage - (activePage % 10) + 10
	return countArr.slice(firstBottomNum, lastBottomNum).map((value, index) => (
		<li key={index} className={activePage === value ? 'active' : ''}>
			<a href="#" onClick={(e) => handleClickPageChange(e, value)}>
				{value + 1}
			</a>
		</li>
	))
}

function Pagination({ totalPages, activePage, onPageChange, options }) {
	const countArr = useMemo(() => setCountArr(), [totalPages])

	function setCountArr() {
		const array = new Array()
		if (totalPages) {
			for (let i = 0; i < totalPages; i++) {
				array.push(i)
			}
		}
		return array
	}

	function handleClickPageChange(e, page) {
		e.preventDefault()
		if (page > -1 && page < totalPages && page !== activePage) onPageChange(page, options)
	}
	return (
		<>
			{totalPages > 0 && (
				<Paging>
					<li>
						<a href="#" onClick={(e) => handleClickPageChange(e, activePage - 1)}>
							<Prev />
						</a>
					</li>
					<PageListComponent
						totalPages={totalPages}
						countArr={countArr}
						activePage={activePage}
						handleClickPageChange={handleClickPageChange}
					/>
					<li>
						<a href="#" onClick={(e) => handleClickPageChange(e, activePage + 1)}>
							<Next />
						</a>
					</li>
				</Paging>
			)}
		</>
	)
}

export default Pagination
