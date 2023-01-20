import React from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import CreatePostButton from '../../components/toolbars/createPost'
import Search from '../../components/toolbars/search'

import styles from './index.module.scss'

export default function ToolBars() {
	return (
		<section className={styles.toolbar}>
			<Search />
			<CreatePostButton />
		</section>
	)
}
