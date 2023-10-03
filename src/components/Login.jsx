import {
	Box,
	Checkbox,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@mui/material'
import useLogin from '@/hooks/useLogin'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import AuthButton from './UI/AuthButton'
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

export default function Login({ toggleOpen, isLoginOpen }) {
	const { login, refreshToken, loading, error, success } = useLogin()

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
						top: '10%',
						color: isLoginOpen ? '#E06B00' : '#1B170F',
						textShadow: isLoginOpen
							? '1px 1px 2px #1B170F'
							: '1px 1px 2px #E06B00',
					}}
				>
					Members Login
				</Typography>
			</div>
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
						flex: '3',
						flexDirection: 'column',
						gap: 10,
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
							{/* <ReCAPTCHA sitekey='*' theme='light' size='compact' /> */}
						</Grid>

						<Grid
							item
							style={{ display: 'flex', flexDirection: 'column', width: '50%' }}
						>
							<FormControlLabel
								control={<Checkbox name='remember' color='primary' />}
								label='Remember me'
							/>
							<AuthButton type='submit'>Login</AuthButton>
						</Grid>
					</Box>

					<Grid item xs={12} style={{ display: 'flex', justifyContent: 'end' }}>
						<Typography variant='body2'>
							<Link href='#'>Forgot your password?</Link>
						</Typography>
					</Grid>
				</form>
				{error && <div>{error}</div>}
				{success && <div>Successfully signed in!</div>}
			</Box>
		</div>
	)
}
