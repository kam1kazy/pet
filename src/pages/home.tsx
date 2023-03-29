import { useCallback } from 'react'

// store
import { usePostsStore } from '../store/postsStore'

// компоненты
import Toolbars from '../containers/toolbar'
import CarouselTags from '../components/carouselTags'
import Posts from '../containers/posts'

export default function App() {
	// usePostsStore.getState().fetchPosts()
	const posts = usePostsStore(useCallback(({ posts }) => posts, []))

	console.log(posts)

	return (
		<>
			<Toolbars />
			<CarouselTags />
			<Posts posts={posts} />
		</>
	)
}
