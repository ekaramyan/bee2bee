import { useRouter } from 'next/router'
import IndexWrapper from '@/components/UI/index_wrapper'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'
import Rules from '@/containers/Rules'

export default function rules() {
	const router = useRouter()
	return (
		<>
			<ThemeProvider theme={theme}>
				<IndexWrapper tab={'rules'}>
					<Rules />
				</IndexWrapper>
			</ThemeProvider>
		</>
	)
}