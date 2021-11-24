import { AlertStateContext } from '@/core/store/common/create'
import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { withTranslation } from 'react-i18next'
import { constants } from '@store/common/constants'

const { SHOW_ALERT, CLOSE_ALERT } = constants

class AlertModal extends Component {
	static contextType = AlertStateContext

	componentDidMount() {
		window.$alert = this
	}

	show = ({ title, msg }) => {
		this.context.alertDispatch({
			type: SHOW_ALERT,
			title,
			msg,
		})
	}

	close = () => {
		this.context.alertDispatch({ type: CLOSE_ALERT })
	}

	render() {
		const { size, open, title, msg } = this.context.alertState
		const { t } = this.props
		return (
			<Modal size={size} open={open}>
				{title && <Modal.Header>{title}</Modal.Header>}
				<Modal.Content>
					<p>{msg}</p>
				</Modal.Content>
				<Modal.Actions>
					<Button id="alertSuccess" color="blue" onClick={() => this.close()}>
						{t('common.btnY')}
					</Button>
				</Modal.Actions>
			</Modal>
		)
	}
}

export default withTranslation()(AlertModal)
