import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { useAlert } from '@/core/store/common/providers/AlertProvider'
import { validateTimeAccessToken } from '@/core/config/validToken'
import { useUser } from '@store/common/providers/UserProvider'
import { EventBus } from '@/utils/eventBus'
import { CNProps } from '@/core/store/common/state/types'

export default function AuthContainer({ children }: CNProps) {
	const [cookies] = useCookies()
	const { push } = useRouter()
	const { $alert } = useAlert()
	const { onLogoutSuccess, getToken } = useUser()

	useEffect(() => {
		if (cookies?.LOGIN_INFO) {
			const eventBus = new EventBus()
			const { accessToken, refreshToken } = getToken()
			if (validateTimeAccessToken(accessToken) && validateTimeAccessToken(refreshToken)) {
				eventBus.$emit('fetchEvent', {
					authentication: true,
					accessToken,
					refreshToken,
				})
			}
		} else {
			if (!cookies?.LOGIN_INFO) {
				setTimeout(() => {
					$alert('로그인 후 이용해주세요.').then(() => {
						push('/user/user-login')
					})
				}, 0)
			} else {
				const { accessToken, refreshToken } = getToken()
				if (!validateTimeAccessToken(accessToken) || !validateTimeAccessToken(refreshToken)) {
					onLogoutSuccess()
					setTimeout(() => {
						$alert('로그인 후 이용해주세요.').then(() => {
							push('/user/user-login')
						})
					}, 0)
				}
			}
		}
	}, [])

	return <>{children}</>
}
