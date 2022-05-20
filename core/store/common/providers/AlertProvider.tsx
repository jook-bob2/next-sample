import React, { useReducer } from 'react'
import { AlertStateContext } from '@/core/store/common/contexts/alertContext'
import { alertInitialState } from '@/core/store/common/state'
import { alertReducer } from '@/store/common/reducer/alertReducer'
import { useContext } from 'react'
import { CNProps } from '../state/types'

export function AlertProvider({ children }: CNProps) {
	const [state, dispatch] = useReducer(alertReducer, alertInitialState)

	/*
	 * Alert Modal
	 * @param title(제목), msg(메시지)
	 * @return Promise
	 */
	function openAlert(msg: string) {
		if (!dispatch) throw new Error('Cannot find AlertProvder')

		dispatch({ type: 'SHOW_ALERT', msg })

		return new Promise<boolean>((resolve) => {
			setTimeout(() => {
				const successElement = document.querySelector('#alertSuccess')
				if (successElement) {
					successElement.addEventListener('click', () => {
						resolve(true)
					})
				}
			}, 0)
		})
	}

	function closeAlert() {
		dispatch({ type: 'CLOSE_ALERT' })
	}

	return (
		<AlertStateContext.Provider value={{ state, dispatch, openAlert, closeAlert }}>
			{children}
		</AlertStateContext.Provider>
	)
}

export function useAlert() {
	const { openAlert, closeAlert, state, dispatch } = useContext(AlertStateContext)

	if (!state) {
		throw new Error('Cannot find useAlert')
	}
	return { $alert: openAlert, closeAlert, dispatch, state }
}
