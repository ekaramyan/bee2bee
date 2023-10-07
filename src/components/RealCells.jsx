import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import useCells from '@/hooks/useCells'
import RealCell from './UI/RealCell'

export default function RealCells({ toggleOpen, isRegisterOpen }) {
	const {
		data: data,
		loading: loading,
		error: error,
		getCells: getCells,
	} = useCells()

	useEffect(() => {
		getCells('all')
	}, [])
	return (
		<div
			style={{
				padding: '120px 20px',
				height: '100%',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<RealCell data={data} />
			<div
				style={{
					flex: '1',
					position: 'relative',
					height: '100%',
					width: '20%',
				}}
			>
				<Typography
					variant='auth_head'
					gutterBottom
					onClick={toggleOpen}
					style={{
						transform: 'rotate(90deg)  translateY(30%) translateX(50%)',
						top: '-20%',
						right: 0,
						color: isRegisterOpen ? '#E06B00' : '#1B170F',
						textShadow: isRegisterOpen
							? '1px 1px 2px #1B170F'
							: '1px 1px 2px #E06B00',
					}}
				>
					Real Cells
				</Typography>
			</div>
		</div>
	)
}
