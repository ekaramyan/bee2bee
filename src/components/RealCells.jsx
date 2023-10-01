import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import cell from '@/assets/img/join_cell_bg.svg'

export default function RealCells({ toggleOpen }) {
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
			<Box style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
				<Grid
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						alignItems: 'center',
						gap: 20,
					}}
				>
					<Typography>yfduhidszngkasnbfgldkbsalkgfsk</Typography>
					<Grid
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(3, 0.7fr)',
							gap: 20,
						}}
					>
						<Image src={cell.src} width={100} height={100} />
						<Image src={cell.src} width={100} height={100} />
						<Image src={cell.src} width={100} height={100} />
					</Grid>
				</Grid>
			</Box>
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
					}}
				>
					Real Cells
				</Typography>
			</div>
		</div>
	)
}
