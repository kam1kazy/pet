import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { usePostsStore } from '../store/postsStore'
import {
	Tags,
	Message,
	Title,
	Content,
	Time,
	Header,
} from '../components/postItem/styled'

type QuizParams = {
	id: string
}

const PostPage: React.FC = () => {
	const { id } = useParams<QuizParams>()
	const isLoading = usePostsStore((state) => state.loading)
	const post = usePostsStore(
		useCallback(
			({ posts }) =>
				posts.find((post: { id: number | undefined }) => post.id === Number(id)),
			[id]
		)
	)

	if (isLoading) return <section>Loading...</section>

	return (
		<>
			<Header>
				<Tags>
					<ul>
						{post.tags?.map((tags: { tagName: string }, id: number) => {
							return <li key={id}>#{tags.tagName}</li>
						})}
					</ul>
				</Tags>
				<Time>
					<p>{post.time ? post.time : ''}</p>
				</Time>
			</Header>

			<Content>
				<Title>{post.title}</Title>
				<br />
				<Message>{post.body}</Message>
			</Content>
		</>
	)
}

export { PostPage }
