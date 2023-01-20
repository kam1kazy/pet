import React from 'react'
import styles from './index.module.scss'

import Alerts from '../../components/toolbars/notification'
import Menu from '../../components/toolbars/menu'

export default function Header() {
	return (
		<section className={styles.header}>
			<Menu />
			<h1 className={styles.brand}>Diary</h1>
			<Alerts />
		</section>
	)
}
