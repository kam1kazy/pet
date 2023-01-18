import React from 'react'
import styles from './index.module.scss'
import { useTagsStore } from '../../store/tagsStore'

export default function CarouselTags() {
	const tagsArr = useTagsStore((state) => state.tags)

	return (
		<section className={styles.carousel}>
			<ul>
				{tagsArr.map((tag, i) => {
					return (
						<li key={tag.id} className={i === 0 ? styles.active : ''}>
							#{tag.name}
						</li>
					)
				})}
			</ul>
		</section>
	)
}
