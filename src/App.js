import Header from './containers/header'
import Toolbars from './containers/toolbars'
import CarouselTags from './components/carouselTags'
import Posts from './containers/posts'

import { usePostsStore } from './store/postsStore'

function App() {
	usePostsStore.getState().fetchPosts()

	return (
		<>
			<Header />
			<Toolbars />

			<CarouselTags />

			<Posts />
			<section className='footer'>
				<span>.</span>
			</section>
		</>
	)
}

export default App
