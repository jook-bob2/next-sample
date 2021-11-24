import React from 'react'
import Footer from '@comp/ui/layouts/Footer'
import Header from '@comp/ui/layouts/Header'

export default function Layout({ children }) {
	return (
		<div className="wrapper">
			<Header />
			<main className={'main'}>{children}</main>
			<Footer />
		</div>
	)
}
