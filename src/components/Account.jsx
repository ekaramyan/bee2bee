import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import dynamic from 'next/dynamic'
const AuthButton = dynamic(() => import('./UI/AuthButton'))
const UserAvatar = dynamic(() => import('./UI/UserAvatar'))
import avatarBg from '@/assets/img/user_avatar_big.svg'

export default function Account({ onEditClick, data }) {
	const isMobile = useMediaQuery('@media(max-width:1300px)')
	return (
		<>
			<div
				style={{
					position: 'relative',
					width: '174px',
					height: '204px',
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
				<UserAvatar
					previewImage={null}
					isClickable={true}
					clickUrl='/account-settings'
					avatarUrl='/users/me/photo'
					width={158}
					height={184}
				/>
			</div>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography variant='h6'>
					{data?.firstName} {data?.lastName}
				</Typography>
				<Typography variant='date'> date of birth: {data?.birth}</Typography>
			</Box>
			<Grid
				style={{
					display: 'flex',
					alignItems:  'center',
					justifyContent: 'center',
					flexDirection: isMobile ? 'column' : 'row',
					gap: isMobile ? 0 : 60,
					width: isMobile ? '100%' : '50%',
				}}
			>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: isMobile ? 'flex-start' : 'flex-end',
					}}
				>
					<Typography variant='user_key' display='flex'>
						User #: <Typography variant='user_item'>{data?.id}</Typography>
					</Typography>
					<Typography variant='user_key' display='flex'>
						Email: <Typography variant='user_item'>{data?.email}</Typography>
					</Typography>
					<Typography variant='user_key' display='flex'>
						Country:{' '}
						<Typography variant='user_item'>{data?.country}</Typography>
					</Typography>
				</Box>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: isMobile ? 'flex-start' : 'flex-start',
					}}
				>
					<Typography variant='user_key' display='flex'>
						Nickname:{' '}
						<Typography variant='user_item'>{data?.nickname}</Typography>
					</Typography>
					<Typography variant='user_key' display='flex'>
						Phone: <Typography variant='user_item'>{data?.phone}</Typography>
					</Typography>
					<Typography variant='user_key' display='flex'>
						Telegram:{' '}
						<Typography variant='user_item'>{data?.telegram}</Typography>
					</Typography>
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
