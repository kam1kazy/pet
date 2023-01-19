import React from 'react'
import styles from './index.module.scss'

export default function Button({ title, action }) {
	return (
		<div className={styles.btn} onClick={action}>
			{title}
		</div>
	)
}
