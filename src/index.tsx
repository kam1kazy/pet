import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import routesConfig from './routes/routesConfig'
import { PreLoader } from './pages/preloader'

// Styled
import 'reset-css'
import { GlobalStyle } from './template/styles'
import { theme } from './template/styles/_variable'

// Store
import { usePostsStore } from './store/postsStore'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement)

// Отправляем запрос для загрузки постов с сервера
usePostsStore.getState().fetchPosts()

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
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<RouterProvider router={routesConfig} fallbackElement={<PreLoader />} />
			</ThemeProvider>
		</QueryClientProvider>
	</StrictMode>
)
