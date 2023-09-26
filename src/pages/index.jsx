import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'

import MainPage from '@/containers/MainPage'
import contacts from '@/pages/contacts'
import rules from '@/pages/rules'
import IndexWrapper from '@/components/UI/index_wrapper'

export default function index() {
	const router = useRouter()

	let ActiveComponent
	switch (router.pathname) {
		case '/contacts':
			ActiveComponent = contacts
			break
		case '/rules':
			ActiveComponent = rules
			break
		default:
			ActiveComponent = MainPage
			break
	}

	return (
		<ThemeProvider theme={theme}>
			<IndexWrapper tab={ActiveComponent.toString()}>
				<ActiveComponent />
			</IndexWrapper>
		</ThemeProvider>
	)
}
