import { useCallback } from 'react'
import { usePostsStore } from '../../store/postsStore'

// Компоненты
import Post from '../../components/post'
// Стили
import styled from 'styled-components'

export default function Posts() {
	const posts = usePostsStore(useCallback(({ posts }) => posts, []))
	const isLoading = usePostsStore((state) => state.loading)

	if (isLoading) return <section>Loading...</section>

	type TypePost = {
		id: number
		time: string
		title: string
		body: string
		tags?: [{ tagName: string }]
	}

	return (
		<PostsArea>
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
