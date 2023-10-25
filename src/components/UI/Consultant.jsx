import { Box, Typography } from '@mui/material'
import UserAvatar from './UserAvatar'
import avatarBg from '@/assets/img/consultant_avatar.svg'

export default function Consultant({ data }) {
	return (
		<Box style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
			<Box
				style={{
					background: `url(${avatarBg.src}) no-repeat center / cover`,
					width: '140px',
					height: '158px',
				}}
			>
				<UserAvatar
					avatarUrl={data?.avatarUrl}
					width={125}
					height={145}
					isLeader={true}
				/>
			</Box>
			<Box style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						marginBottom: 5,
					}}
				>
					<Typography variant='consultant_name'>
						{data.firstName} {data.lastName}
					</Typography>
					<Typography variant='consultant_header'>Consultant</Typography>
				</Box>
				<Typography variant='consultant_label'>
					Username:{' '}
					<Typography variant='consultant_data'>{data.firstName}</Typography>
				</Typography>
				<Typography variant='consultant_label'>
					Phone:{' '}
					<Typography variant='consultant_data'>+{data.phone}</Typography>
				</Typography>
				<Typography variant='consultant_label'>
					Telegram:{' '}
					<Typography variant='consultant_data'>{data.nickname}</Typography>
				</Typography>
			</Box>
		</Box>
	)
}
