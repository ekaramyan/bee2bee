import {
	Box,
	Typography,
	Grid,
	TextField,
	Select,
	FormControlLabel,
	Checkbox,
} from '@mui/material'
import ReCAPTCHA from 'react-google-recaptcha'
import AuthButton from '@/components/UI/AuthButton'
import Wrapper from '@/components/UI/Wrapper'

export default function Contacts() {
	return (
		<Wrapper>
			<Typography
				variant='block_header'
				style={{
					padding: '10px',
					borderBottom: '1px solid #E06B00',
					alignSelf: 'start',
				}}
			>
				Contact us
			</Typography>
			<Typography>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
				sodales sapien. Aenean consectetur, orci et condimentum facilisis, leo
				felis ultrices dui, vel cursus est tortor pretium ex.
			</Typography>
			<Grid
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					justifyContent: 'space-between',
				}}
			>
				<form
					action=''
					method='post'
					style={{
						display: 'grid',
						flex: '1',
						flexDirection: 'column',
						width: '100%',
					}}
				>
					<Grid container gap={1}>
						{/* 1st row: Email and Password */}
						<Box
							item
							xs={12}
							style={{ display: 'flex', gap: 20, width: '100%' }}
						>
							<TextField
								label='First Name'
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
						<Box
							item
							xs={12}
							style={{ display: 'flex', gap: 20, width: '100%' }}
						>
							<TextField
								label='Email'
								variant='standard'
								fullWidth
								type='email'
								name='email'
							/>
							<TextField
								label='Subject'
								variant='standard'
								fullWidth
								type='text'
								name='subject'
							/>
						</Box>
						<Box
							item
							xs={12}
							style={{ display: 'flex', gap: 20, width: '100%' }}
						>
							<TextField
								label='Your Message Text'
								name='message'
								fullWidth
								variant='standard'
								color='secondary'
								multiline
								rows={3}
								required
							></TextField>
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
								<AuthButton type='submit'>Register</AuthButton>
							</Grid>
						</Box>
					</Grid>
				</form>
				<Box>
					<Typography variant=''> Social MEdia</Typography>
				</Box>
			</Grid>
		</Wrapper>
	)
}
