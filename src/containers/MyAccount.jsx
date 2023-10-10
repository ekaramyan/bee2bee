import { useRouter } from 'next/router'
import { Box, Typography } from '@mui/material'
import Wrapper from '../components/UI/Wrapper'
import Account from '@/components/Account'

export default function MyAccount({ data }) {
	const router = useRouter()
	const handleEditClick = () => {
		router.push('account-settings')
	}
	return (
		<Wrapper header={'My Account'}>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 30,
				}}
			>
				<Account onEditClick={handleEditClick} data={data.data} />
			</Box>
		</Wrapper>
	)
}
