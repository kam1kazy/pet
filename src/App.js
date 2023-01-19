import Header from './containers/header'
import Toolbars from './containers/toolbars'
import CarouselTags from './components/carouselTags'
import Posts from './containers/posts'
import Footer from './containers/footer'
import { usePostsStore } from './store/postsStore'

function App() {
	usePostsStore.getState().fetchPosts()

	return (
		<>
			<Header />
			<Toolbars />
			<CarouselTags />
			<Posts />
			<Footer />
		</>
	)
}

export default App
