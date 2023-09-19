import {
	Checkbox,
	Box,
	FormControlLabel,
	Grid,
	TextField,
	Select,
	Typography,
} from '@mui/material'
import ReCAPTCHA from 'react-google-recaptcha'
import AuthButton from './UI/AuthButton'

export default function Register({ toggleOpen }) {
	return (
		<div
			style={{
				padding: '120px 20px',
				height: '100%',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<form
				action=''
				method='post'
				style={{ display: 'flex', flex: '3', flexDirection: 'column' }}
			>
				<Grid container gap={1}>
					{/* 1st row: Email and Password */}
					<Box item xs={12} style={{ display: 'flex', gap: 20 }}>
						<TextField
							label='Name'
							variant='standard'
							fullWidth
							type='name'
							name='name'
						/>
						<TextField
							label='Last Name'
							variant='standard'
							fullWidth
							type='last name'
							name='last name'
						/>
					</Box>
					<Box item xs={12} style={{ display: 'flex', gap: 20 }}>
						<TextField
							label='Nickname'
							variant='standard'
							fullWidth
							type='nickname'
							name='nickname'
						/>
						<TextField
							label='Email'
							variant='standard'
							fullWidth
							type='email'
							name='email'
						/>
					</Box>
					<Box item xs={12} style={{ display: 'flex', gap: 20, width: '100%' }}>
						<TextField
							label='Your Phone'
							variant='standard'
							fullWidth
							type='phone'
							name='phone'
						/>
						<Select
							label='Your Country'
							variant='standard'
							fullWidth
							type='select'
							name='country'
						/>
					</Box>
					<Box
						item
						xs={12}
						style={{ display: 'flex', gap: 20, width: '100%', height: '100%' }}
					>
						<TextField
							label='Date of Birth'
							variant='standard'
							fullWidth
							type='date'
							name='date'
							slotProps={{ textField: { placeholder: 'tt.mm.jjjj' } }}
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
								{/* <ReCAPTCHA sitekey='*' theme='light' size='compact' /> */}
							</Typography>
						</Grid>

						{/* Login Button */}
						<Grid
							item
							style={{
								display: 'flex',
								flexDirection: 'column',
								width: '50%',
								gap: 10,
							}}
						>
							<FormControlLabel
								control={<Checkbox name='remember' color='primary' />}
								label='I Agree with'
							/>
							<AuthButton text='Register' type='submit' />
						</Grid>
					</Box>
				</Grid>
			</form>
			<div
				style={{
					flex: '1',
					position: 'relative',
					height: '100%',
				}}
			>
				<Typography
					variant='auth_head'
					gutterBottom
					onClick={toggleOpen}
					style={{
						transform: 'rotate(90deg)  translateY(35%)',
						top: '-25%',
						right: 0,
					}}
				>
					NEw Members
				</Typography>
			</div>
		</div>
	)
}
