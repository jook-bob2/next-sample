import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import { useAlert } from '@/core/store/common/providers/AlertProvider'
import { useConfirm } from '@/core/store/common/providers/ConfirmProvider'
import DateSelect from '@/components/ui/common/DateSelect'
import {
	createEndDate,
	createStartDate,
	initialDate,
	initialEndDt,
	initialStartDt,
} from '@/utils/search/initialSearchDate'
import moment from 'moment'
import { defaultFormat, getMonthCal, getTodayCal, getWeekCal, getYearCal } from '@/utils/date'
import { getExpireTime } from '@/core/api/user/userApi'
import useTrans from '@/hooks/useTrans'

const styles = {
	comm_wrap: {
		padding: 40,
	},
	comm_item: {
		paddingBottom: 20,
	},
	comm_image: {
		border: '1px solid gray',
		padding: 20,
	},
	comm_editor: {
		drop_down: {
			padding: 20,
		},
		subject_line: {
			padding: 20,
		},
		type: {
			fontSize: 20,
		},
		subject: {
			fontSize: 20,
		},
		btn: {
			paddingTop: 40,
			textAlign: 'center',
		},
	},
}

export const initialSearchData = {
	...initialDate,
}

export default function TestComponent() {
	const t = useTrans()
	const { $alert } = useAlert()
	const { $confirm } = useConfirm()
	const [startDate, setStartDate] = useState<string | Date>(initialStartDt)
	const [endDate, setEndDate] = useState<string | Date>(initialEndDt)
	const [searchData, setSearchData] = useState(initialSearchData)

	function showAlert() {
		$alert('알림창 입니다.')
	}

	function showConfirm() {
		$confirm('확인내용')
			.then(() => {
				$alert('확인 되었습니다.')
			})
			.catch(() => {
				$alert('취소 되었습니다.')
			})
	}

	// async function handleChangeImage(e) {
	// 	e.preventDefault()
	// 	try {
	// 		const res = await getBase64(e)
	// 		const msg = res.getMsg()

	// 		if (res.getSuccess()) {
	// 			setImage({
	// 				fileNm: res.getFileName(),
	// 				fileData: res.getFileReader(),
	// 			})
	// 			$alert(t(msg))
	// 		} else {
	// 			$alert(t(msg))
	// 		}
	// 	} catch (err) {
	// 		$alert(t(err.getMsg()))
	// 	}
	// }

	// async function handleClickFileUpload(e) {
	// 	e.preventDefault()

	// 	if (image.fileData && image.fileNm) {
	// 		try {
	// 			const response = await POST_FILE_UPLOAD(attachmentDispatch, { ...image, filePath: 'test/' })
	// 			console.log(response)
	// 			// fileNm: "zeni.jpg"
	// 			// fileSize: 65587
	// 			// fileUid: "test/zeni-97f3578d-28d0-4d56-9676-203ee95c6268.jpg"
	// 			// fileUrl: "https://starlabs-silkroad-dev.s3.ap-northeast-2.amazonaws.com/test/zeni-97f3578d-28d0-4d56-9676-203ee95c6268.jpg"
	// 			// 파일 다운로드는 서버 URL + fileUid 조합으로 한다.
	// 			if (response.data.success) {
	// 				const { fileUid } = response.data.data
	// 				$alert('파일이 등록 되었습니다.')
	// 				setFileKey(fileUid)
	// 				setFileData(`${process.env.NEXT_PUBLIC_API_URL}/attachment/file-download?key=${fileUid}`)
	// 				// setFileData(`http://localhost:8080/test/file-download?key=${response.fileUid}`)
	// 			}
	// 		} catch (err) {
	// 			console.log(err)
	// 		}
	// 	}
	// }

	// async function handleClickFileDelete(e) {
	// 	e.preventDefault()
	// 	if (fileKey) {
	// 		try {
	// 			const response = await deleteFile(fileKey)
	// 			console.log(response)
	// 			if (response.data) {
	// 				$alert('삭제 되었습니다.')
	// 				setFileKey('')
	// 				setFileData('')
	// 				setImage(initialImageState)
	// 			}
	// 		} catch (err) {
	// 			console.log(err)
	// 		}
	// 	}
	// }

	/*
	 * 시작 날짜 변경 함수
	 */
	function handleChangeStartDate(date: Date | string) {
		const resultDate = createStartDate(date)

		setStartDate(resultDate)
		setSearchData({
			...searchData,
			startDate: moment(resultDate).format(defaultFormat),
		})
	}

	/*
	 * 끝 날짜 변경 함수
	 */
	function handleChangeEndDate(date: Date | string) {
		const resultDate = createEndDate(date)

		setEndDate(resultDate)
		setSearchData({
			...searchData,
			endDate: moment(resultDate).format(defaultFormat),
		})
	}

	/*
	 * 오늘, 일주일전, 한달전, 1년전 버튼 클릭시 시작날짜 변경
	 */
	function handleClickBtnDate(date: Date | string) {
		setStartDate(date)
		setEndDate(initialEndDt)
		setSearchData({
			...searchData,
			startDate: moment(date).format(defaultFormat),
			endDate: moment(initialEndDt).format(defaultFormat),
		})
	}

	return (
		<div style={styles.comm_wrap}>
			<div style={styles.comm_item}>
				<h1>[Alert]</h1>
				<Button onClick={() => showAlert()}>{t('common.btnAlert')}</Button>
			</div>
			<div style={styles.comm_item}>
				<h1>[Confirm]</h1>
				<Button onClick={() => showConfirm()}>{t('common.btnConfirm')}</Button>
			</div>

			<div style={styles.comm_item}>
				<h1>[DatePicker]</h1>
				<DateSelect
					selected={startDate}
					onChange={handleChangeStartDate}
					options={{ format: 'yyyy/MM/dd', startDate, maxDate: initialEndDt }}
				/>
				<span>&nbsp; ~ &nbsp;</span>
				<DateSelect
					selected={endDate}
					onChange={handleChangeEndDate}
					options={{ format: 'yyyy/MM/dd', minDate: startDate, maxDate: initialEndDt }}
				/>
				<div>
					<Button size={'mini'} color="facebook" onClick={() => handleClickBtnDate(getTodayCal())}>
						오늘
					</Button>
					<Button size={'mini'} color="facebook" onClick={() => handleClickBtnDate(getWeekCal(1))}>
						일주일전
					</Button>
					<Button size={'mini'} color="facebook" onClick={() => handleClickBtnDate(getMonthCal(1))}>
						한달전
					</Button>
					<Button size={'mini'} color="facebook" onClick={() => handleClickBtnDate(getYearCal(1))}>
						1년전
					</Button>
				</div>
			</div>

			{/* <div style={styles.comm_item}>
				<h1>[PieChart]</h1>
				<PieChart />
			</div>
			<div style={styles.comm_item}>
				<h1>[LineChart]</h1>
				<LineChart />
			</div>
			<div style={styles.comm_item}>
				<h1>[SplineAreaChart]</h1>
				<SplineAreaChart />
			</div>
			<ComboChart />
			<DonutChart />
			<ScatterChart />
			<LineChart />
			<CandleStickChart />
			*/}
		</div>
	)
}
