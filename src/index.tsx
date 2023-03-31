import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'
import 'reset-css'

// Styled
import GlobalStyle from './template/styles'
import theme from './template/styles/_variable'
// Store
import { usePostsStore } from './store/postsStore'
import { Layout } from './containers/layout'

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
				<Layout />
			</ThemeProvider>
		</QueryClientProvider>
	</StrictMode>
)
