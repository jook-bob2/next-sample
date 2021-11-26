import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import style from '@styles/common/error.module.scss'
import ErrorIcon from '@/public/static/images/error/error.svg'
import { useLanguageContext } from '@/core/store/common/providers/LangProvider'
import { getLocale } from '@/lang/i18n'
import { resource } from '@/lang/resource'
import { UserStateContext } from '@/core/store/common/create'
import { constants } from '@store/common/constants'
import { userInitialState } from '@/core/store/common/initialState'
import { useCookies } from 'react-cookie'
import { removeUserCookie } from '@/core/config/cookie'

const { SET_INIT_USER } = constants
export default function Error({ error }) {
	const router = useRouter()
	const { t } = useTranslation()
	const { useLanguage } = useLanguageContext()
	const { userDispatch } = useContext(UserStateContext)
	const [, , removeCookie] = useCookies()

	useEffect(() => {
		if (error) {
			const { code } = error
			if (code === 401 || code === 403 || code === 'ESVC005') {
				// Forbidden or Unauthorization or 토큰 정보가 없는 경우
				// user state 초기화
				userDispatch({
					type: SET_INIT_USER,
					payload: userInitialState,
				})
				removeUserCookie(removeCookie)
				router.push('/user/user-login')
			}
			if (code === 412) {
				// 헤더에 언어코드가 존재하지 않는 경우 갱신
				languageSetting()
					.then((res) => {
						if (res) router.reload()
					})
					.catch((err) => {
						console.error(err)
					})
			}
		}
	}, [])

	function languageSetting() {
		const lang = getLocale()
		return new Promise((resolve, reject) => {
			Object.values(resource).forEach((l) => {
				if (l.value === lang) useLanguage({ lang, langText: l.text })
			})

			lang ? resolve(true) : reject(false)
		})
	}

	return (
		<div className={style.wrap}>
			<ErrorIcon className={style.error_icon} />
			<h1 className={style.title}>{t('error.occured')}</h1>
			{error && <h1 className={style.code}>Code: {error.code}</h1>}
			<p className={style.desc2}>
				죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다. 나중에 다시 시도해주세요.
				<br />이 리소스의 시스템 관리자라면 오류 로그에서 자세한 내용을 확인해야 합니다.
			</p>
			<p className={style.desc}>
				An error coourred. Sorry, the page you are looking for is currently unavailable. Please try again later.
				<br />
				If you are the system administrator of this resource then you should check the error log for details.
			</p>
			<Link href={{ pathname: '/' }}>
				<button className={style.back}>
					<span>{t('error.home')}</span>
				</button>
			</Link>
			{/* {error && (
				<ul>
					<li className={styles.error_li_mg}>Code: {error.code}</li>
					<li>Message: {error.msg}</li>
				</ul>
			)} */}
		</div>
	)
}
