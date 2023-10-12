import { Box, Typography } from '@mui/material'

export default function CellBox({ isActive, data }) {
	return (
		<Box style={{ width: '40%', marginTop: 15 }}>
			<Typography variant='my_cells_titles'>
				{isActive ? 'Active' : 'Closed'} cells
			</Typography>
			<Box
				style={{
					background: '#fff',
					height: '150px',
					width: '100%',
					overflowY: 'auto',
				}}
			>
				{data &&
					data.data.map(cell => (
						<Typography
							key={cell.id}
							variant={isActive ? 'active_cells' : 'closed_cells'}
						>
							<b>
								{cell.cellLevel.level.slice(0, 1)}-#{cell.id}
							</b>
							{cell.createdAt} <br />
						</Typography>
					))}
			</Box>
		</Box>
	)
}
