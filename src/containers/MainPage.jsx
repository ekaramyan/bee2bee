import Image from 'next/image'
import main from '../assets/img/main.png'
import { Typography } from '@mui/material'

export default function MainPage() {
	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					width: '60%',
					margin: '0 auto',
				}}
			>
				<Typography
					variant='main_head'
					style={{
						marginBottom: '-12%',
						marginLeft: '-5%',
						alignSelf: 'start',
					}}
				>
					We are 3000+
				</Typography>
				<Image src={main.src} width={600} height={530} />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignSelf: 'end',
						marginTop: '-14%',
					}}
				>
					<Typography variant='main_bottom_highlight'>Opportunities</Typography>
					<Typography variant='main_bottom'>For everyone</Typography>
				</div>
			</div>
		</>
	)
}
