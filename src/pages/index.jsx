import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'

import MainPage from '@/containers/MainPage'
import contacts from '@/pages/contacts'
import rules from '@/pages/rules'
import IndexWrapper from '@/components/UI/index_wrapper'

export default function index() {

	return (
		<ThemeProvider theme={theme}>
			<IndexWrapper>
				<MainPage />
			</IndexWrapper>
		</ThemeProvider>
	)
}
