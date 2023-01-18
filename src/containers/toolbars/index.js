import React from 'react'
import styles from './index.module.scss'

import CreatePost from '../../components/toolbars/createPost'
import Search from '../../components/toolbars/search'

export default function ToolBars() {
	return (
		<section className={styles.toolbar}>
			<Search />
			<CreatePost />
		</section>
	)
}
