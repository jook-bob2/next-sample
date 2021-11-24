import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

export default function AuthContainer({ children }) {
	const [cookies] = useCookies()
	const router = useRouter()

	useEffect(() => {
		if (!cookies.LOGIN_INFO) {
			router.replace('/')
		}
	}, [])

	return <>{children}</>
}
