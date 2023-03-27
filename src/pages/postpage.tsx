import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { usePostsStore } from '../store/postsStore'

type QuizParams = {
	id: string
}

export default function PostPage() {
	const { id } = useParams<QuizParams>()

	const post = usePostsStore(useCallback(({ post }) => post[id], []))

	const isLoading = usePostsStore((state) => state.loading)
	if (isLoading) return <section>Loading...</section>

	console.log(post)

	return (
		<div>
			<h1>post - {id}</h1>
		</div>
	)
}
