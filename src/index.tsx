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
import Header from './containers/header'
import PreLoader from './pages/preloader'

// import './template/styles/index.scss'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement)

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
				<Header />
				<RouterProvider router={routesConfig} fallbackElement={<PreLoader />} />
			</ThemeProvider>
		</QueryClientProvider>
	</StrictMode>
)
