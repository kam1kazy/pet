import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { usePostsStore } from '../store/postsStore'

type QuizParams = {
	id: string
}

const PostPage = () => {
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
		<div>
			<h1>{post.title}</h1>
			<br />
			<p>{post.body}</p>
		</div>
	)
}

export { PostPage }
