import '../styles/reset.css'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'

import theme from '../Theme'
import IndexWrapper from '@/components/UI/index_wrapper'
import store from '@/store'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<IndexWrapper>
					<Component {...pageProps} />
				</IndexWrapper>
			</Provider>
		</ThemeProvider>
	)
}

export default MyApp
