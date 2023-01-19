import React from 'react'
import styles from './index.module.scss'

export default function Post({ title, description, time, tags }) {
	return (
		<div className={styles.post}>
			<div className={styles.post__header}>
				<div className={styles.post__tags}>
					<ul>
						{tags?.map((tag, i) => {
							return <li key={i}>#{tag.tagName}</li>
						})}
					</ul>
				</div>
				<div className={styles.post__time}>
					<p>{time ? time : ''}</p>
				</div>
			</div>

			<div className={styles.post__content}>
				<div className={styles.post__title}>
					<h4>{title}</h4>
				</div>

				<div className={styles.post__message}>
					<p>{description}</p>
				</div>
			</div>
		</div>
	)
}
