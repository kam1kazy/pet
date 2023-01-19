import React, { useEffect } from 'react'
import Button from '../../button'
import styles from './index.module.scss'

export default function ModalWindows({ show, children, title, onClose }) {
	const showHideClassName = show ? styles.modal + ' open' : styles.modal

	const closeOnEscapeKeyDown = (e) => {
		if ((e.charCode || e.keyCode) === 27) {
			onClose()
		}
	}

	useEffect(() => {
		document.body.addEventListener('keydown', closeOnEscapeKeyDown)
		return function cleanup() {
			document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
		}
	}, [])

	return (
		<div className={showHideClassName} onClick={onClose}>
			<div className={styles.content} onClick={(e) => e.stopPropagation()}>
				<div className={styles.header}>
					<h4 className={styles.title}>{title}</h4>
				</div>
				<div className={styles.body}>{children}</div>
				<div className={styles.footer}>
					<Button title='Закрыть' action={onClose} />
				</div>
			</div>
		</div>
	)
}
