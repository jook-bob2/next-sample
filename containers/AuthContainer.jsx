import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { useAlertContext } from '@/core/store/common/providers/AlertProvider'

export default function AuthContainer({ children }) {
	const [cookies] = useCookies()
	const { replace } = useRouter()
	const { $alert } = useAlertContext()

	useEffect(() => {
		if (!cookies.LOGIN_INFO) {
			setTimeout(() => {
				$alert('권한이 없습니다.').then(() => {
					replace('/')
				})
			}, 0)
		}
	}, [])

	return <>{children}</>
}
