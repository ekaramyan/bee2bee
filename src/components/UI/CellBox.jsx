import { Box, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'

export default function CellBox({ isActive, data }) {
	console.log(data)
	const isMobile = useMediaQuery('@media(max-width:1300px)')
	return (
		<Box
			style={{
				width: isMobile ? '100%' : '40%',
				minWidth: 275,
				marginTop: 15,
			}}
		>
			<Typography variant='my_cells_titles'>
				{isActive ? 'Active' : 'Closed'} cells
			</Typography>
			<Box
				style={{
					background: '#fff',
					height: '150px',
					width: '100%',
					minWidth: 150,
					overflowY: 'auto',
					borderRadius: 5,
				}}
			>
				{data?.data &&
					data.data.map((cell, index) => (
						<Link
							key={index}
							href={`/cells/${cell.cellLevel.id}/info/${cell.id}`}
						>
							<Typography variant={isActive ? 'active_cells' : 'closed_cells'}>
								<b>
									{cell.cellLevel.level.slice(0, 1)}-#{cell.id}
								</b>{' '}
								{cell.createdAt} <br />
							</Typography>
						</Link>
					))}
			</Box>
		</Box>
	)
}
