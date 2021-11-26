/*
 * 파일 검증 상태
 */
const fileMsg = {
	SUCCESS: 'file.msg.success', // 성공
	FORMAT: 'file.msg.format', // 포멧 오류
	SIZE_UNDER_200: 'file.msg.sizeUnder200', // 200 x 200 미만
	SIZE_EXCESS_800: 'file.msg.sizeUnder200', // 800 x 800 초과
	VOLUME_EXCESS_3: 'file.msg.volumeExcess3',
	EXTENSION_IMAGE: 'file.msg.extensionImage',
}

/*
 * base64 validation 체크 후 FileDto 내부 값 가져오기
 * fileReader 예시 값 : data:text/plain;base64,8J+YgHRlc3QgdHh0
 * return Object {
			success: this._success,
			code: this._msg,
			file: this._file,
			fileReader: this._fileReader,
			fileName: this._fileName,
		}
 */
export async function getBase64(event) {
	try {
		const response = await fileValidation(event)
		const fDto = new FileDto()
		fDto.setMsg(response.getMsg())
		fDto.setSuccess(response.getSuccess())
		fDto.setFile(response.getFile())
		fDto.setFileName(response.getFileName())

		return new Promise((resolve) => {
			const reader = new FileReader()
			reader.readAsDataURL(response.getFile())
			reader.onload = (e) => {
				fDto.setFileReader(e.target.result)
				resolve(fDto)
			}
		})
	} catch (error) {
		return Promise.reject(error)
	}
}

/*
 * ArrayBuffer validation 체크 후 FileDto 내부 값 가져오기
 * fileReader 예시 값 : ArrayBuffer(12)
 * return Object {
			success: this._success,
			code: this._msg,
			file: this._file,
			fileReader: this._fileReader,
			fileName: this._fileName,
		}
 */
// export async function getArrayBuffer(event) {
// 	try {
// 		const response = await fileValidation(event)
// 		const fDto = new FileDto()
// 		fDto.setMsg(response.getMsg())
// 		fDto.setSuccess(response.getSuccess())
// 		fDto.setFile(response.getFile())
// 		fDto.setFileName(response.getFileName())

// 		return new Promise(resolve => {
// 			const reader = new FileReader()
// 			reader.readAsArrayBuffer(response.getFile())
// 			reader.onload = e => {
// 				fDto.setFileReader(e.target.result)
// 				resolve(fDto)
// 			}
// 		})
// 	} catch (error) {
// 		return Promise.reject(error)
// 	}
// }

/*
 * BinaryString validation 체크 후 FileDto 내부 값 가져오기
 * fileReader 예시 값 : ðtest txt
 * return Object {
			success: this._success,
			code: this._msg,
			file: this._file,
			fileReader: this._fileReader,
			fileName: this._fileName,
		}
 */
// export async function getBinaryString(event) {
// 	try {
// 		const response = await fileValidation(event)
// 		const fDto = new FileDto()
// 		fDto.setMsg(response.getMsg())
// 		fDto.setSuccess(response.getSuccess())
// 		fDto.setFile(response.getFile())
// 		fDto.setFileName(response.getFileName())

// 		return new Promise(resolve => {
// 			const reader = new FileReader()
// 			reader.readAsBinaryString(response.getFile())
// 			reader.onload = e => {
// 				fDto.setFileReader(e.target.result)
// 				resolve(fDto)
// 			}
// 		})
// 	} catch (error) {
// 		return Promise.reject(error)
// 	}
// }

/*
 * 텍스트(UTF-16|UTF-8 문자열) validation 체크 후 FileDto 내부 값 가져오기
 * fileReader 예시 값 : 😀test txt
 * return Object {
			success: this._success,
			code: this._msg,
			file: this._file,
			fileReader: this._fileReader,
			fileName: this._fileName,
		}
 */
// export async function getText(event) {
// 	try {
// 		const response = await fileValidation(event)
// 		const fDto = new FileDto()
// 		fDto.setMsg(response.getMsg())
// 		fDto.setSuccess(response.getSuccess())
// 		fDto.setFile(response.getFile())
// 		fDto.setFileName(response.getFileName())

// 		return new Promise(resolve => {
// 			const reader = new FileReader()
// 			reader.readAsText(response.getFile())
// 			reader.onload = e => {
// 				fDto.setFileReader(e.target.result)
// 				resolve(fDto)
// 			}
// 		})
// 	} catch (error) {
// 		return Promise.reject(error)
// 	}
// }

/*
 * 1. 이미지 사이즈 체크 (가로, 세로)
 * 2. 파일 확장자 체크
 * 3. 파일 용량 체크
 * return FileDto
 */
function fileValidation(event) {
	const fDto = new FileDto()
	const { SUCCESS, FORMAT, SIZE_UNDER_200, SIZE_EXCESS_800, VOLUME_EXCESS_3, EXTENSION_IMAGE } = fileMsg
	const file = event.target.files[0]
	const fileName = file.name.toLowerCase() // 소문자로 변환
	const fileRegExp = /\.(png|jpe?g|gif)(\?.*)?$/

	if (!fileRegExp.test(fileName)) {
		// 파일 확장자 체크
		fDto.setSuccess(false)
		fDto.setMsg(FORMAT)

		return Promise.reject(fDto)
	}

	try {
		return new Promise((resolve) => {
			const img = new Image()

			// 가로 세로 사이즈 확인
			img.src = URL.createObjectURL(file)
			img.onload = () => {
				if (img.width > 800 || img.height > 800) {
					fDto.setSuccess(false)
					fDto.setMsg(SIZE_EXCESS_800)
				} else if (img.width < 200 || img.height < 200) {
					fDto.setSuccess(false)
					fDto.setMsg(SIZE_UNDER_200)
				}

				if (file && file.type.match('image.*')) {
					if (file.size > 3145728) {
						// 파일 사이즈 체크
						fDto.setSuccess(false)
						fDto.setMsg(VOLUME_EXCESS_3)
					}

					fDto.setSuccess(true)
					fDto.setMsg(SUCCESS)
					fDto.setFileName(fileName)
					fDto.setFile(file)

					URL.revokeObjectURL(img.src)

					resolve(fDto)
				}
			}
		})
	} catch (error) {
		fDto.setSuccess(false)
		fDto.setMsg(EXTENSION_IMAGE)

		return Promise.reject(fDto)
	}
}

/*
 * 파일 DTO
 */
class FileDto {
	constructor(success = true, msg = fileMsg.SUCCESS, file = {}, fileReader = {}, fileName = '') {
		this._success = success
		this._msg = msg
		this._file = file
		this._fileName = fileName
		this._fileReader = fileReader
	}

	setSuccess(value) {
		if (typeof value !== 'boolean') throw new Error('It is not a boolean type.')
		this._success = value
	}

	getSuccess() {
		return this._success
	}

	setMsg(value) {
		if (typeof value !== 'string') throw new Error('It is not a string type.')
		this._msg = value
	}

	getMsg() {
		return this._msg
	}

	setFile(value) {
		if (typeof value !== 'object') throw new Error('It is not a object type.')
		this._file = value
	}

	getFile() {
		return this._file
	}

	setFileReader(value) {
		if (typeof value !== 'string') throw new Error('It is not a string type.')
		this._fileReader = value
	}

	getFileReader() {
		return this._fileReader
	}

	setFileName(value) {
		if (typeof value !== 'string') throw new Error('It is not a string type.')
		this._fileName = value
	}

	getFileName() {
		return this._fileName
	}
}
