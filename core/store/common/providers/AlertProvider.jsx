import React, { useReducer } from 'react'
import { AlertStateContext } from '@store/common/create'
import { alertInitialState } from '@store/common/initialState'
import { alertReducer } from '@store/common/reducer'
import { constants } from '@store/common/constants'
import { useContext } from 'react'

const { SHOW_ALERT, CLOSE_ALERT } = constants

export function AlertProvider({ children }) {
	const [alertState, alertDispatch] = useReducer(alertReducer, alertInitialState)

	/*
	 * Alert Modal
	 * @param title(제목), msg(메시지)
	 * @return Promise
	 */
	function useAlert(msg) {
		if (!alertDispatch) throw new Error('Cannot find AlertProvder')

		alertDispatch({ type: SHOW_ALERT, msg })

		return new Promise((resolve) => {
			setTimeout(() => {
				const successElement = document.querySelector('#alertSuccess')
				if (successElement) {
					successElement.addEventListener('click', () => {
						resolve()
					})
				}
			}, 0)
		})
	}

	function closeAlert() {
		alertDispatch({ type: CLOSE_ALERT })
	}

	return (
		<AlertStateContext.Provider value={{ alertState, alertDispatch, useAlert, closeAlert }}>
			{children}
		</AlertStateContext.Provider>
	)
}

export function useAlertContext() {
	const { useAlert, alertDispatch, closeAlert } = useContext(AlertStateContext)
	if (!useAlert) {
		throw new Error('Cannot find useAlert')
	}
	return { $alert: useAlert, alertDispatch, closeAlert }
}
