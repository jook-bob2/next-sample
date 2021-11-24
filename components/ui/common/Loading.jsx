import React from 'react'
import styles from '@styles/common/loading.module.scss'
import { Dimmer, Loader } from 'semantic-ui-react'

export default function Loading() {
	return (
		<div className={styles.loading__container}>
			<div className={styles.loading__wrap}>
				<Dimmer active inverted>
					<Loader active inline="centered">
						<p>Loading</p>
					</Loader>
				</Dimmer>
			</div>
		</div>
	)
}
