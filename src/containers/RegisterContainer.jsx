import { Box } from '@mui/material'
import Wrapper from '../components/UI/Wrapper'
import RegisterComponent from '@/components/RegisterComponent'

export default function RegisterContainer() {
	return (
		<Wrapper header={'Register'}>
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
				<RegisterComponent />
			</Box>
		</Wrapper>
	)
}
