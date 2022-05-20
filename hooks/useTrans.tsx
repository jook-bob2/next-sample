import { useTranslation } from 'react-i18next'

// 언어 변환 공통 함수
export default function useTrans() {
	const { t } = useTranslation()

	// 다국어 처리할 메시지, 공통으로 들어갈 메세지
	return function $(key: string, data?: string[]): string {
		return t(key, Object.assign({}, data))
	}
}
