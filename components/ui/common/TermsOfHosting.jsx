import React from 'react'
import style from '@styles/common/terms.module.scss'
import { useTranslation } from 'react-i18next'

export default function TermsOfHosting() {
	const { t } = useTranslation()
	return (
		<>
			<p className={style.sub_title}>{t('footer.footerTermsHosting.container.sub_title1')}</p>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article1.title')}</p>
				<ul className={style.item_desc}>
					<li>{t('footer.footerTermsHosting.container.Article1.desc')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article2.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>
						{t('footer.footerTermsHosting.container.Article2.numbering1')}
						<ul className={style.inner_numbering}>
							<li>{t('footer.footerTermsHosting.container.Article2.numberingSub1')}</li>
							<li>{t('footer.footerTermsHosting.container.Article2.numberingSub2')}</li>
							<li>{t('footer.footerTermsHosting.container.Article2.numberingSub3')}</li>
							<li>{t('footer.footerTermsHosting.container.Article2.numberingSub4')}</li>
							<li>{t('footer.footerTermsHosting.container.Article2.numberingSub5')}</li>
							<li>{t('footer.footerTermsHosting.container.Article2.numberingSub6')}</li>
							<li>{t('footer.footerTermsHosting.container.Article2.numberingSub7')}</li>
							<li>{t('footer.footerTermsHosting.container.Article2.numberingSub8')}</li>
						</ul>
					</li>
					<li>{t('footer.footerTermsHosting.container.Article2.numbering2')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article3.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article3.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article3.numbering2')}</li>
					<li>{t('footer.footerTermsHosting.container.Article3.numbering3')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article4.title')}</p>
				<ul className={style.item_desc}>
					<li>{t('footer.footerTermsHosting.container.Article4.desc')}</li>
				</ul>
			</article>
			<p className={style.sub_title}>{t('footer.footerTermsHosting.container.sub_title2')}</p>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article5.title')})</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article5.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article5.numbering2')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article6.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article6.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article6.numbering2')}</li>
					<li>{t('footer.footerTermsHosting.container.Article6.numbering3')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article7.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article7.numbering1')}</li>
					<li>
						{t('footer.footerTermsHosting.container.Article7.numbering2')}
						<ul className={style.inner_numbering}>
							<li>{t('footer.footerTermsHosting.container.Article7.numberingSub01')}</li>
							<li>{t('footer.footerTermsHosting.container.Article7.numberingSub02')}</li>
							<li>{t('footer.footerTermsHosting.container.Article7.numberingSub03')}</li>
							<li>{t('footer.footerTermsHosting.container.Article7.numberingSub04')}</li>
						</ul>
					</li>
					<li>
						{t('footer.footerTermsHosting.container.Article7.numbering2')}
						<ul className={style.inner_numbering}>
							<li>{t('footer.footerTermsHosting.container.Article7.numberingSub1')}</li>
							<li>{t('footer.footerTermsHosting.container.Article7.numberingSub2')}</li>
						</ul>
					</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article8.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article7.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article7.numbering2')}</li>
					<li>{t('footer.footerTermsHosting.container.Article7.numbering3')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article9.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article9.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article9.numbering2')}</li>
				</ul>
			</article>
			<p className={style.sub_title}>{t('footer.footerTermsHosting.container.sub_title3')}</p>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article10.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article10.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article10.numbering2')}</li>
					<li>{t('footer.footerTermsHosting.container.Article10.numbering3')}</li>
					<li>{t('footer.footerTermsHosting.container.Article10.numbering4')}</li>
					<li>{t('footer.footerTermsHosting.container.Article10.numbering5')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article11.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article11.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article11.numbering2')}</li>
					<li>{t('footer.footerTermsHosting.container.Article11.numbering3')}</li>
					<li>{t('footer.footerTermsHosting.container.Article11.numbering4')}</li>
					<li>{t('footer.footerTermsHosting.container.Article11.numbering5')}</li>
					<li>{t('footer.footerTermsHosting.container.Article11.numbering6')}</li>
					<li>{t('footer.footerTermsHosting.container.Article11.numbering7')}</li>
					<li>{t('footer.footerTermsHosting.container.Article11.numbering8')}</li>
					<li>{t('footer.footerTermsHosting.container.Article11.numbering9')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article12.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article12.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article12.numbering2')}</li>
					<li>{t('footer.footerTermsHosting.container.Article12.numbering3')}</li>
					<li>{t('footer.footerTermsHosting.container.Article12.numbering4')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article13.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article13.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article13.numbering2')}</li>
				</ul>
			</article>
			<p className={style.sub_title}>{t('footer.footerTermsHosting.container.sub_title4')}</p>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article14.title')}</p>
				<ul className={style.item_desc}>
					<li>{t('footer.footerTermsHosting.container.Article14.desc')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article15.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article15.numbering1')}</li>
					<li>
						{t('footer.footerTermsHosting.container.Article15.numbering2')}
						<ul className={style.inner_numbering}>
							<li>{t('footer.footerTermsHosting.container.Article15.numberingSub1')}</li>
							<li>{t('footer.footerTermsHosting.container.Article15.numberingSub2')}</li>
							<li>{t('footer.footerTermsHosting.container.Article15.numberingSub3')}</li>
						</ul>
					</li>
					<li>{t('footer.footerTermsHosting.container.Article15.numbering3')}</li>
				</ul>
			</article>

			<p className={style.sub_title}>{t('footer.footerTermsHosting.container.sub_title5')}</p>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article16.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>
						{t('footer.footerTermsHosting.container.Article16.numbering1')}
						<ul className={style.inner_numbering}>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub1')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub2')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub3')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub4')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub5')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub6')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub7')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub8')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub9')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub10')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub11')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub12')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub13')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub14')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub15')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub16')}</li>
							<li>{t('footer.footerTermsHosting.container.Article16.numberingSub17')}</li>
						</ul>
					</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article17.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article17.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article17.numbering2')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article18.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article18.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article18.numbering2')}</li>
				</ul>
			</article>
			<p className={style.sub_title}>{t('footer.footerTermsHosting.container.sub_title6')}</p>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article19.title')}</p>
				<ul className={style.item_desc}>
					<li>
						{t('footer.footerTermsHosting.container.Article19.desc')}
						<ul className={style.inner_numbering}>
							<li>{t('footer.footerTermsHosting.container.Article19.numbering1')}</li>
							<li>{t('footer.footerTermsHosting.container.Article19.numbering2')}</li>
							<li>{t('footer.footerTermsHosting.container.Article19.numbering3')}</li>
						</ul>
					</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article20.title')}</p>
				<ul className={style.item_desc}>
					<li>{t('footer.footerTermsHosting.container.Article20.desc')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article21.title')}</p>
				<ul className={style.item_desc}>
					<li>{t('footer.footerTermsHosting.container.Article21.desc')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article22.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article22.numbering1')}</li>
					<li>
						{t('footer.footerTermsHosting.container.Article22.numbering2')}
						<ul className={style.inner_numbering}>
							<li>{t('footer.footerTermsHosting.container.Article22.numberingSub1')}</li>
							<li>{t('footer.footerTermsHosting.container.Article22.numberingSub2')}</li>
							<li>{t('footer.footerTermsHosting.container.Article22.numberingSub3')}</li>
							<li>{t('footer.footerTermsHosting.container.Article22.numberingSub4')}</li>
						</ul>
					</li>
					<li>{t('footer.footerTermsHosting.container.Article22.numbering3')}</li>
				</ul>
			</article>
			<p className={style.sub_title}>{t('footer.footerTermsHosting.container.sub_title7')}</p>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article23.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article23.numbering1')}</li>
					<li>
						{t('footer.footerTermsHosting.container.Article23.numbering2')}
						<ul className={style.inner_numbering}>
							<li>{t('footer.footerTermsHosting.container.Article23.numberingSub1')}</li>
							<li>{t('footer.footerTermsHosting.container.Article23.numberingSub2')}</li>
							<li>{t('footer.footerTermsHosting.container.Article23.numberingSub3')}</li>
						</ul>
					</li>
					<li>{t('footer.footerTermsHosting.container.Article23.numbering3')}</li>
					<li>{t('footer.footerTermsHosting.container.Article23.numbering4')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article24.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article24.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article24.numbering2')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article25.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article25.numbering1')}</li>
					<li>
						{t('footer.footerTermsHosting.container.Article25.numbering2')}
						<ul className={style.inner_numbering}>
							<li>
								{t('footer.footerTermsHosting.container.Article25.numberingSub01')}
								<br />
								{t('footer.footerTermsHosting.container.Article25.desc1')}
								<br />
								{t('footer.footerTermsHosting.container.Article25.desc2')}
								<br />
								{t('footer.footerTermsHosting.container.Article25.desc3')}
							</li>
							<li>
								{t('footer.footerTermsHosting.container.Article25.numberingSub01')}
								<br />
								{t('footer.footerTermsHosting.container.Article25.desc')}
							</li>
						</ul>
					</li>
					<li>{t('footer.footerTermsHosting.container.Article25.numbering3')}</li>
					<li>
						{t('footer.footerTermsHosting.container.Article25.numbering4')}
						<ul className={style.inner_numbering}>
							<li>{t('footer.footerTermsHosting.container.Article25.numberingSub1')}</li>
							<li>{t('footer.footerTermsHosting.container.Article25.numberingSub2')}</li>
						</ul>
					</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article26.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article26.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article26.numbering2')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article27.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article27.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article27.numbering2')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article28.title')}</p>
				<ul className={style.item_desc}>
					<li>{t('footer.footerTermsHosting.container.Article28.desc')}</li>
				</ul>
			</article>
			<p className={style.sub_title}>{t('footer.footerTermsHosting.container.sub_title8')}</p>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article29.title')}</p>
				<ul className={style.item_desc}>
					<li>{t('footer.footerTermsHosting.container.Article29.desc')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article30.title')}</p>
				<ul className={style.item_desc}>
					<li>{t('footer.footerTermsHosting.container.Article30.desc')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article31.title')}</p>
				<ul className={style.item_desc}>
					<li>{t('footer.footerTermsHosting.container.Article31.desc')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article32.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article32.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article32.numbering2')}</li>
					<li>{t('footer.footerTermsHosting.container.Article32.numbering3')}</li>
					<li>{t('footer.footerTermsHosting.container.Article32.numbering4')}</li>
					<li>{t('footer.footerTermsHosting.container.Article32.numbering5')}</li>
					<li>{t('footer.footerTermsHosting.container.Article32.numbering6')}</li>
					<li>{t('footer.footerTermsHosting.container.Article32.numbering7')}</li>
					<li>
						{t('footer.footerTermsHosting.container.Article32.numbering8')}
						<ul className={style.inner_numbering}>
							<li>{t('footer.footerTermsHosting.container.Article32.numberingSub1')}</li>
							<li>{t('footer.footerTermsHosting.container.Article32.numberingSub2')}</li>
							<li>{t('footer.footerTermsHosting.container.Article32.numberingSub3')}</li>
							<li>{t('footer.footerTermsHosting.container.Article32.numberingSub4')}</li>
						</ul>
					</li>
				</ul>
			</article>
			<p className={style.sub_title}>{t('footer.footerTermsHosting.container.sub_title9')}</p>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article33.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article33.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article33.numbering2')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article34.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>
						{t('footer.footerTermsHosting.container.Article34.numbering1')}
						<ul className={style.inner_numbering}>
							<li>{t('footer.footerTermsHosting.container.Article34.numberingSub1')}</li>
							<li>{t('footer.footerTermsHosting.container.Article34.numberingSub2')}</li>
						</ul>
					</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article35.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article35.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article35.numbering2')}</li>
					<li>{t('footer.footerTermsHosting.container.Article35.numbering3')}</li>
					<li>{t('footer.footerTermsHosting.container.Article35.numbering4')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article36.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>
						{t('footer.footerTermsHosting.container.Article36.numbering1')}
						<ul className={style.inner_numbering}>
							<li>{t('footer.footerTermsHosting.container.Article36.numberingSub1')}</li>
							<li>{t('footer.footerTermsHosting.container.Article36.numberingSub2')}</li>
							<li>{t('footer.footerTermsHosting.container.Article36.numberingSub3')}</li>
							<li>{t('footer.footerTermsHosting.container.Article36.numberingSub4')}</li>
						</ul>
					</li>
					<li>{t('footer.footerTermsHosting.container.Article36.numbering1')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article37.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>
						{t('footer.footerTermsHosting.container.Article37.numbering1')}
						<ul className={style.inner_numbering}>
							<li>{t('footer.footerTermsHosting.container.Article37.numberingSub1')}</li>
							<li>{t('footer.footerTermsHosting.container.Article37.numberingSub2')}</li>
							<li>{t('footer.footerTermsHosting.container.Article37.numberingSub3')}</li>
							<li>{t('footer.footerTermsHosting.container.Article37.numberingSub4')}</li>
						</ul>
					</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article38.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article38.numbering1')}</li>
					<li>{t('footer.footerTermsHosting.container.Article38.numbering2')}</li>
					<li>{t('footer.footerTermsHosting.container.Article38.numbering3')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article39.title')}</p>
				<ul className={style.item_desc}>
					<li>{t('footer.footerTermsHosting.container.Article39.desc')}</li>
				</ul>
			</article>
			<article className={style.item}>
				<p className={style.item_title}>{t('footer.footerTermsHosting.container.Article40.title')}</p>
				<ul className={`${style.item_desc} ${style.numbering}`}>
					<li>{t('footer.footerTermsHosting.container.Article40.numbering1')}</li>
					<li>
						{t('footer.footerTermsHosting.container.Article40.numbering2')}
						<br />
						{t('footer.footerTermsHosting.container.Article40.numbering02')}
					</li>
					<li>{t('footer.footerTermsHosting.container.Article40.numbering3')}</li>
					<li>{t('footer.footerTermsHosting.container.Article40.numbering4')}</li>
					<li>{t('footer.footerTermsHosting.container.Article40.numbering5')}</li>
					<li>{t('footer.footerTermsHosting.container.Article40.numbering6')}</li>
					<li>
						{t('footer.footerTermsHosting.container.Article40.numbering7')}
						<ul className={style.inner_numbering}>
							<li>
								{t('footer.footerTermsHosting.container.Article40.numberingSub1')}
								<br />
								{t('footer.footerTermsHosting.container.Article40.desc1')}
								<br />
								{t('footer.footerTermsHosting.container.Article40.desc2')}
							</li>
							<li>
								{t('footer.footerTermsHosting.container.Article40.numberingSub2')}
								<br />
								{t('footer.footerTermsHosting.container.Article40.numberingSub02')}
							</li>
						</ul>
					</li>
					<li>{t('footer.footerTermsHosting.container.Article40.numbering8')}</li>
					<li>{t('footer.footerTermsHosting.container.Article40.numbering9')}</li>
				</ul>
			</article>
		</>
	)
}
