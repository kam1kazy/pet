import React, { useState } from 'react'
import styles from './index.module.scss'

import CreatePostButton from '../../components/toolbars/createPost'
import Search from '../../components/toolbars/search'

import ModalWindows from '../../components/modals/modalWindows'

export default function ToolBars() {
	const [showModal, setShowModal] = useState(false)

	return (
		<section className={styles.toolbar}>
			<Search />
			<CreatePostButton onOpen={() => setShowModal(true)} />

			{showModal && (
				<ModalWindows
					show={showModal}
					title='Тестовая модалка'
					onClose={() => setShowModal(false)}
				>
					Тут динамический контент
				</ModalWindows>
			)}
		</section>
	)
}
