import React from 'react'
import styles from './index.module.scss'

import { RiNotificationLine } from 'react-icons/ri'

export default function Alert() {
	return (
		<div className={styles.notification}>
			<RiNotificationLine />
		</div>
	)
}
