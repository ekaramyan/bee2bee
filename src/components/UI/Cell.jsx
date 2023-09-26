import React from 'react'
import background from '../../assets/img/join_cell_bg.png'
import Image from 'next/image'
import { Button, Typography } from '@mui/material'

export default function Cell({ bee, join, level }) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				width: '33.3%',
				height: '30vh',
				background: `url(${background.src})  center / contain no-repeat`,
			}}
		>
			<Image src={bee} alt='cell' width={50} height={75} />
			<Button
				variant='outlined'
				href={join}
				style={{
					width: '50%',
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
			<Typography variant='level_small'>{level}</Typography>
		</div>
	)
}
