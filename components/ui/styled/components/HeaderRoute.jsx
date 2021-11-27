import React from 'react'

export default function HeaderRoute({ onClick = () => {}, title = '' }) {
	return (
		<header>
			<h1 onClick={onClick} style={{ cursor: 'pointer' }}>
				{'<<'}
				{title}
			</h1>
		</header>
	)
}
