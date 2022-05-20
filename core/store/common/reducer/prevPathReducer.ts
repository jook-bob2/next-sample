import { PrevPathAction, PrevPathState } from '../state/types'

export const prevPathReducer = (state: PrevPathState, { type, prevPath, curPath }: PrevPathAction) => {
	switch (type) {
		case 'SET_PATH_HISTORY':
			return { prevPath, curPath }
		default:
			break
	}
}
