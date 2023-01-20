import React from 'react'
import styles from './index.module.scss'

export default function InputField({ title }) {
	return (
		<input
			type='text'
			name='title'
			className={styles.title}
			placeholder={title}
		/>
	)
}
