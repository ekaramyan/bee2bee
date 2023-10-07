import { Box, Typography } from '@mui/material'

export default function CellBox({ isActive, data }) {
	return (
		<Box style={{ width: '40%' }}>
			<Typography>{isActive ? 'Active' : 'Closed'} cells</Typography>
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
							<b>{cell.id}</b> || {cell.createdAt}
						</Typography>
					))}
			</Box>
		</Box>
	)
}
