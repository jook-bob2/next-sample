import { AlertStateContext, ConfirmStateContext } from '@/core/store/common/create'
import { useContext } from 'react'
import styled from 'styled-components'
import { constants } from '@store/common/constants'
import { useTranslation } from 'react-i18next'

const Modal = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: -ms-flexbox;
	-webkit-display: flex;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	width: 400px;
	min-width: 200px;
	max-width: 600px;
	min-height: 150px;
	max-height: 70vh;
	padding: 30px;
	background: #ffffff;
	border: solid 1px #e8e8e8;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
	z-index: 99999;
	display: ${(props) => (props.open ? 'flex' : 'none') || 'none'};
	.modal-contents {
		display: -ms-flexbox;
		-webkit-display: flex;
		display: flex;
		-ms-flex: 1 0 auto;
		-webkit-flex: 1 0 auto;
		flex: 1 0 auto;
		height: 100%;
		padding-bottom: 30px;
		p {
			font-size: 12px;
			line-height: 1.5;
			letter-spacing: -0.3px;
			color: #202020;
		}
	}
	.modal-footer {
		margin: 0 0 0 auto;
		button {
			width: auto;
			height: 35px;
			border-radius: 3px;
			padding: 8px 20px;
			transition: 0.2s;
			border: 1px solid transparent;
			span {
				font-size: 14px;
				font-weight: 500px;
				color: #ffffff;
				letter-spacing: -0.4px;
				transition: 0.2s;
			}
			& ~ button {
				margin-left: 10px;
			}
			&.cancel {
				background: #808080;
				&:hover {
					background: #ffffff;
					border-color: #808080;
					span {
						color: #808080;
					}
				}
			}
			&.confirm {
				background: #4b3f8f;
				&:hover {
					background: #ffffff;
					border-color: #4b3f8f;
					span {
						color: #4b3f8f;
					}
				}
			}
		}
	}
`

const { CLOSE_ALERT, CLOSE_CONFIRM } = constants
function AlertModal() {
	const { t } = useTranslation()
	const { alertState, alertDispatch } = useContext(AlertStateContext)
	const { open, msg } = alertState

	function handleClickClose() {
		alertDispatch({ type: CLOSE_ALERT })
	}

	return (
		<>
			{open === true && (
				<div
					style={{
						width: '100vw',
						height: '100vh',
						position: 'fixed',
						background: 'rgba(0,0,0,0.2)',
						zIndex: 99998,
					}}>
					<Modal open={open} role="alertdialog" aria-live="assertive" aria-modal="true">
						<div className="modal-contents">
							<p>{msg}</p>
						</div>
						<div className="modal-footer">
							<button className="confirm" id="alertSuccess" onClick={() => handleClickClose()}>
								<span>{t('common.btnY')}</span>
							</button>
						</div>
					</Modal>
				</div>
			)}
		</>
	)
}
function ConfirmModal() {
	const { confirmState, confirmDispatch } = useContext(ConfirmStateContext)
	const { open, msg } = confirmState
	const { t } = useTranslation()

	function handleClickClose() {
		confirmDispatch({ type: CLOSE_CONFIRM })
	}

	return (
		<>
			{open === true && (
				<div
					style={{
						width: '100vw',
						height: '100vh',
						position: 'fixed',
						background: 'rgba(0,0,0,0.2)',
						zIndex: 99998,
					}}>
					<Modal open={open} role="alertdialog" aria-live="assertive" aria-modal="true">
						<div className="modal-contents">
							<p>{msg}</p>
						</div>
						<div className="modal-footer">
							<button className="cancel" id="confirmCancel" onClick={() => handleClickClose()}>
								<span>{t('common.btnN')}</span>
							</button>
							<button className="confirm" id="confirmSuccess" onClick={() => handleClickClose()}>
								<span>{t('common.btnY')}</span>
							</button>
						</div>
					</Modal>
				</div>
			)}
		</>
	)
}
export { AlertModal, ConfirmModal }
