import Image from 'next/image'
import { Grid, Box, Typography } from '@mui/material'
import cell from '@/assets/img/join_cell_bg.svg'

export default function RealCell({ data }) {
	// console.log(data)
	return (
		<Box style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
			<Grid
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					alignItems: 'center',
					gap: 20,
				}}
			>
				<Typography variant='level_dark'>Starter 30$</Typography>
				<Grid
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(3, 0.7fr)',
						gap: 20,
					}}
				>
					<div
						style={{
							background: `url(${cell.src}) no-repeat center / contain`,
							width: 100,
							height: 100,
							padding: '20%',
						}}
					>
						№1 S-#205
					</div>
				</Grid>
			</Grid>
		</Box>
	)
}
