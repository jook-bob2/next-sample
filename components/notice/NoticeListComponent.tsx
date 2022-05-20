import React from 'react'
import NoticeList from './list/NoticeList'

export default function NoticeListComponent(props) {
	console.log('props => ', props)
	return (
		<section>
			<NoticeList />
		</section>
	)
}
