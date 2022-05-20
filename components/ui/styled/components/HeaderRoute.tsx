import React from 'react'

interface IProps {
	onClick: () => void
	title: string
}

export default function HeaderRoute({ onClick, title }: IProps) {
	return (
		<header>
			<h1 onClick={onClick} style={{ cursor: 'pointer' }}>
				{'<<'}
				{title}
			</h1>
		</header>
	)
}
