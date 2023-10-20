import {
	Box,
	Typography,
	Grid,
	TextField,
	FormControlLabel,
	Checkbox,
	useMediaQuery,
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
	const isMobile = useMediaQuery('@media(max-width:1300px)')
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
		<Box
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%',
			}}
		>
			<Wrapper header={'Contact us'}>
				<Typography>Lorem ipsum...</Typography>
				<Grid
					sx={{
						display: isMobile ? 'flex' : 'grid',
						flexDirection: 'column',
						gridTemplateColumns: '1fr 1fr',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingBottom: isMobile && '20%',
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
							<Box
								item
								xs={12}
								style={{
									display: 'flex',
									flexDirection: isMobile ? 'column' : 'row',
									gap: 20,
									width: '100%',
								}}
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
								style={{
									display: 'flex',
									flexDirection: isMobile ? 'column' : 'row',
									gap: 20,
									width: '100%',
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
									label='Subject'
									variant='standard'
									fullWidth
									type='text'
									name='Subject'
								/>
							</Box>
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
									flexDirection: isMobile ? 'column' : 'row',
									alignItems: 'center',
									justifyContent: 'space-between',
									width: '100%',
									flex: 1,
								}}
							>
								<Grid item style={{ display: 'flex', width: '50%' }}>
									<Typography variant='body2'>
										{/* <ReCAPTCHA sitekey='*' theme='light' size='compact' /> */}
									</Typography>
								</Grid>
								<Grid
									item
									sx={{
										display: 'flex',
										flexDirection: 'column',
										width: isMobile ? '100%' : '50%',
										alignItems: isMobile && 'center',
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
					{!isMobile && (
						<Box
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 20,
							}}
						>
							<>
								<Typography variant='level_dark'>Social Media</Typography>
								<Socials width={30} height={30} />
							</>
						</Box>
					)}
				</Grid>
			</Wrapper>
		</Box>
	)
}
