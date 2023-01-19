import React from 'react'
import styles from './index.module.scss'
import { RiPenNibLine } from 'react-icons/ri'

export default function CreatePostButton({ onOpen }) {
	return (
		<>
			<div className={styles.createPost} onClick={onOpen}>
				<RiPenNibLine />
			</div>
		</>
	)
}
