import Settings from './components/toolbars/settings'
import Search from './components/toolbars/search'
import Bookmark from './components/toolbars/bookmark'

import Header from './containers/header'

function App() {
	return (
		<>
			<Header />

			<Search />
			<Settings />
			<Bookmark />
		</>
	)
}

export default App
