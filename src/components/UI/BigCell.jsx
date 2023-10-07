import React from 'react'
import background from '../../assets/img/join_cell_bg_large.svg'
import Image from 'next/image'
import { Button, Typography, Box, Grid } from '@mui/material'

export default function BigCell({ bee, join, level, price, onCloseClick }) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				height: '100%',
				background: `url(${background.src})  center / contain no-repeat`,
				gap: 20,
			}}
		>
			<Button>update</Button>
			<Image src={bee} alt='cell' width={38} height={60} />
			<Button
				variant='outlined'
				href={join}
				style={{
					width: '10%',
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
				}}
			>
				JOIN
			</Button>
			<Grid
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					gridTemplateRows: '1fr 1fr',
					gap: 20,
				}}
			>
				<Typography>dfdfhdfshdh</Typography>
				<Typography>dfdfhdfshdh</Typography>
				<Typography>dfdfhdfshdh</Typography>
				<Typography>dfdfhdfshdh</Typography>
			</Grid>
			<Typography variant='level_big'>
				{level} {price}$
			</Typography>
			<Button
				onClick={onCloseClick}
				style={{
					cursor: 'pointer',
					width: '40%',
					color: '#fff',
					textAlign: 'center',
					fontFamily: 'Noto Sans',
					fontSize: 24,
					fontWeight: 400,
					textTransform: 'uppercase',
				}}
			>
				X
			</Button>
		</div>
	)
}
