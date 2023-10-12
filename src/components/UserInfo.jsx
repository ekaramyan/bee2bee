import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import CellUserAvatar from './UI/CellUserAvatar'
import avatarBg from '@/assets/img/leader_avatar.svg'

export default function UserInfo({ user }) {
	return (
		<>
			<Grid style={{ padding: '10% 5%' }}>
				<div
					style={{
						background: `url(${avatarBg.src}) no-repeat center / contain`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<CellUserAvatar avatar={user?.avatar?.src} width={145} height={145} />
				</div>
				<Typography variant='h6'>
					{user?.firstName} {user?.lastName}
				</Typography>

				<Typography variant='user_key' display='flex'>
					Nickname:{' '}
					<Typography variant='user_item'>{user?.nickname}</Typography>
				</Typography>

				<Typography variant='user_key' display='flex'>
					Phone: <Typography variant='user_item'>{user?.phone}</Typography>
				</Typography>

				<Typography variant='user_key' display='flex'>
					Telegram:{' '}
					<Typography variant='user_item'>{user?.telegram}</Typography>
				</Typography>
			</Grid>
		</>
	)
}
