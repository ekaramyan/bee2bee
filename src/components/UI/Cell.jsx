import React from 'react'
import background from '../../assets/img/join_cell_bg.svg'
import Image from 'next/image'
import { Button, Typography, Box, useMediaQuery } from '@mui/material'
import Link from 'next/link'

export default function Cell({
	bee,
	join,
	canJoin,
	level,
	price,
	index,
	onJoinClick,
}) {
	const isMobile = useMediaQuery('@media(max-width: 1300px)')
	return (
		<Link
			href={`cells/${join}`}
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: index === 3 || index === 4 ? 'center' : 'start',
				gap: 10,
				minWidth: isMobile ? '100%' : '33.3%',
				minHeight: '33vh',
				height: 300,
				width: 'fit-content',
				background: `url(${background.src})  center / contain no-repeat`,
				paddingBottom: index === 3 || index === 4 ? 20 : 0,
				// cursor: canJoin ? 'pointer' : 'default',
			}}
		>
			<Box
				style={{
					width: isMobile ? '75px' : 'fit-content',
					height: isMobile ? '90px' : '120px',
					transform: isMobile ? `translateY(-2%)` : `translateY(-15%)`,
					transform:
						index === 3 || index === 4 ? 'translateY(0%)' : `translateY(-15%)`,
				}}
			>
				<Image
					src={bee}
					alt='cell'
					style={{ objectFit: 'cover', width: '100%', height: '100%' }}
				/>
			</Box>
			{canJoin ? (
				<Button
					variant='outlined'
					onClick={onJoinClick}
					style={{
						width: '100%',
						maxWidth: 150,
						color: '#23201C',
						textAlign: 'center',
						textShadow: '1px 1px 1px #FFF',
						fontFamily: 'Noto Sans',
						fontSize: 24,
						fontWeight: 900,
						textTransform: 'uppercase',
						borderRadius: 5,
						border: '1px solid #1B170F',
						background: 'rgba(217, 217, 217, 0.00)',
						cursor: 'pointer',
					}}
				>
					JOIN
				</Button>
			) : (
				<div style={{ height: 0 }} />
			)}
			<Typography variant='level_small' component={'h6'}>
				{level} {price}$
			</Typography>
		</Link>
	)
}
