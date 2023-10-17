import { Box, Typography } from '@mui/material'
import Link from 'next/link'

export default function DataBox({ title, data, style }) {
	console.log(data, 'my data')
	const defaultStyle = {
		width: '100%',
	}
	const combinedStyle = { ...defaultStyle, ...style }
	return (
		<Box style={combinedStyle}>
			<Typography variant='join_cells_titles'>{title}</Typography>
			<Box
				style={{
					background: '#FFFFFF1A',
					height: '100px',
					width: '100%',
					overflowY: 'auto',
					borderRadius: 5,
				}}
			>
				{data &&
					data.data.map((cell, index) => (
						<Link
							key={cell.id}
							href={`/cells/${cell.cellLevel.id}/info/${cell.id}`}
						>
							<Typography variant='join_cells'>
								<b>
									{index + 1}. {cell.cellLevel.level.slice(0, 1)}-#{cell.id}
								</b>{' '}
								{cell.createdAt} <br />
							</Typography>
						</Link>
					))}
			</Box>
		</Box>
	)
}
