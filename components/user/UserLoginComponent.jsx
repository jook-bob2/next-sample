import React, { useRef, useState } from 'react'
import styles from '@/styles/user/login/userLogin.module.scss'
import { POST_USER_LOGIN } from '@/core/store/api/create/userCreate'
import { useAlertContext } from '@/core/store/common/providers/AlertProvider'
import { useUser } from '@/core/store/common/providers/UserProvider'
import { useRouter } from 'next/router'
import { useUserContext } from '@/core/store/api/providers/UserApiProvider'
import { useHistoryPath } from '@/core/store/common/providers/PathHistoryProvider'

export default function UserLoginComponent() {
	const { $alert } = useAlertContext()
	const { dispatch } = useUserContext()
	const router = useRouter()
	const {
		state: { prevPath },
	} = useHistoryPath()
	const { onLoginSuccess } = useUser()

	// const [, setCookie] = useCookies(['LOGIN_INFO'])
	const [loginData, setLoginData] = useState({
		email: '',
		passwd: '',
	})
	const emailRef = useRef()
	const pwRef = useRef()

	/*
	 * 아이디/비밀번호 검증
	 */
	function validationChk() {
		const { email, passwd } = loginData
		if (!email) {
			$alert('아이디 입력 오류').then(() => {
				emailRef.current.focus()
			})
			return false
		}
		if (!passwd) {
			$alert('비밀번호 입력 오류').then(() => {
				pwRef.current.focus()
			})
			return false
		}
		return true
	}

	/*
	 * 로그인 처리
	 */
	async function handleClickLogin() {
		if (validationChk()) {
			try {
				const response = await POST_USER_LOGIN(dispatch, loginData)
				const resData = response.data
				if (resData.success && resData?.data?.accessToken) {
					const data = response.data.data
					onLoginSuccess(data)
					!prevPath ? router.replace('/') : router.replace(prevPath)
				} else if (resData?.code === 'ESVC003') $alert(resData.msg)
				else if (resData?.code === 'ESVC022') $alert(resData.msg)
				// else if (resData?.data?.id === null) $alert(t('userLogin.expired'))
			} catch (error) {
				if (error.data) {
					const { code, msg } = error.data
					console.log(`${code} : ${msg}`)
				} else {
					console.error(error)
				}
			}
		}
	}

	/*
	 * 로그인 데이터 변경
	 */
	function changeUserData(e) {
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value,
		})
	}

	function handleKeypressLogin(e) {
		if (e.key === 'Enter') {
			handleClickLogin()
		}
	}

	return (
		<section className={styles.join_wrap}>
			<header>
				<h1 className={styles.join_title}>로그인 컴포넌트</h1>
			</header>
			<article className={styles.join_input}>
				<div className={styles.input_item}>
					<input
						type="text"
						name="email"
						value={loginData.email}
						onChange={changeUserData}
						onKeyPress={handleKeypressLogin}
						ref={emailRef}
						autoFocus
					/>
				</div>
				<div className={styles.input_item}>
					<input
						type="password"
						name="passwd"
						value={loginData.passwd}
						onChange={changeUserData}
						onKeyPress={handleKeypressLogin}
						ref={pwRef}
					/>
				</div>
				<button className={styles.submit} onClick={() => handleClickLogin()}>
					<span>{'로그인'}</span>
				</button>
			</article>
		</section>
	)
}
