import Layout from '@/components/ui/layouts/Layout'
import { storageUtil } from '@/utils/storageUtil'
import { AlertModal, ConfirmModal } from '@comp/ui/styled/components/Modal'
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { NextComponentType, NextPageContext } from 'next'

export default function AppContainer({
	Component,
	pageProps,
}: {
	Component: NextComponentType<NextPageContext>
	pageProps: any
}) {
	/*
	 * Local storage 시간 측정 후 삭제
	 */
	useEffect(() => {
		if (localStorage.length > 0) {
			for (const key of Object.keys(localStorage)) {
				if (isJsonString(localStorage[key])) {
					const obj = JSON.parse(localStorage[key])
					if (obj?.expiration) {
						if (new Date() > new Date(obj.expiration)) {
							storageUtil.remove(key)
						}
					} else {
						storageUtil.remove(key)
					}
				} else {
					storageUtil.remove(key)
				}
			}
		}
	}, [])

	/*
	 * JSON 여부 체크
	 */
	function isJsonString(value) {
		try {
			const json = JSON.parse(value)
			return typeof json === 'object'
		} catch (e) {
			return false
		}
	}

	return (
		<>
			<AlertModal />
			<ConfirmModal />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
