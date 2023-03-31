import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Home } from '../pages/home'
import { CreatePost } from '../pages/createpost'
import { Header } from '../containers/header'
import { Footer } from '../containers/footer'
import { PostPage } from '../pages/postpage'

const routesConfig = createBrowserRouter([
	{
		element: (
			<>
				<Header />
				<Outlet />
				<Footer />
			</>
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
				path: '/createpost/:id',
				element: <CreatePost />,
			},
			{
				path: '/posts',
				element: <Home />,
			},
			{
				path: '/posts/:id/',
				element: <PostPage />,
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
