import React from 'react'
import { Container } from '@mui/material'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../Theme'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import background from '../../assets/img/background.png'
import MyCells from '../../components/MyCells'
import RealCells from '../../components/RealCells'
import register from '@/assets/img/auth_bg.svg'
import login from '@/assets/img/login_bg.svg'

const LoggedInWrapper = ({ children, ...props }) => {
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	const [isRegisterOpen, setIsRegisterOpen] = useState(false)
	const router = useRouter()

	const toggleLogin = () => {
		setIsLoginOpen(!isLoginOpen)
	}
	const toggleRegister = () => {
		setIsRegisterOpen(!isRegisterOpen)
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<div
					style={{
						overflow: 'hidden',
						position: 'relative',
						background: `url(${background.src}) no-repeat center / cover`,
						height: '100dvh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Container
						style={{
							display: 'flex',
							flexDirection: 'column',
							height: '100%',
							justifyContent: 'space-between',
						}}
					>
						<Header loggedIn={true} />
						{children}
						<Footer
							onContactsClick={() => router.push('contacts')}
							onRulesClick={() => router.push('rules')}
							onMainPageClick={() => router.push('/')}
						/>
					</Container>
					<div
						style={{
							position: 'absolute',
							top: 0,
							right: isLoginOpen ? 0 : '-40%',
							width: '45%',
							height: '100%',
							background: `url(${login.src}) no-repeat center / cover`,

							transition: 'right 0.3s ease-in-out',
						}}
					>
						<MyCells toggleOpen={toggleLogin} />
					</div>
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: isRegisterOpen ? 0 : '-40%',
							width: '45%',
							height: '100%',
							background: `url(${register.src}) no-repeat center / cover`,

							transition: 'left 0.3s ease-in-out',
						}}
					>
						<RealCells toggleOpen={toggleRegister} />
					</div>
				</div>
			</ThemeProvider>
		</>
	)
}

export default LoggedInWrapper