import { Box, Grid, Typography, TextField } from '@mui/material'
import Link from 'next/link'
import AuthButton from './UI/AuthButton'

export default function ChangePassForm({
	isChange,
	handleSubmit,
	error,
	success,
	invalid,
}) {
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
					<Box item xs={12} style={{ display: 'flex', gap: 20 }}>
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
							width: '50%',
							alignSelf: 'end',
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
								justifyContent: 'center',
								alignSelf: 'end',
							}}
						>
							<Typography variant='forgot'>
								Forgot Your Password?
								<Link href='/auth/reset' style={{ color: '#E06B00' }}>
									Reset It Here
								</Link>
							</Typography>
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
