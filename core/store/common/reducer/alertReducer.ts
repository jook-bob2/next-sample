import { AlertAction, AlertState } from '../state/types'
import { alertInitialState } from '../state'

export const alertReducer = (state: AlertState, { type, msg }: AlertAction) => {
	switch (type) {
		case 'SHOW_ALERT':
			return { ...state, open: true, msg }
		case 'CLOSE_ALERT':
			return { ...alertInitialState }
		default:
			break
	}
}
