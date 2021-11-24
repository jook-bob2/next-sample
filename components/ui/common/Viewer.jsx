import dynamic from 'next/dynamic'
import { memo } from 'react'
import Loading from '@/components/ui/common/Loading'
import 'react-quill/dist/quill.bubble.css'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
	ssr: false,
	loading: () => <Loading />,
})

const Viewer = memo(({ value }) => {
	return <QuillNoSSRWrapper value={value} readOnly={true} theme={'bubble'} />
})

export default Viewer
