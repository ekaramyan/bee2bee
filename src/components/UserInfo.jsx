import { Box, Typography, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import useCellActions from '@/hooks/useCellActions'
import CellUserAvatar from './UI/CellUserAvatar'
import avatarBg from '@/assets/img/leader_avatar.svg'
import AuthButton from './UI/AuthButton'
import Cookies from 'js-cookie'

export default function UserInfo({
	user,
	role,
	isAutoCreated,
	isAccepted,
	followersCount,
}) {
	const myId = parseInt(Cookies.get('userId'))
	const router = useRouter()
	const { cellId } = router.query
	const userId = user.id
	console.log(followersCount)
	const acceptData = {
		isAccepted: true,
		acceptedAt: Date.now(),
		isPayed: true,
		payedAt: Date.now(),
	}
	const closeData = {
		isActive: false,
		isArchived: true,
	}
	const {
		loading,
		error,
		success,
		deleteFollower,
		postFollower,
		patchFollower,
		closeCell,
	} = useCellActions()
	const onAcceptClick = () => {
		if (role === 'leader' && followersCount >= 6) {
			patchFollower(cellId, userId, acceptData)
			closeCell(cellId, closeData)
		} else {
			patchFollower(cellId, userId, acceptData)
		}
	}
	const onDeleteClick = () => {
		deleteFollower(cellId, userId)
	}
	const onLeaveClick = () => {
		deleteFollower(cellId, myId)
	}
	return (
		<Grid style={{ padding: '2% 0%', width: '100%' }}>
			<Grid
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 10,
					width: '100%',
				}}
			>
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
				<Typography component={'h6'} variant='h6_light'>
					{user?.firstName} {user?.lastName}
				</Typography>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 2,
					}}
				>
					<Typography variant='cell_user_key' display='flex'>
						Nickname:{' '}
						<Typography variant='cell_user_item'>{user?.nickname}</Typography>
					</Typography>

					<Typography variant='cell_user_key' display='flex'>
						Phone:{' '}
						<Typography variant='cell_user_item'>{user?.phone}</Typography>
					</Typography>

					<Typography variant='cell_user_key' display='flex'>
						Telegram:{' '}
						<Typography variant='cell_user_item'>{user?.telegram}</Typography>
					</Typography>
					{/* <Typography variant='cell_user_item'>Expired</Typography> */}
				</Box>
				{role === 'leader' && userId !== myId && !isAccepted && (
					<>
						<Box style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
							<AuthButton
								variant='contained'
								onClick={onAcceptClick}
								type='submit'
								style={{
									background: '#119A48',
									width: '50%',
								}}
							>
								accept
							</AuthButton>
							<AuthButton
								variant='contained'
								onClick={onDeleteClick}
								type='submit'
								style={{
									background: '#FF0000',
									width: '50%',
								}}
							>
								delete
							</AuthButton>
						</Box>
						<Typography variant='cell_user_subtext'>
							votes to remove: 0/5
						</Typography>
					</>
				)}
				{userId === myId && !isAutoCreated && role !== 'leader' && (
					<AuthButton
						variant='contained'
						onClick={onLeaveClick}
						type='submit'
						style={{
							background: '#A5560F',
							width: '30%',
						}}
					>
						Leave
					</AuthButton>
				)}
			</Grid>
		</Grid>
	)
}
