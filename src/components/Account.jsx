import { Box, Button, Grid, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
const AuthButton = dynamic(() => import('./UI/AuthButton'))
const UserAvatar = dynamic(() => import('./UI/UserAvatar'))
import avatarBg from '@/assets/img/user_avatar_big.svg'

export default function Account({ onEditClick, data }) {
	console.log(data)
	return (
		<>
			<div
				style={{
					position: 'relative',
					width: '210px',
					height: '240px',
					backgroundImage: `url(${avatarBg.src})`,
					zIndex: 2,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<UserAvatar previewImage={null} />
				<div
					style={{
						position: 'absolute',
						bottom: 10,
						right: 10,
						width: '50px',
						height: '50px',
						overflow: 'hidden',
						borderRadius: '50%',
					}}
				></div>
			</div>
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
			<AuthButton
				variant='contained'
				style={{ background: '#A5560F' }}
				onClick={onEditClick}
			>
				Edit Account
			</AuthButton>
		</>
	)
}
