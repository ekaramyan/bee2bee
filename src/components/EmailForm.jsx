import {
	Box,
	Grid,
	Typography,
	TextField,
	FormControlLabel,
	Checkbox,
} from '@mui/material'
import dynamic from 'next/dynamic'
const AuthButton = dynamic(() => import('./UI/AuthButton'))
import useReset from '@/hooks/useReset'

export default function ChangePassForm() {
	const { loading, error, success, getEmail, sendNewPass } = useReset()

	const handleSubmit = async event => {
		event.preventDefault()
		getEmail(event.target.email.value)
	}

	return (
		<>
			<Box
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 20,
					padding: '20px 10px',
				}}
			>
				<form
					onSubmit={handleSubmit}
					style={{
						display: 'flex',
						flex: '3',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 20,
					}}
				>
					<Box item xs={12} style={{ display: 'flex', gap: 20 }}>
						<TextField
							label='Email'
							variant='standard'
							fullWidth
							type='email'
							name='email'
						/>
					</Box>

					<Grid
						item
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: '100%',
							alignSelf: 'end',
						}}
					>
						<AuthButton type='submit'>Send email</AuthButton>
					</Grid>
				</form>
				{error && <div>{error}</div>}
				{success && <div>Successfully changed password!</div>}
			</Box>
		</>
	)
}
