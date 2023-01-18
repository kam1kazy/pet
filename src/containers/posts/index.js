import React, { useCallback } from 'react'
import styles from './index.module.scss'

import { usePostsStore } from '../../store/postsStore'
import Post from '../../components/post'

export default function Posts() {
	const posts = usePostsStore(useCallback(({ posts }) => posts, []))

	return (
		<section className={styles.posts}>
			{posts.map((post) => {
				return (
					<Post
						key={post.id}
						author={post.author}
						time={post.time}
						title={post.title}
						tags={post.tags}
						description={post.description}
					/>
				)
			})}
		</section>
	)
}
