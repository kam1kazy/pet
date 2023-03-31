import { useCallback } from 'react'

// store
import { usePostsStore } from '../store/postsStore'

// компоненты
import { ToolBars } from '../containers/toolbar'
import { CarouselTags } from '../components/carouselTags'
import { PostList } from '../containers/postlist'

const Home = () => {
	const posts = usePostsStore(useCallback(({ posts }) => posts, []))

	return (
		<>
			<ToolBars />
			<CarouselTags />
			<PostList posts={posts} />
		</>
	)
}

export { Home }
