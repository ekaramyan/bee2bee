import {
	Box,
	Checkbox,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@mui/material'
import AuthButton from './UI/AuthButton'

export default function Login({ toggleOpen }) {
	return (
		<div
			style={{
				padding: '120px 20px',
				height: '100%',
				width: '100%',
				display: 'flex',
			}}
		>
			<Typography variant='auth_head' gutterBottom onClick={toggleOpen}>
				Members Login
			</Typography>
			<form action='' method='post' style={{}}>
				<Grid container gap={2.5}>
					{/* 1st row: Email and Password */}
					<Box item xs={12} style={{ display: 'flex', gap: 20 }}>
						<TextField
							label='Email'
							variant='standard'
							fullWidth
							type='email'
							name='email'
						/>
						<TextField
							label='Password'
							variant='standard'
							fullWidth
							type='password'
							name='password'
						/>
					</Box>

					<Box
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							flex: 1,
						}}
					>
						<Grid item>
							<Typography variant='body2'>
								{/* Your CAPTCHA component here */}
								CAPTCHA
							</Typography>
						</Grid>

						{/* Login Button */}
						<Grid item style={{ display: 'flex', flexDirection: 'column' }}>
							<FormControlLabel
								control={<Checkbox name='remember' color='primary' />}
								label='Remember me'
							/>
							<AuthButton text='Login' type='submit' />
						</Grid>
					</Box>

					{/* 'Forgot your password' Link */}
					<Grid item xs={12} style={{ display: 'flex', justifyContent: 'end' }}>
						<Typography variant='body2'>
							<a href='#'>Forgot your password?</a>
						</Typography>
					</Grid>
				</Grid>
			</form>
		</div>
	)
}
