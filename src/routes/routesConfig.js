import { createBrowserRouter, Outlet } from 'react-router-dom'
import Home from '../pages/home'
import CreatePost from '../pages/createpost'
import Header from '../containers/header'
import Footer from '../containers/footer'

const routesConfig = createBrowserRouter([
	{
		element: (
			<section>
				<Header />
				<Outlet />
				<Footer />
			</section>
		),
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/createpost',
				element: <CreatePost />,
			},
			{
				path: '/posts',
				// element: <Home />,
			},
			{
				path: '/posts/:id/',
				// element: <Home />,
			},
			{
				path: '/settings',
				// element: <Home />,
			},
			{
				path: '/not-found',
				// element: <Home />,
			},
			{
				path: '*',
				exact: false,
				//    element: NotFoundPage
			},
		],
	},
])

export default routesConfig
