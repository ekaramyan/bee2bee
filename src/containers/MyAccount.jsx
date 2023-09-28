import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Wrapper from '../components/UI/Wrapper'
import Account from '@/components/Account'
import EditAccount from '@/components/EditAccount'

export default function MyAccount() {
	const [activeComponent, setActiveComponent] = useState('Account')
	const handleEditClick = () => {
		setActiveComponent('EditAccount')
	}
	// const handleCloseClick = () => {
	// 	setActiveComponent('Account')
	// }

	return (
		<Wrapper>
			<Typography variant='block_header'>My Account</Typography>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 30,
				}}
			>
				{activeComponent === 'Account' ? (
					<Account onEditClick={handleEditClick} />
				) : (
					<EditAccount />
				)}
			</Box>
		</Wrapper>
	)
}
