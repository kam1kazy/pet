import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import 'reset-css'

// Router
import routesConfig from './routes/routesConfig'
// Styled
import GlobalStyle from './template/styles'
import theme from './template/styles/_variable'
// Components
import { PreLoader } from './pages/preloader'
// Store
import { usePostsStore } from './store/postsStore'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement)

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

// Отправляем запрос для загрузки постов с сервера
usePostsStore.getState().fetchPosts()

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
