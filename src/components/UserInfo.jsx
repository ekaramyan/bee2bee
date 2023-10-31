import { Box, Typography, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Cookies from 'js-cookie'
import useCellActions from '@/hooks/useCellActions'
const CellUserAvatar = dynamic(() => import('./UI/UserAvatar'))
const AuthButton = dynamic(() => import('./UI/AuthButton'))
import avatarBg from '@/assets/img/leader_avatar.svg'
import { useEffect } from 'react'
import Link from 'next/link'

export default function UserInfo({
	user,
	role,
	isAutoCreated,
	isAccepted,
	cellUserId,
	followers,
	setActiveUser,
}) {
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
	const openData = {
		isActive: true,
		isArchived: false,
	}
	const acceptedCount =
		followers?.filter(
			follower => follower?.isPayed && follower.isAccepted === true
		).length ?? 0

	const { loading, error, success, deleteFollower, patchFollower, closeCell } =
		useCellActions()

	useEffect(() => {
		if (followers?.length === 6 && acceptedCount === 6) {
			// router.push('/cells')
		}
	}, [acceptedCount])
	const onAcceptClick = async () => {
		try {
			const result = await patchFollower(cellUserId, acceptData)
			if (acceptedCount === 5 && result) {
				await closeCell(cellId, closeData)
			}
			setActiveUser(null)
		} catch (error) {
			console.error('Error:', error.message)
		}
	}
	const onDeleteClick = () => {
		deleteFollower(cellUserId)
		setActiveUser(null)
	}
	const onLeaveClick = () => {
		deleteFollower(cellUserId)
		router.push('/cells')
	}
	const formatTelegramUrl = telegramHandle => {
		return telegramHandle.replace('@', '').replace(/\s+/g, '')
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
						<Link
							href={`https://t.me/${formatTelegramUrl(user?.telegram || '')}`}
						>
							<Typography variant='cell_user_item'>{user?.telegram}</Typography>
						</Link>
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
				{userId === myId &&
					!isAutoCreated &&
					role !== 'leader' &&
					acceptedCount !== 6 && (
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
