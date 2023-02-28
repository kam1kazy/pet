import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import routesConfig from './routes/routesConfig'

import Header from './containers/header'
import PreLoader from './pages/preloader'

import './template/styles/index.scss'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

root.render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Header />
			<RouterProvider router={routesConfig} fallbackElement={<PreLoader />} />
		</QueryClientProvider>
	</StrictMode>
)
