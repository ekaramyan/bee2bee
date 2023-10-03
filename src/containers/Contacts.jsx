import {
	Box,
	Typography,
	Grid,
	TextField,
	FormControlLabel,
	Checkbox,
} from '@mui/material'
import { styled } from '@mui/material'
import dynamic from 'next/dynamic'
import ReCAPTCHA from 'react-google-recaptcha'
import Wrapper from '@/components/UI/Wrapper'
import useContact from '@/hooks/useContact'
const AuthButton = dynamic(() => import('@/components/UI/AuthButton'))
const Socials = dynamic(() => import('@/components/UI/Socials'))

const FlexBox = styled(Box)`
	display: flex;
	gap: 20px;
	width: 100%;
`

export default function Contacts() {
	const { sendContactForm, loading, error, success } = useContact()
	const handleSubmit = async event => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const data = {
			email: formData.get('email'),
			firstName: formData.get('name'),
			lastName: formData.get('last name'),
			subject: formData.get('subject'),
			text: formData.get('message'),
			isConfirmationSent: formData.get('send_me') === 'on',
		}

		await sendContactForm(data)
	}

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
					onSubmit={handleSubmit}
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
								color='primary'
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
									control={<Checkbox name='send_me' color='primary' />}
									label='Send Me Conformation Email'
								/>
								<AuthButton type='submit'>submit form</AuthButton>
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
