import React from 'react'
import background from '../../assets/img/join_cell_bg.svg'
import Image from 'next/image'
import { Button, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'

export default function Cell({
	bee,
	join,
	canJoin,
	level,
	price,
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
				justifyContent: 'start',
				gap: 20,
				minWidth: isMobile ? '100%' : '33.3%',
				minHeight: '33vh',
				height: 300,
				width: 'fit-content',
				background: `url(${background.src})  center / contain no-repeat`,
				// cursor: canJoin ? 'pointer' : 'default',
			}}
		>
			<Image src={bee} alt='cell' width={65} height={90} />
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
				<div style={{ height: 50 }} />
			)}
			<Typography variant='level_small' component={'h6'}>
				{level} {price}$
			</Typography>
		</Link>
	)
}
