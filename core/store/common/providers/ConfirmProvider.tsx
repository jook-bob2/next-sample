import React, { useContext, useReducer } from 'react'
import { confirmInitialState } from '@/core/store/common/state'
import { confirmReducer } from '@store/common/reducer/confirmReducer'
import { ConfirmStateContext } from '../contexts/confirmContext'
import { CNProps } from '../state/types'

export function ConfirmProvider({ children }: CNProps) {
	const [state, dispatch] = useReducer(confirmReducer, confirmInitialState)

	/*
	 * Confirm Modal
	 * @param title(제목), msg(메시지)
	 * @return Promise
	 */
	function openConfirm(msg: string) {
		if (!dispatch) throw new Error('Cannot find ConfirmProvider')

		dispatch({ type: 'SHOW_CONFIRM', msg })

		return new Promise<boolean>((resolve, reject) => {
			setTimeout(() => {
				const successElement = document.querySelector('#confirmSuccess')
				const cancelElement = document.querySelector('#confirmCancel')
				if (successElement) {
					successElement.addEventListener('click', () => {
						resolve(true)
					})
				}
				if (cancelElement) {
					cancelElement.addEventListener('click', () => {
						reject(false)
					})
				}
			}, 0)
		})
	}

	function closeConfirm() {
		dispatch({ type: 'CLOSE_CONFIRM' })
	}

	return (
		<ConfirmStateContext.Provider value={{ state, dispatch, openConfirm, closeConfirm }}>
			{children}
		</ConfirmStateContext.Provider>
	)
}

export function useConfirm() {
	const { openConfirm, closeConfirm, state, dispatch } = useContext(ConfirmStateContext)
	if (!state) {
		throw new Error('Cannot find useConfirm')
	}
	return { $confirm: openConfirm, closeConfirm, state, dispatch }
}
