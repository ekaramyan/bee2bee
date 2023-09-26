import { ThemeProvider } from '@mui/material/styles'
import { useRouter } from 'next/router'
import theme from '../Theme'
import IndexWrapper from '@/components/UI/index_wrapper'
import Contacts from '@/containers/Contacts'


export default function contacts() {
	const router = useRouter()
	return (
		<ThemeProvider theme={theme}>
			<IndexWrapper tab={'contacts'}>
				<Contacts />
			</IndexWrapper>
		</ThemeProvider>
	)
}
