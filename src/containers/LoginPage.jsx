import { Box } from '@mui/material'
import Wrapper from '../components/UI/Wrapper'
import LoginComponent from '@/components/loginComponent'

export default function Login() {
	return (
		<Wrapper header={'Login'}>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 30,
					height: '60vh',
				}}
			>
				<LoginComponent />
			</Box>
		</Wrapper>
	)
}
