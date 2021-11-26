import 'semantic-ui-css/semantic.min.css'
import '@styles/globals.scss'
import '@styles/reset.scss'
import '@styles/layouts/header.scss'
import '@styles/layouts/footer.scss'
import AppContainer from '@/containers/AppContainer'
import Store from '@store/index'
import PropTypes from 'prop-types'
import { CookiesProvider } from 'react-cookie'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
	// 서비스 워커 설정
	useEffect(() => {
		if (
			(process.env.NEXT_PUBLIC_ENV === 'production' || process.env.NEXT_PUBLIC_ENV === 'development') &&
			'serviceWorker' in navigator
		) {
			window.addEventListener('load', function () {
				navigator.serviceWorker.register('/static/sw.js').then(
					(registration) => {
						console.info('Service Worker registration successful with scope: ', registration.scope)
					},
					(err) => {
						console.info('Service Worker registration failed: ', err)
					},
				)
			})
		}
	}, [])

	return (
		<CookiesProvider cookie={pageProps.cookie}>
			<Store>
				<AppContainer Component={{ Page: Component, pageProps }} />
			</Store>
		</CookiesProvider>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
}
