import React, { forwardRef, useContext, useMemo } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from '@styles/common/date-select.module.scss'
import { ko, enUS, ja, fr, da, ca, ru, vi, zhCN, fi, de } from 'date-fns/locale'
import { LangStateContext } from '@/core/store/common/create'

// 국가별 캘린더 언어 설정
function setCalendarLocale(lang) {
	switch (lang) {
		case 'ko':
			registerLocale(lang, ko)
			break
		case 'ja':
			registerLocale(lang, ja)
			break
		case 'fr':
			registerLocale(lang, fr)
			break
		case 'da':
			registerLocale(lang, da)
			break
		case 'ca':
			registerLocale(lang, ca)
			break
		case 'ru':
			registerLocale(lang, ru)
			break
		case 'vi':
			registerLocale(lang, vi)
			break
		case 'zh':
			registerLocale(lang, zhCN)
			break
		case 'fi':
			registerLocale(lang, fi)
			break
		case 'de':
			registerLocale(lang, de)
			break
		default:
			registerLocale(lang, enUS)
			break
	}
	return lang
}

export default function DateSelect({
	selected,
	onChange,
	options = { isClearable: false, minDate: null, maxDate: null, startDate: null, endDate: null, format: null },
}) {
	const { isClearable, maxDate, minDate, startDate, endDate, format } = options
	const { langState } = useContext(LangStateContext)
	const locale = useMemo(() => setCalendarLocale(langState.lang), [langState])

	const CustomInput = forwardRef(({ value, onClick }, ref) => {
		return (
			<div className={styles.date_custom_div}>
				<input readOnly value={value} />
				<button onClick={onClick} ref={ref}>
					<img src="/static/icon/calendar.svg" />
				</button>
			</div>
		)
	})

	return (
		<div className={styles.date__select__wrap}>
			<DatePicker
				selected={selected}
				onChange={(date) => onChange(date)}
				dateFormat={format}
				locale={locale}
				isClearable={isClearable}
				maxDate={maxDate}
				minDate={minDate}
				startDate={startDate}
				endDate={endDate}
				customInput={<CustomInput />}
			/>
		</div>
	)
}
