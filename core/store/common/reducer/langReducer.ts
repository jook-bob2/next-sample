import { LangAction, LangState } from '../state/types'

export const langReducer = (state: LangState, { type, lang, langText }: LangAction) => {
	switch (type) {
		case 'SET_LANG':
			return { lang, langText }
		default:
			break
	}
}
