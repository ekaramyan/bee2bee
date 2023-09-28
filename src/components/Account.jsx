import Image from 'next/image'
import { Box, Button, Grid, Typography } from '@mui/material'
import avatarBg from '@/assets/img/consultant_avatar.svg'

export default function Account({ onEditClick }) {
	return (
		<>
			<Image src={avatarBg.src} width={200} height={200} />
			<Box>
				<Typography> Name & last name</Typography>
				<Typography> date of birth: 13.12.11</Typography>
			</Box>
			<Grid style={{ display: 'flex', gap: 60 }}>
				<Box>
					<Typography>user: dfgdsfgsfdggfds</Typography>
					<Typography>user: dfgdsfgsfdggfds</Typography>
					<Typography>user: dfgdsfgsfdggfds</Typography>
				</Box>
				<Box>
					<Typography>user: dfgdsfgsfdggfds</Typography>
					<Typography>user: dfgdsfgsfdggfds</Typography>
					<Typography>user: dfgdsfgsfdggfds</Typography>
				</Box>
			</Grid>
			<Button variant='contained' onClick={onEditClick}>
				Edit Account
			</Button>
		</>
	)
}
