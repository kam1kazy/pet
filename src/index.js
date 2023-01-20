import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import Header from './containers/header'

import './template/styles/index.scss'
import routesConfig from './routes/routesConfig'

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
			<RouterProvider
				router={routesConfig}
				//  fallbackElement={<SpinnerOfDoom />}
			/>
		</QueryClientProvider>
	</StrictMode>
)
