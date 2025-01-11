'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Box, Typography, useMediaQuery } from '@mui/material'
import baloons from '@/assets/img/baloons.svg'
import H from '../../assets/img/H.gif'
import A from '../../assets/img/A.gif'
import P from '../../assets/img/P.gif'
import Y from '../../assets/img/Y.gif'
import B from '../../assets/img/B.gif'
import I from '../../assets/img/I.gif'
import R from '../../assets/img/R.gif'
import T from '../../assets/img/T.gif'
import D from '../../assets/img/D.gif'
import Exclamation from '../../assets/img/Exclamation.gif'
import N2 from '../../assets/img/2.gif'
import N0 from '../../assets/img/Fire.gif'

const CelebrationMessage = () => {
	const isMobile = useMediaQuery('@media(max-width:500px)');
	const isTablet = useMediaQuery('@media(max-width:720px)');

	return (
		<Box
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: isTablet ? 'column' : 'row',
				gap: isTablet ? 0 : 24
			}}
		>
			<Box
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'row'
				}}
			>
				<Image src={H.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"H"}/>
				<Image src={A.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"A"}/>
				<Image src={P.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"P"}/>
				<Image src={P.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"P"}/>
				<Image src={Y.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"Y"}/>
			</Box>
			<Box
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'row'
				}}
			>
				<Image src={B.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"B"}/>
				<Image src={I.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"I"}/>
				<Image src={R.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"R"}/>
				<Image src={T.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"T"}/>
				<Image src={H.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"H"}/>
				<Image src={D.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"D"}/>
				<Image src={A.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"A"}/>
				<Image src={Y.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"Y"}/>
				<Image src={Exclamation.src} width={isMobile ? 16 : 24} height={isMobile ? 16 : 24} alt={"!"}/>
			</Box>
			<Box
				style={{
					display: 'flex',
					alignitems: 'center',
					justifyContent: 'center',
					flexDirection: 'row'
				}}
			>
				<Image src={N2.src} width={24} height={24} alt={"2"}/>
				<Image src={N0.src} width={24} height={24} alt={"0"}/>
			</Box>
			
		</Box>
	)
}

export default CelebrationMessage
