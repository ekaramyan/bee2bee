import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'
import IndexWrapper from '@/components/UI/index_wrapper'
import Contacts from '@/containers/Contacts'


export default function contacts() {
	return (
		<ThemeProvider theme={theme}>
			<IndexWrapper>
				<Contacts />
			</IndexWrapper>
		</ThemeProvider>
	)
}
