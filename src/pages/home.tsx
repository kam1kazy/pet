import Toolbars from '../containers/toolbar'
import CarouselTags from '../components/carouselTags'
import Posts from '../containers/posts'
import { usePostsStore } from '../store/postsStore'

export default function App() {
	usePostsStore.getState().fetchPosts()

	return (
		<>
			<Toolbars />
			<CarouselTags />

			<Posts />
		</>
	)
}
