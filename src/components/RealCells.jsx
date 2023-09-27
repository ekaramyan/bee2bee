import {
	Checkbox,
	Box,
	FormControlLabel,
	Grid,
	TextField,
	Select,
	Typography,
} from '@mui/material'
import ReCAPTCHA from 'react-google-recaptcha'
import AuthButton from './UI/AuthButton'
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
						display: 'grid',
						gridTemplateColumns: '1fr 3fr',
						alignItems: 'center',
						gap: 20,
					}}
				>
					<Typography>yfduhidszngkasnbfgldkbsalkgfsk</Typography>
					<Grid
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(3, 100px)',
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
				}}
			>
				<Typography
					variant='auth_head'
					gutterBottom
					onClick={toggleOpen}
					style={{
						transform: 'rotate(90deg)  translateY(40%) translateX(50%)',
						top: '-25%',
						right: 0,
					}}
				>
					Real Cells
				</Typography>
			</div>
		</div>
	)
}
