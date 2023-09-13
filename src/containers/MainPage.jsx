import React, { useState } from 'react'
import Image from 'next/image'
import main from '../assets/img/main.png'
import { Typography } from '@mui/material'
import Login from '../components/Login'

export default function MainPage() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)

	const toggleLogin = () => {
		setIsLoginOpen(!isLoginOpen)
	}

	return (
		<div
			style={{
				overflow: 'hidden',
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100%',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					width: '60%',
					margin: '0 auto',
				}}
			>
				<Typography
					variant='main_head'
					style={{
						marginBottom: '-12%',
						marginLeft: '-5%',
						alignSelf: 'start',
					}}
				>
					We are 3000+
				</Typography>
				<Image src={main.src} width={600} height={530} />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignSelf: 'end',
						marginTop: '-14%',
					}}
				>
					<Typography variant='main_bottom_highlight'>Opportunities</Typography>
					<Typography variant='main_bottom'>For everyone</Typography>
				</div>
			</div>
			<div
				style={{
					position: 'absolute',
					top: 0,
					right: isLoginOpen ? 0 : '-90%',
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(255, 255, 255, 0.9)',
					transition: 'right 0.3s ease-in-out',
				}}
			>
				<Login toggleLogin={toggleLogin} />
			</div>
		</div>
	)
}
