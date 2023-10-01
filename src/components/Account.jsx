import Image from 'next/image'
import { Box, Button, Grid, Typography } from '@mui/material'
import avatarBg from '@/assets/img/consultant_avatar.svg'

export default function Account({ onEditClick, data }) {
	console.log(data)
	return (
		<>
			<Image src={avatarBg.src} width={200} height={200} />
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography>
					{data?.firstName} {data?.lastName}
				</Typography>
				<Typography> date of birth: {data?.birth}</Typography>
			</Box>
			<Grid style={{ display: 'flex', gap: 60 }}>
				<Box>
					<Typography>User #: {data?.id}</Typography>
					<Typography>Email: {data?.email}</Typography>
					<Typography>Country: {data?.country}</Typography>
				</Box>
				<Box>
					<Typography>Nickname: {data?.nickname}</Typography>
					<Typography>Phone: {data?.phone}</Typography>
					<Typography>Telegram: {data?.telegram}</Typography>
				</Box>
			</Grid>
			<Button variant='contained' onClick={onEditClick}>
				Edit Account
			</Button>
		</>
	)
}
