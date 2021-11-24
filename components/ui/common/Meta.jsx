import Head from 'next/head'
import React from 'react'

export default function Meta({ title, desc }) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={desc} />
		</Head>
	)
}

Meta.defaultProps = {
	title: '샘플',
	desc: '샘플 넥스트',
}
