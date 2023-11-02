import '../styles/reset.css'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import Head from 'next/head'
import theme from '../Theme'
import IndexWrapper from '@/components/UI/index_wrapper'
import store from '@/store'

function MyApp({ Component, pageProps }) {
	const captchaKey = process.env.CAPTCHA_KEY
	return (
		<>
			<Head>
				<title>Bee2Bee</title>
				<script
					src='https://www.google.com/recaptcha/api.js'
					data-sitekey={captchaKey}
					async
					defer
				></script>
			</Head>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<IndexWrapper>
						<Component {...pageProps} />
					</IndexWrapper>
				</Provider>
			</ThemeProvider>
		</>
	)
}

export default MyApp
