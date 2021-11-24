import { ConfirmStateContext } from '@/core/store/common/create'
import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { withTranslation } from 'react-i18next'
import { constants } from '@store/common/constants'

const { SHOW_CONFIRM, CLOSE_CONFIRM } = constants

class ConfirmModal extends Component {
	static contextType = ConfirmStateContext

	componentDidMount() {
		window.$confirm = this
	}

	show = ({ title, msg }) => {
		this.context.confirmDispatch({
			type: SHOW_CONFIRM,
			title,
			msg,
		})
	}

	close = () => {
		this.context.confirmDispatch({ type: CLOSE_CONFIRM })
	}

	render() {
		const { size, open, title, msg } = this.context.confirmState
		const { t } = this.props
		return (
			<Modal size={size} open={open}>
				{title && <Modal.Header>{title}</Modal.Header>}
				<Modal.Content>
					<p>{msg}</p>
				</Modal.Content>
				<Modal.Actions>
					<Button id="confirmCancel" color="red" onClick={() => this.close()}>
						{t('common.btnN')}
					</Button>
					<Button id="confirmSuccess" color="blue" onClick={() => this.close()}>
						{t('common.btnY')}
					</Button>
				</Modal.Actions>
			</Modal>
		)
	}
}

export default withTranslation()(ConfirmModal)
