import { createBrowserRouter, Outlet } from 'react-router-dom'

import { Home } from '../pages/home'
import { CreatePost } from '../pages/createpost'
import { PostPage } from '../pages/postpage'
import { Notfound } from '../pages/notfound'

import { Header } from '../containers/header'
import { Footer } from '../containers/footer'
import { Signup } from '../containers/signUp'
import { BehindMenu } from '../containers/behindMenu'
import { Main } from '../containers/layout/styled'

const routesConfig = createBrowserRouter([
	{
		element: (
			<>
				<BehindMenu />
				{/* //! Вот этот блок Main нужно сделать компонентом который принимает Children */}
				<Main>
					<Header />
					<Outlet />
					<Footer />
				</Main>
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
				path: '/signup/',
				element: <Signup />,
			},
			{
				path: '/settings',
				element: <Notfound />,
			},
			{
				path: '/not-found',
				element: <Notfound />,
			},
			{
				path: '*',
				exact: false,
				element: <Notfound />,
			},
		],
	},
])

export default routesConfig
