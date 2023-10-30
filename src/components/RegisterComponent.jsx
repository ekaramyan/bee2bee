import {
	Checkbox,
	Box,
	Grid,
	TextField,
	Select,
	Typography,
	FormControl,
	InputLabel,
	MenuItem,
	useMediaQuery,
	InputAdornment,
	IconButton,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import useRegister from '@/hooks/useRegister'
const AuthButton = dynamic(() => import('./UI/AuthButton'))
import countryList from '@/countryList'

export default function RegisterComponent() {
	const router = useRouter()
	const { register, loading, error, success } = useRegister()
	const [validationErrors, setValidationErrors] = useState({})
	const [hasAgreedToPrivacyPolicy, setHasAgreedToPrivacyPolicy] =
		useState(false)

	const validateDateOfBirth = date => {
		const birthDate = new Date(date)
		const today = new Date()
		const year1900 = new Date('1900-01-01')
		return birthDate >= year1900 && birthDate <= today
	}

	const validateName = name =>
		/^[a-zA-Z\u0400-\u04FF\u10A0-\u10FF\s]+$/.test(name)

	const validatePassword = password => {
		return (
			password.length >= 8 &&
			/[a-zA-Z]/.test(password) &&
			/[0-9]/.test(password)
		)
	}

	const handleSubmit = async event => {
		event.preventDefault()

		const formData = {
			firstName: event.target.name.value,
			lastName: event.target.lastName.value,
			nickname: event.target.nickname.value,
			country: event.target.country.value,
			phone: String(event.target.phone.value),
			telegram: event.target.telegram.value,
			birth: event.target.date.value,
			email: event.target.email.value,
			password: event.target.password.value,
			passwordConfirmation: event.target.confirm_password.value,
		}
		const errors = {}

		if (!validateDateOfBirth(formData.birth)) {
			errors.birth =
				'Invalid date of birth. It should be between 1900 and today.'
		}

		if (!validateName(formData.firstName)) {
			errors.firstName =
				'Invalid first name. Only alphabets and spaces are allowed.'
		}

		if (!validateName(formData.lastName)) {
			errors.lastName =
				'Invalid last name. Only alphabets and spaces are allowed.'
		}

		if (!validateName(formData.nickname)) {
			errors.nickname =
				'Invalid nickname. Only alphabets and spaces are allowed.'
		}

		if (!validatePassword(formData.password)) {
			errors.password =
				'Password must be at least 8 characters long, with at least one digit and one letter.'
		}

		if (formData.password !== formData.passwordConfirmation) {
			errors.password = 'Passwords do not match.'
		}

		if (!hasAgreedToPrivacyPolicy) {
			errors.checkbox = 'You must agree to the privacy policy.'
		}

		if (Object.keys(errors).length > 0) {
			setValidationErrors(errors)
			return
		}

		register(formData)
	}
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	const handlePasswordToggle = () => {
		setShowPassword(prevShow => !prevShow)
	}

	const handleConfirmPasswordToggle = () => {
		setShowConfirmPassword(prevShow => !prevShow)
	}
	const isMobile = useMediaQuery('@media(max-width:1300px)')
	return (
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
				<Box
					item
					xs={12}
					style={{
						display: 'flex',
						gap: isMobile ? 5 : 20,
						width: '100%',
						flexDirection: isMobile ? 'column' : 'row',
					}}
				>
					<TextField
						label='Name'
						variant='standard'
						fullWidth
						type='text'
						name='name'
					/>
					<TextField
						label='Last Name'
						variant='standard'
						fullWidth
						type='text'
						name='lastName'
					/>
				</Box>
				<Box
					item
					xs={12}
					style={{
						display: 'flex',
						gap: isMobile ? 5 : 20,

						width: '100%',
						flexDirection: isMobile ? 'column' : 'row',
					}}
				>
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
				<Box
					item
					xs={12}
					style={{
						display: 'flex',
						gap: isMobile ? 15 : 20,
						width: '100%',
						flexDirection: isMobile ? 'column' : 'row',
					}}
				>
					<TextField
						label='Your Phone'
						variant='standard'
						fullWidth
						type='tel'
						name='phone'
					/>
					<FormControl fullWidth variant='standard'>
						<InputLabel htmlFor='country-select'>Your Country</InputLabel>
						<Select label='Your Country' id='country-select' name='country'>
							{countryList.map(country => (
								<MenuItem key={country.code} value={country.name}>
									{country.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>
				<Box
					item
					xs={12}
					style={{
						display: 'flex',
						gap: isMobile ? 5 : 20,
						marginTop: isMobile ? 10 : 0,
						width: '100%',
						height: '100%',
						flexDirection: isMobile ? 'column' : 'row',
					}}
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
						label='Telegram'
						variant='standard'
						fullWidth
						type='text'
						name='telegram'
					/>
				</Box>
				<Box
					item
					xs={12}
					style={{
						display: 'flex',
						gap: isMobile ? 5 : 20,
						width: '100%',
						height: '100%',
						flexDirection: isMobile ? 'column' : 'row',
					}}
				>
					<TextField
						label='Password'
						variant='standard'
						fullWidth
						type={showPassword ? 'text' : 'password'}
						name='password'
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton onClick={handlePasswordToggle}>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<TextField
						label='Confirm Password'
						variant='standard'
						fullWidth
						type={showConfirmPassword ? 'text' : 'password'}
						name='confirm_password'
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton onClick={handleConfirmPasswordToggle}>
										{showConfirmPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</Box>
				<Box
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
						flex: 1,
						flexDirection: isMobile ? 'column' : 'row',
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
							width: isMobile ? '100%' : '50%',
							gap: 10,
						}}
					>
						<Box style={{ display: 'flex', alignItems: 'center' }}>
							<Checkbox
								name='confirm'
								color='primary'
								checked={hasAgreedToPrivacyPolicy}
								onChange={e => setHasAgreedToPrivacyPolicy(e.target.checked)}
							/>
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
			{validationErrors.birth && <div>{validationErrors.birth}</div>}
			{validationErrors.firstName && <div>{validationErrors.firstName}</div>}
			{validationErrors.lastName && <div>{validationErrors.lastName}</div>}
			{validationErrors.nickname && <div>{validationErrors.nickname}</div>}
			{validationErrors.password && <div>{validationErrors.password}</div>}
			{validationErrors.checkbox && <div>{validationErrors.checkbox}</div>}
			{error && <div>{error}</div>}
			{success && (
				<div>
					Successfully registered! Confirm your email address, then you can
					enter your account
				</div>
			)}
		</Box>
	)
}
