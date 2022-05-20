export interface StorageUtilType {
	setItem: (key: string, value?: any, options?: ItemOptionsType) => void
	getItem: (ket: string) => StorageDataType | null
	remove: (key: string) => void
}

export interface ItemOptionsType {
	addYear?: number
	addMonth?: number
	addDate?: number
}

export interface StorageDataType {
	creation: Date
	data?: any
	expiration: Date
}

export const storageUtil: StorageUtilType = {
	/*
	 * 로컬 스토리지에 JSON 형식으로 저장 해줌.
	 * Default : 만료 기간 1달
	 * Options: 만료 연도, 만료 달, 만료 일에 정수 값 전달
	 */
	setItem: (key: string, value?: any, options: ItemOptionsType = { addYear: 0, addMonth: 1, addDate: 0 }) => {
		const d = new Date()
		const creation = d.getTime()
		d.setFullYear(d.getFullYear() + Number(options.addYear))
		d.setMonth(d.getMonth() + Number(options.addMonth))
		d.setDate(d.getDate() + Number(options.addDate))
		d.setHours(d.getHours())
		d.setMinutes(d.getMinutes())
		const expiration = new Date(d).getTime()
		localStorage.setItem(key, JSON.stringify({ data: value, creation, expiration }))
	},
	/*
	 * 로컬 스토리지에 JSON 형식으로 저장된 값을 오브젝트로 반환
	 */
	getItem: (key: string) => {
		if (!localStorage.getItem(key)) return null
		return JSON.parse(localStorage.getItem(key))
	},
	/*
	 * 로컬 스토리지에 있는 데이터 삭제
	 */
	remove: (key: string) => {
		localStorage.removeItem(key)
	},
}
