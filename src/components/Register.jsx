import {
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@mui/material'

export default function Register({ toggleOpen }) {
	return (
		<div
			style={{
				padding: '120px 20px',
				height: '100%',
				width: '100%',
				display: 'flex',
			}}
		>
			<form action='' method='post'>
				<Grid container spacing={2}>
					{/* 1st row: Email and Password */}
					<Grid item xs={12}>
						<TextField
							label='Email'
							variant='outlined'
							fullWidth
							type='email'
							name='email'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label='Password'
							variant='outlined'
							fullWidth
							type='password'
							name='password'
						/>
					</Grid>

					{/* 2nd row: CAPTCHA and 'Remember Me' Checkbox */}
					<Grid container item xs={12} spacing={2}>
						<Grid item xs={6}>
							<Typography variant='body2'>
								{/* Your CAPTCHA component here */}
								CAPTCHA
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								control={<Checkbox name='remember' color='primary' />}
								label='Remember me'
							/>
						</Grid>
					</Grid>

					{/* Login Button */}
					<Grid item xs={12}>
						<Button variant='contained' color='primary' type='submit'>
							Login
						</Button>
					</Grid>

					{/* 'Forgot your password' Link */}
					<Grid item xs={12}>
						<Typography variant='body2'>
							<a href='#'>Forgot your password?</a>
						</Typography>
					</Grid>
				</Grid>
			</form>
			<Typography
				variant='auth_head'
				gutterBottom
				onClick={toggleOpen}
				style={{ transform: 'rotate(90deg)' }}
			>
				NEw Members
			</Typography>
		</div>
	)
}
