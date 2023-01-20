import React from 'react'
import styles from './index.module.scss'
import { RiPenNibLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function CreatePostButton() {
	return (
		<Link to='/createpost' className={styles.createPost}>
			<RiPenNibLine />
		</Link>
	)
}
