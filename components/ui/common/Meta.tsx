import Head from 'next/head'
import React from 'react'

interface PropsType {
	title: string
	desc: string
}

export default function Meta({ title, desc }: PropsType) {
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
