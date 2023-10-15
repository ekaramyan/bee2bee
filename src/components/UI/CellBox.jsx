import { Box, Typography } from '@mui/material'
import Link from 'next/link'

export default function CellBox({ isActive, data }) {
	console.log(data, 'myCells')
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
						<Link href={`/cells/${cell.cellLevel.id}/info/${cell.id}`}>
							<Typography
								key={cell.id}
								variant={isActive ? 'active_cells' : 'closed_cells'}
							>
								<b>
									{cell.cellLevel.level.slice(0, 1)}-#{cell.id}
								</b>
								{cell.createdAt} <br />
							</Typography>
						</Link>
					))}
			</Box>
		</Box>
	)
}
