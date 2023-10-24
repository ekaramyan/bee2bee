import {
	Box,
	Checkbox,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
	useMediaQuery,
} from '@mui/material'
import dynamic from 'next/dynamic'
import useLogin from '@/hooks/useLogin'
import ReCAPTCHA from 'react-google-recaptcha'
const AuthButton = dynamic(() => import('./UI/AuthButton'))
import Link from 'next/link'

// const recaptchaRef = React.createRef();
// ...
// onSubmit = () => {
//   const recaptchaValue = recaptchaRef.current.getValue();
//   this.props.onSubmit(recaptchaValue);
// }
// render() {
//   return (
//     <form onSubmit={this.onSubmit} >
//       <ReCAPTCHA
//         ref={recaptchaRef}
//         sitekey="Your client site key"
//         onChange={onChange}
//       />
//     </form>
//   )
// }

export default function LoginComponent() {
	const { login, loading, error, success } = useLogin()

	const handleSubmit = async event => {
		event.preventDefault()
		const formData = {
			grant_type: '',
			username: event.target.email.value,
			password: event.target.password.value,
			scope: '',
			client_id: '',
			client_secret: '',
		}

		login(formData)
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
					display: 'flex',
					flexDirection: isMobile ? 'column' : 'row',
					flex: '3',
					flexDirection: 'column',
					gap: 10,
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
						flexDirection: isMobile ? 'column' : 'row',
						width: '100%',
						flex: 1,
					}}
				>
					<Grid item>
						{/* <ReCAPTCHA sitekey='*' theme='light' size='compact' /> */}
					</Grid>

					<Grid
						item
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: isMobile ? '100%' : '50%',
						}}
					>
						<FormControlLabel
							control={<Checkbox name='remember' color='primary' />}
							label='Remember me'
						/>
						<AuthButton type='submit'>Login</AuthButton>
					</Grid>
				</Box>

				<Grid
					item
					xs={12}
					style={{ display: 'flex', justifyContent: 'center' }}
				>
					<Typography variant='forgot'>
						Forgot Your Password?
						<Link href='/auth/reset' style={{ color: '#E06B00' }}>
							Reset It Here
						</Link>
					</Typography>
				</Grid>
			</form>
			{error && <div>{error}</div>}
			{success && <div>Successfully signed in!</div>}
		</Box>
	)
}
