import { STORAGE_FILE_CD } from '@/constants/storageCd'

export const storageUtil = {
	/*
	 * 로컬 스토리지에 JSON 형식으로 저장 해줌.
	 * Default : 만료 기간 1달
	 * Options: 만료 연도, 만료 달, 만료 일에 정수 값 전달
	 */
	setItem: (key, value, options = { addYear: 0, addMonth: 1, addDate: 0 }) => {
		let d = new Date()
		let creation = d.getTime()
		d.setFullYear(d.getFullYear() + Number(options.addYear))
		d.setMonth(d.getMonth() + Number(options.addMonth))
		d.setDate(d.getDate() + Number(options.addDate))
		d.setHours(d.getHours())
		d.setMinutes(d.getMinutes())
		let expiration = new Date(d).getTime()
		localStorage.setItem(key, JSON.stringify({ data: value, creation, expiration }))
	},
	/*
	 * 로컬 스토리지에 JSON 형식으로 저장된 값을 오브젝트로 반환
	 */
	getItem: (key) => {
		if (!localStorage.getItem(key)) return false
		return JSON.parse(localStorage.getItem(key))
	},
	/*
	 * 로컬 스토리지에 있는 데이터 삭제
	 */
	remove: (key) => {
		localStorage.removeItem(key)
	},
	/*
	 * 글 등록 시 image가 있으면 storage의 파일 여부를 Y로 변경
	 */
	setFileUploadComplete: (content) => {
		if (storageUtil.getItem(STORAGE_FILE_CD)) {
			const fileList = storageUtil.getItem(STORAGE_FILE_CD).data
			if (fileList.length > 0) {
				fileList.forEach((f) => {
					if (content.includes(f.fileUrl)) {
						f.insertYn = 'Y'
						storageUtil.setItem(STORAGE_FILE_CD, [...fileList.filter((f2) => f2.key !== f.key), f])
					}
				})
			}
		}
	},
}
