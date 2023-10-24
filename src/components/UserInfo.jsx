import { Box, Typography, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Cookies from 'js-cookie'
import useCellActions from '@/hooks/useCellActions'
const CellUserAvatar = dynamic(() => import('./UI/UserAvatar'))
const AuthButton = dynamic(() => import('./UI/AuthButton'))
import avatarBg from '@/assets/img/leader_avatar.svg'

export default function UserInfo({
	user,
	role,
	isAutoCreated,
	isAccepted,
	cellUserId,
	followersCount,
}) {
	console.log(user)
	const myId = parseInt(Cookies.get('userId'))
	const router = useRouter()
	const { cellId } = router.query
	const userId = user.id
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
	const { loading, error, success, deleteFollower, patchFollower, closeCell } =
		useCellActions()
	const onAcceptClick = async () => {
		try {
			await patchFollower(cellUserId, acceptData)
			if (role === 'leader' && followersCount === 6) {
				await closeCell(cellId, closeData)
			}
		} catch (error) {
			console.error('Error:', error.message)
		}
	}
	const onDeleteClick = () => {
		deleteFollower(cellUserId)
	}
	const onLeaveClick = () => {
		deleteFollower(cellUserId)
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
						background: `url(${avatarBg.src}) no-repeat center / cover`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '140px',
						height: '156px',
					}}
				>
					<CellUserAvatar
						avatarUrl={user?.avatarUrl}
						width={125}
						height={145}
					/>
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
