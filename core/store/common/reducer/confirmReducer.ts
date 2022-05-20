import { confirmInitialState } from '../state'
import { ConfirmAction, ConfirmState } from '../state/types'

export const confirmReducer = (state: ConfirmState, { type, msg }: ConfirmAction) => {
	switch (type) {
		case 'SHOW_CONFIRM':
			return { ...state, open: true, msg }
		case 'CLOSE_CONFIRM':
			return { ...confirmInitialState }
		default:
			break
	}
}
