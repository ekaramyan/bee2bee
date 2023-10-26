import { Box, Grid, Typography, TextField, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const AuthButton = dynamic(() => import('./UI/AuthButton'))

export default function ChangePassForm({
	isChange,
	handleSubmit,
	error,
	success,
	invalid,
}) {
	const isMobile = useMediaQuery('@media(max-width:1300px)')
	return (
		<>
			<Box
				style={{
					width: '100%',
					height: '90%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 20,
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
					<Box
						item
						xs={12}
						style={{
							display: 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							gap: 20,
						}}
					>
						<TextField
							label='New Password'
							variant='standard'
							fullWidth
							type='password'
							name='password'
						/>
						<TextField
							label='Confirm Password'
							variant='standard'
							fullWidth
							type='password'
							name='passwordConfirmation'
						/>
					</Box>

					<Grid
						item
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: isMobile ? '100%' : '50%',
							alignSelf: isMobile ? 'center' : 'end',
						}}
					>
						<AuthButton type='submit'>Change Password</AuthButton>
					</Grid>

					{isChange && (
						<Grid
							item
							xs={12}
							style={{
								display: 'flex',
								flexDirection: isMobile ? 'column' : 'row',
								justifyContent: 'center',
								alignSelf: 'end',
							}}
						>
							<Typography variant='forgot'>Forgot Your Password?</Typography>
							<Link href='/auth/reset' style={{ color: '#E06B00' }}>
								Reset It Here
							</Link>
						</Grid>
					)}
				</form>
				{error && <div>{error}</div>}
				{success && <div>Successfully changed password!</div>}
				{invalid && <p>{invalid}</p>}
			</Box>
		</>
	)
}
