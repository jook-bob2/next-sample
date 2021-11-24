import React from 'react'
import style from '@styles/common/terms.module.scss'
import { useTranslation } from 'react-i18next'
export default function TermsOfService() {
	const { t } = useTranslation()
	return (
		<>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article1.title`)}</p>
				<ul className={style.item_desc}>
					<li>{t(`footer.footerTerms.container.Article1.desc`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article2.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t(`footer.footerTerms.container.Article2.desc1`)}</li>
					<li>{t(`footer.footerTerms.container.Article2.desc2`)}</li>
					<li>{t(`footer.footerTerms.container.Article2.desc3`)}</li>
					<li>{t(`footer.footerTerms.container.Article2.desc4`)}</li>
					<li>{t(`footer.footerTerms.container.Article2.desc5`)}</li>
					<li>{t(`footer.footerTerms.container.Article2.desc6`)}</li>
					<li>{t(`footer.footerTerms.container.Article2.desc7`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article3.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t(`footer.footerTerms.container.Article3.desc1`)}</li>
					<li>{t(`footer.footerTerms.container.Article3.desc2`)}</li>
					<li>{t(`footer.footerTerms.container.Article3.desc3`)}</li>
					<li>{t(`footer.footerTerms.container.Article3.desc4`)}</li>
					<li>{t(`footer.footerTerms.container.Article3.desc5`)}</li>
					<li>{t(`footer.footerTerms.container.Article3.desc6`)}</li>
					<li>{t(`footer.footerTerms.container.Article3.desc7`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article4.title`)}</p>
				<ul className={style.item_desc}>
					<li>{t(`footer.footerTerms.container.Article4.desc1`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article5.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>
						{t(`footer.footerTerms.container.Article5.desc1.desc`)}
						<ul className={style.inner_numbering}>
							<li>{t(`footer.footerTerms.container.Article5.desc1.numbering1`)}</li>
							<li>{t(`footer.footerTerms.container.Article5.desc1.numbering2`)}</li>
							<li>{t(`footer.footerTerms.container.Article5.desc1.numbering3`)}</li>
							<li>{t(`footer.footerTerms.container.Article5.desc1.numbering4`)}</li>
						</ul>
					</li>
					<li>{t(`footer.footerTerms.container.Article5.desc2`)}</li>
					<li>
						{t(`footer.footerTerms.container.Article5.desc3.desc`)}
						<ul className={style.inner_numbering}>
							<li>{t(`footer.footerTerms.container.Article5.desc3.numbering1`)}</li>
							<li>{t(`footer.footerTerms.container.Article5.desc3.numbering2`)}</li>
							<li>{t(`footer.footerTerms.container.Article5.desc3.numbering3`)}</li>
							<li>{t(`footer.footerTerms.container.Article5.desc3.numbering4`)}</li>
						</ul>
					</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article6.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t(`footer.footerTerms.container.Article6.desc1`)}</li>
					<li>{t(`footer.footerTerms.container.Article6.desc2`)}</li>
					<li>{t(`footer.footerTerms.container.Article6.desc3`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article7.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t(`footer.footerTerms.container.Article7.desc1`)}</li>
					<li>{t(`footer.footerTerms.container.Article7.desc2`)}</li>
					<li>{t(`footer.footerTerms.container.Article7.desc3`)}</li>
					<li>{t(`footer.footerTerms.container.Article7.desc4`)}</li>
					<li>{t(`footer.footerTerms.container.Article7.desc5`)}</li>
					<li>{t(`footer.footerTerms.container.Article7.desc6`)}</li>
					<li>{t(`footer.footerTerms.container.Article7.desc7`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article8.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t(`footer.footerTerms.container.Article8.desc1`)}</li>
					<li>{t(`footer.footerTerms.container.Article8.desc2`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article9.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t(`footer.footerTerms.container.Article9.desc1`)}</li>
					<li>{t(`footer.footerTerms.container.Article9.desc2`)}</li>
					<li>{t(`footer.footerTerms.container.Article9.desc3`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article10.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>
						{t(`footer.footerTerms.container.Article10.desc1.desc`)}
						<ul className={style.inner_numbering}>
							<li>{t(`footer.footerTerms.container.Article10.desc1.numbering1`)}</li>
							<li>{t(`footer.footerTerms.container.Article10.desc1.numbering2`)}</li>
							<li>{t(`footer.footerTerms.container.Article10.desc1.numbering3`)}</li>
							<li>{t(`footer.footerTerms.container.Article10.desc1.numbering4`)}</li>
							<li>{t(`footer.footerTerms.container.Article10.desc1.numbering5`)}</li>
							<li>{t(`footer.footerTerms.container.Article10.desc1.numbering6`)}</li>
							<li>{t(`footer.footerTerms.container.Article10.desc1.numbering7`)}</li>
							<li>{t(`footer.footerTerms.container.Article10.desc1.numbering8`)}</li>
						</ul>
					</li>
					<li>{t(`footer.footerTerms.container.Article10.desc2`)}</li>
					<li>{t(`footer.footerTerms.container.Article10.desc3`)}</li>
					<li>{t(`footer.footerTerms.container.Article10.desc4`)}</li>
					<li>{t(`footer.footerTerms.container.Article10.desc5`)}</li>
					<li>{t(`footer.footerTerms.container.Article10.desc6`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article11.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t(`footer.footerTerms.container.Article11.desc1`)}</li>
					<li>{t(`footer.footerTerms.container.Article11.desc2`)}</li>
					<li>{t(`footer.footerTerms.container.Article11.desc3`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article12.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>
						{t(`footer.footerTerms.container.Article12.desc1.desc`)}
						<ul className={style.inner_numbering}>
							<li>{t(`footer.footerTerms.container.Article12.desc1.numbering1`)}</li>
							<li>{t(`footer.footerTerms.container.Article12.desc1.numbering2`)}</li>
							<li>{t(`footer.footerTerms.container.Article12.desc1.numbering3`)}</li>
							<li>{t(`footer.footerTerms.container.Article12.desc1.numbering4`)}</li>
							<li>{t(`footer.footerTerms.container.Article12.desc1.numbering5`)}</li>
							<li>{t(`footer.footerTerms.container.Article12.desc1.numbering6`)}</li>
							<li>{t(`footer.footerTerms.container.Article12.desc1.numbering7`)}</li>
							<li>{t(`footer.footerTerms.container.Article12.desc1.numbering8`)}</li>
							<li>{t(`footer.footerTerms.container.Article12.desc1.numbering9`)}</li>
						</ul>
					</li>
					<li>{t(`footer.footerTerms.container.Article12.desc2`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article13.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t(`footer.footerTerms.container.Article13.desc1`)}</li>
					<li>{t(`footer.footerTerms.container.Article13.desc2`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article14.title`)}</p>
				<ul className={style.item_desc}>
					<li>{t(`footer.footerTerms.container.Article14.desc1`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article15.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t(`footer.footerTerms.container.Article15.desc1`)}</li>
					<li>{t(`footer.footerTerms.container.Article15.desc2`)}</li>
					<li>{t(`footer.footerTerms.container.Article15.desc3`)}</li>
					<li>{t(`footer.footerTerms.container.Article15.desc4`)}</li>
					<li>{t(`footer.footerTerms.container.Article15.desc5`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article16.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t(`footer.footerTerms.container.Article16.desc1`)}</li>
					<li>{t(`footer.footerTerms.container.Article16.desc2`)}</li>
					<li>{t(`footer.footerTerms.container.Article16.desc3`)}</li>
					<li>{t(`footer.footerTerms.container.Article16.desc4`)}</li>
					<li>{t(`footer.footerTerms.container.Article16.desc5`)}</li>
					<li>{t(`footer.footerTerms.container.Article16.desc6`)}</li>
					<li>{t(`footer.footerTerms.container.Article16.desc7`)}</li>
					<li>{t(`footer.footerTerms.container.Article16.desc8`)}</li>
					<li>{t(`footer.footerTerms.container.Article16.desc9`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article17.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>
						{t(`footer.footerTerms.container.Article17.desc1.desc`)}
						<ul className={style.inner_numbering}>
							<li>{t(`footer.footerTerms.container.Article17.desc1.numbering1`)}</li>
							<li>{t(`footer.footerTerms.container.Article17.desc1.numbering2`)}</li>
							<li>{t(`footer.footerTerms.container.Article17.desc1.numbering3`)}</li>
							<li>{t(`footer.footerTerms.container.Article17.desc1.numbering4`)}</li>
							<li>{t(`footer.footerTerms.container.Article17.desc1.numbering5`)}</li>
							<li>{t(`footer.footerTerms.container.Article17.desc1.numbering6`)}</li>
							<li>{t(`footer.footerTerms.container.Article17.desc1.numbering7`)}</li>
							<li>{t(`footer.footerTerms.container.Article17.desc1.numbering8`)}</li>
						</ul>
					</li>
					<li>{t(`footer.footerTerms.container.Article17.desc2`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article18.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t(`footer.footerTerms.container.Article18.desc1`)}</li>
					<li>{t(`footer.footerTerms.container.Article18.desc2`)}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t(`footer.footerTerms.container.Article19.title`)}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t(`footer.footerTerms.container.Article19.desc1`)}</li>
					<li>{t(`footer.footerTerms.container.Article19.desc2`)}</li>
				</ul>
			</article>
			<p className={style.sub_title}>{t(`footer.foorerTermsofUseDate`)}</p>
		</>
	)
}
