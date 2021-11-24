import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
	const { t } = useTranslation()
	return (
		<footer className="footer">
			<div className="container footer-container">
				<section className="footer-t">
					<ul>
						<li>
							<Link href={{ pathname: '/' }}>
								<img src="/static/images/footer_logo.svg" alt="silkroad footer logo" className="logo" />
							</Link>
						</li>
						<li>
							<a href="https://www.starlabs.co.kr/" target="_ablank">
								{t('footer.footerIntro')}
							</a>
						</li>
						<li>
							<Link href={{ pathname: '/terms/privacy-policy' }}>
								<a>{t('footer.footerPrivacy.title')}</a>
							</Link>
						</li>
						<li>
							<Link href={{ pathname: '/terms/terms-use' }}>
								<a>{t('footer.footerTerms.title')}</a>
							</Link>
						</li>
						<li>
							<Link href={{ pathname: '/terms/hosting-terms' }}>
								<a>{t('footer.footerTermsHosting.title')}</a>
							</Link>
						</li>
					</ul>
				</section>
				<section className="footer-b">
					<ul>
						<li>{t('footer.footerCompany')}</li>
						<li>
							{t('footer.footerCeo0')} : {t('footer.footerCeo1')}
						</li>
						<li>
							<address>{t('footer.footerAddr')}</address>
						</li>
						<li>
							{t('footer.footerSaupno0')} : {t('footer.footerSaupno1')}
						</li>
						<li>
							{t('footer.footerEcommerce0')} : {t('footer.footerEcommerce1')}
							<a
								className="chkbusinessinfo"
								href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=5148800884"
								target="_blank"
								rel="noreferrer"
								title="사업자 정보 확인 페이지 바로가기">
								{t('footer.footerEcommerce2')}
							</a>
						</li>
						<li>
							{t('footer.footerCall0')} : {t('footer.footerCall1')}
						</li>
					</ul>
					<p className="copyright">Copyright 2021 ⓒ STARLABS Corp. All Rights Reserved.</p>
				</section>
			</div>
		</footer>
	)
}
