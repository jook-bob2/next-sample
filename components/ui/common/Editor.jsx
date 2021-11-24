// import { memo, useMemo } from 'react'
// import dynamic from 'next/dynamic'
// import Loading from '@/components/ui/common/Loading'
// import 'react-quill/dist/quill.snow.css'
// import { getBase64 } from '@/utils/file'
// import { useTranslation } from 'react-i18next'
// import { useAlertContext } from '@/core/store/common/providers/AlertProvider'
// import { useRouter } from 'next/router'
// import { storageUtil } from '@/utils/storageUtil'
// import { STORAGE_FILE_CD } from '@/constants/storageCd'
// import { useAttachmentContext } from '@/core/store/api/providers/AttachmentApiProvider'
// import { POST_FILE_UPLOAD } from '@/core/store/api/create/attachmentCreate'

// const QuillNoSSRWrapper = dynamic(import('react-quill'), {
// 	ssr: false,
// 	loading: () => <Loading />,
// })

// const formats = [
// 	'font',
// 	'header',
// 	'bold',
// 	'italic',
// 	'underline',
// 	'strike',
// 	'blockquote',
// 	'list',
// 	'bullet',
// 	'indent',
// 	'link',
// 	'image',
// 	'video',
// 	'align',
// 	'color',
// 	'background',
// 	'code-block',
// ]

// const Editor = memo(({ value, onChange, placeholder }) => {
// 	const { t } = useTranslation()
// 	const { $alert } = useAlertContext()
// 	const { pathname } = useRouter()
// 	const { state: attachmentState, dispatch: attachmentDispatch } = useAttachmentContext()
// 	const { loading: uploadLoading } = attachmentState.attachmentFileUpload

// 	const modules = useMemo(
// 		() => ({
// 			toolbar: {
// 				container: [
// 					[{ font: [] }],
// 					[{ header: [1, 2, false] }],
// 					['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
// 					[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
// 					['link', 'image', 'video'],
// 					[{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
// 					['clean'],
// 				],
// 				handlers: {
// 					// imageUrl: imageUrlHandler,
// 					image: imageHandler,
// 				},
// 			},
// 		}),
// 		[],
// 	)

// 	function imageHandler() {
// 		// input 파일 태그 생성
// 		const input = document.createElement('input')
// 		input.setAttribute('type', 'file')
// 		input.setAttribute('accept', '.png,.jpg,.jpeg,.gif')
// 		input.click()

// 		// input change
// 		input.onchange = async e => {
// 			e.preventDefault()
// 			try {
// 				const res = await getBase64(e)
// 				const msg = res.getMsg()

// 				if (res.getSuccess()) {
// 					const fileNm = res.getFileName()
// 					const fileData = res.getFileReader()
// 					const spl = pathname.split('/')
// 					const filePath = spl[spl.length - 1] + '/'
// 					try {
// 						const fileResponse = await POST_FILE_UPLOAD(attachmentDispatch, { fileNm, fileData, filePath })
// 						if (fileResponse.data.success) {
// 							const { fileUrl, fileUid } = fileResponse.data.data

// 							if (storageUtil.getItem(STORAGE_FILE_CD)) {
// 								storageUtil.setItem(STORAGE_FILE_CD, [
// 									...storageUtil.getItem(STORAGE_FILE_CD).data,
// 									{ key: fileUid, insertYn: 'N', fileUrl },
// 								])
// 							} else {
// 								storageUtil.setItem(STORAGE_FILE_CD, [{ key: fileUid, insertYn: 'N', fileUrl }])
// 							}
// 							const range = this.quill.getSelection()
// 							// file 등록
// 							this.quill.insertEmbed(range.index, 'image', fileUrl)
// 						} else {
// 							const { code, msg } = fileResponse.data
// 							$alert(`${code} : ${msg}`)
// 						}
// 					} catch (err) {
// 						console.error(err)
// 					}
// 				} else {
// 					$alert(t(msg))
// 				}
// 			} catch (err) {
// 				console.error(err)
// 			}
// 		}
// 	}

// 	return (
// 		<>
// 			{uploadLoading && <Loading />}
// 			<QuillNoSSRWrapper
// 				style={{ height: 300, padding: 0 }}
// 				theme="snow"
// 				value={value}
// 				onChange={(content, delta, source, editor) => onChange(editor.getHTML(), delta.ops)}
// 				modules={modules}
// 				formats={formats}
// 				placeholder={placeholder}
// 			/>
// 		</>
// 	)
// })

// export default Editor
