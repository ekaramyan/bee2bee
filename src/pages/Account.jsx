import React, { Fragment } from 'react'
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import theme from '../Theme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainPage from '@/containers/MainPage'
import Contacts from '@/containers/Contacts'
import Rules from '@/containers/Rules'
import MyCells from '../components/MyCells'
import RealCells from '../components/RealCells'
import register from '@/assets/img/auth_bg.svg'
import login from '@/assets/img/login_bg.svg'
import background from '../assets/img/background.png'

export default function Account() {
	const [activeComponent, setActiveComponent] = useState('MainPage')
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	const [isRegisterOpen, setIsRegisterOpen] = useState(false)

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
					<Container>
						<Header />
					</Container>
					<div
						style={{
							position: 'absolute',
							top: 0,
							right: isLoginOpen ? 0 : '-35%',
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
							left: isRegisterOpen ? 0 : '-35%',
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
