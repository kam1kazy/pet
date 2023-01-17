import Alerts from './components/toolbar/alerts'
import Menu from './components/toolbar/menu'
import Settings from './components/toolbar/settings'
import Search from './components/toolbar/search'
import Bookmark from './components/toolbar/bookmark'

function App() {
	return (
		<main>
			<h1>TRAP</h1>
			<Alerts />
			<Menu />
			<Settings />
			<Search />
			<Bookmark />
		</main>
	)
}

export default App
