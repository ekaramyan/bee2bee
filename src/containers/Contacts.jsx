import {
	Box,
	Typography,
	Grid,
	TextField,
	Select,
	FormControlLabel,
	Checkbox,
} from '@mui/material'
import { styled } from '@mui/material'
import ReCAPTCHA from 'react-google-recaptcha'
import AuthButton from '@/components/UI/AuthButton'
import Wrapper from '@/components/UI/Wrapper'
import Socials from '@/components/UI/Socials'

const StyledForm = styled('form')``

const FlexBox = styled(Box)`
	display: flex;
	gap: 20px;
	width: 100%;
`

export default function Contacts() {
	const renderTextField = (label, type, name) => (
		<TextField
			label={label}
			variant='standard'
			fullWidth
			type={type}
			name={name}
		/>
	)

	return (
		<Wrapper>
			<Typography
				variant='block_header'
				sx={{
					padding: '10px',
					borderBottom: '1px solid #E06B00',
					alignSelf: 'start',
				}}
			>
				Contact us
			</Typography>
			<Typography>Lorem ipsum...</Typography>
			<Grid
				sx={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					justifyContent: 'space-between',
				}}
			>
				<form
					style={{
						display: 'flex',
						flex: 1,
						flexDirection: 'column',
						width: '100%',
					}}
				>
					<Grid container gap={1}>
						<FlexBox item xs={12}>
							{renderTextField('First Name', 'name', 'name')}
							{renderTextField('Last Name', 'last name', 'last name')}
						</FlexBox>
						<FlexBox item xs={12}>
							{renderTextField('Email', 'email', 'email')}
							{renderTextField('Subject', 'text', 'subject')}
						</FlexBox>
						<FlexBox item xs={12}>
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
						</FlexBox>
						<Box
							sx={{
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
								sx={{
									display: 'flex',
									flexDirection: 'column',
									width: '50%',
									gap: 2,
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
				<Box
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Socials />
				</Box>
			</Grid>
		</Wrapper>
	)
}
