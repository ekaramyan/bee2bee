import React, { useState } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { Box, Typography, useMediaQuery } from '@mui/material'
import main from '../assets/img/main.webp'

export default function MainPage() {
	const isMobile = useMediaQuery('@media(max-width:1300px)')

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
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
					alignItems: 'center',
					width: isMobile ? '70%' : '60%',
					margin: isMobile ? '0' : '0 auto',
				}}
			>
				<Typography
					variant='main_head'
					style={{
						marginBottom: isMobile ? '0' : '-12%',
						marginLeft: isMobile ? '0' : '-5%',
						alignSelf: isMobile ? 'center' : 'start',
					}}
				>
					We are 3000+
				</Typography>
				<Image
					src={main.src}
					width={isMobile ? 245 : 600}
					height={isMobile ? 218 : 530}
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignSelf: isMobile ? 'center' : 'end',
						marginTop: isMobile ? '0' : '-14%',
						textAlign: isMobile ? 'center' : 'unset',
					}}
				>
					<Typography variant='main_bottom_highlight' component={'h6'}>
						Opportunities
					</Typography>
					<Typography variant='main_bottom' component={'h6'}>
						For everyone
					</Typography>
				</div>
			</div>
		</div>
	)
}
