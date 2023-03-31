import { useCallback } from 'react'

// store
import { usePostsStore } from '../store/postsStore'

// компоненты
import { Toolbars } from '../containers/toolbars'
import { CarouselTags } from '../components/carouselTags'
import { PostList } from '../containers/postList'

const Home = () => {
	const posts = usePostsStore(useCallback(({ posts }) => posts, []))

	return (
		<>
			<Toolbars />
			<CarouselTags />
			<PostList posts={posts} />
		</>
	)
}

export { Home }
