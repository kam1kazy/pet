import { useCallback, useRef, useState } from 'react'
import { usePostsStore } from '../../store/postsStore'

// Компоненты
import Post from '../../components/post'
// Стили
import styled from 'styled-components'

type TypePost = {
	id: number
	time: string
	title: string
	body: string
	tags?: [{ tagName: string }]
}

export default function Posts() {
	// Достаем посты и функцию для замены состояние Scroll из Store
	const posts = usePostsStore(useCallback(({ posts }) => posts, []))
	const setScrolling = usePostsStore(({ setScrolling }) => setScrolling)
	const isLoading = usePostsStore(({ loading }) => loading)

	// Состояние для Scroll внутри блока с постами
	const [scrollPosition, setScrollPosition] = useState(0)
	// Ссылка на блок с постами
	const areaRef = useRef<HTMLInputElement>(null)

	if (isLoading) return <section>Loading...</section>

	// Меняем состояние Scroll в Store для того чтобы прятать компонент в Toolbar папка containers
	const handleScroll = (event: React.UIEvent<HTMLElement, UIEvent>) => {
		setScrollPosition(event.currentTarget.scrollTop)

		if (scrollPosition < event.currentTarget.scrollTop) {
			setScrolling(true)
		} else {
			setScrolling(false)
		}
	}

	return (
		<PostsArea ref={areaRef} onScroll={handleScroll}>
			{posts
				.map((post: TypePost) => {
					return (
						<Post
							key={post.id}
							id={post.id}
							time={post.time}
							title={post.title}
							body={post.body}
							tags={post.tags}
						/>
					)
				})
				.reverse()}
		</PostsArea>
	)
}

const PostsArea = styled.section`
	flex: 1 1 auto;
	overflow-y: scroll;

	-ms-overflow-style: none; /* Internet Explorer 10+ */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
`
