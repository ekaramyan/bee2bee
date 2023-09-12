import React, { Fragment } from 'react'
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainPage from '@/containers/MainPage'
import Contacts from '@/containers/Contacts'
import Rules from '@/containers/Rules'
import background from '../assets/img/background.png'

export default function index() {
	const [activeComponent, setActiveComponent] = useState('MainPage')
	return (
		<ThemeProvider theme={theme}>
			<div
				style={{
					background: `url(${background.src})`,
					height: '100dvh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Header />

				{activeComponent === 'MainPage' && <MainPage />}
				{activeComponent === 'Contacts' && <Contacts />}
				{activeComponent === 'Rules' && <Rules />}

				<Footer
					onContactsClick={() => setActiveComponent('Contacts')}
					onRulesClick={() => setActiveComponent('Rules')}
					onMainPageClick={() => setActiveComponent('MainPage')}
				/>
			</div>
		</ThemeProvider>
	)
}
