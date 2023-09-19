import {
	Box,
	Checkbox,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@mui/material'
import ReCAPTCHA from 'react-google-recaptcha'
import AuthButton from './UI/AuthButton'

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

export default function Login({ toggleOpen }) {
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
				<Typography variant='auth_head' gutterBottom onClick={toggleOpen}>
					Members Login
				</Typography>
			</div>
			<form
				action=''
				method='post'
				style={{ display: 'flex', flex: '3', flexDirection: 'column' }}
			>
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
							<ReCAPTCHA sitekey='*' theme='light' size='compact' />
						</Grid>

						{/* Login Button */}
						<Grid
							item
							style={{ display: 'flex', flexDirection: 'column', width: '50%' }}
						>
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
