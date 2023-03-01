import { useCallback } from 'react'
import { usePostsStore } from '../../store/postsStore'

// Компоненты
import Post from '../../components/post'
// Стили
import styled from 'styled-components'

const PostsArea = styled.div`
	flex: 1 1 auto;
	overflow-y: scroll;
	-ms-overflow-style: none; /* Internet Explorer 10+ */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
`

export default function Posts() {
	const posts = usePostsStore(useCallback(({ posts }) => posts, []))
	const isLoading = usePostsStore((state) => state.loading)

	if (isLoading) return <div>Loading...</div>

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
