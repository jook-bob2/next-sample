import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import style from '@styles/common/error.module.scss'
import Error404 from '@/public/static/images/error/404.svg'

export default function ErrorPage() {
	const { t } = useTranslation()
	return (
		<div className={style.wrap}>
			<Error404 className={style.error404} />
			<h1 className={style.title}>{t('error.connection')}</h1>
			<p className={style.desc}>
				해당 페이지가 삭제되었거나, 주소가 변경되어 표시할 수 없습니다.
				<br />
				The page you are looking for might have been removed or had its address changed.
			</p>
			<Link href={{ pathname: '/' }}>
				<button className={style.back}>
					<span>{t('error.home')}</span>
				</button>
			</Link>
		</div>
	)
}
