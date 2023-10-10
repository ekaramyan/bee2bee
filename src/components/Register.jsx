import {
	Checkbox,
	Box,
	FormControlLabel,
	Grid,
	TextField,
	Select,
	Typography,
	MenuItem,
} from '@mui/material'
import ReCAPTCHA from 'react-google-recaptcha'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import useRegister from '@/hooks/useRegister'
import AuthButton from './UI/AuthButton'
import countryList from '@/countryList'
import Link from 'next/link'

export default function Register({ toggleOpen, isRegisterOpen }) {
	const router = useRouter()
	const { register, loading, error, success } = useRegister()
	const dispatch = useDispatch()

	const handleSubmit = async event => {
		event.preventDefault()

		const formData = {
			firstName: event.target.name.value,
			lastName: event.target['last name'].value,
			nickname: event.target.nickname.value,
			country: event.target.country.value,
			phone: event.target.phone.value,
			birth: event.target.date.value,
			email: event.target.email.value,
			password: event.target.password.value,
			passwordConfirmation: event.target.password.value,
		}

		register(formData)
	}
	return (
		<div
			style={{
				padding: '2% 20px',
				height: '100%',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Box
				style={{
					width: '75%',
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
						width: '100%',
						display: 'flex',
						flex: '3',
						flexDirection: 'column',
						gap: 5,
					}}
				>
					<Box item xs={12} style={{ display: 'flex', gap: 20, width: '100%' }}>
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
					<Box item xs={12} style={{ display: 'flex', gap: 20, width: '100%' }}>
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
						>
							{countryList.map(country => (
								<MenuItem key={country.code} value={country.name}>
									{country.name}
								</MenuItem>
							))}
						</Select>
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
							InputLabelProps={{ shrink: true }}
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

						<Grid
							item
							style={{
								display: 'flex',
								flexDirection: 'column',
								width: '50%',
								gap: 10,
							}}
						>
							<Box style={{ display: 'flex', alignItems: 'center' }}>
								<Checkbox name='remember' color='primary' />
								<Typography variant='forgot'>
									Agree with{' '}
									<Link
										href='privacy-policy'
										style={{ color: '#E06B00', textDecoration: 'underline' }}
									>
										Privacy policy
									</Link>
								</Typography>
							</Box>
							<AuthButton type='submit'>Register</AuthButton>
						</Grid>
					</Box>
				</form>
				{error && <div>{error}</div>}
				{success && (
					<div>
						Successfully registered! Confirm your email address, then you can
						enter you account
					</div>
				)}
			</Box>
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
						transform: 'rotate(90deg)  translateY(30%) translateX(50%)',
						top: '-20%',
						right: 0,
						color: isRegisterOpen ? '#E06B00' : '#1B170F',
						textShadow: isRegisterOpen
							? '1px 1px 2px #1B170F'
							: '1px 1px 2px #E06B00',
					}}
				>
					NEw Members
				</Typography>
			</div>
		</div>
	)
}
