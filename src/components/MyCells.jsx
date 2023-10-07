import useCells from '@/hooks/useCells'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export default function MyCells({ toggleOpen, isLoginOpen }) {
	const [isFollower, setIsFollower] = useState(true)

	const {
		data: followerActiveData,
		loading: followerActiveLoading,
		error: followerActiveError,
		getCells: getFollowerActiveCells,
	} = useCells()
	const {
		data: followerInactiveData,
		loading: followerInactiveLoading,
		error: followerInactiveError,
		getCells: getFollowerInactiveCells,
	} = useCells()
	const {
		data: leaderData,
		loading: leaderLoading,
		error: leaderError,
		getCells: getLeaderCells,
	} = useCells()
	const {
		data: allActiveData,
		loading: allActiveLoading,
		error: allActiveError,
		getCells: getAllActiveCells,
	} = useCells()

	useEffect(() => {
		getFollowerActiveCells('me_follower_active')
		getFollowerInactiveCells('me_follower_inactive')
		getLeaderCells('me_leader')
		getAllActiveCells('all_active')
	}, [])
	console.log(followerActiveData)
	return (
		<div
			style={{
				padding: '2% 20px',
				height: '100%',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					flex: '1',
					position: 'relative',
					height: '100%',
				}}
			>
				<Typography
					variant='auth_head'
					gutterBottom
					onClick={toggleOpen}
					style={{
						top: '10%',
						color: isLoginOpen ? '#E06B00' : '#1B170F',
						textShadow: isLoginOpen
							? '1px 1px 2px #1B170F'
							: '1px 1px 2px #E06B00',
					}}
				>
					My Cells
				</Typography>
			</div>
			<Box style={{ width: '75%' }}>
				<Box
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						gap: 30,
					}}
				>
					<Typography
						variant='my_cells_button'
						onClick={() => setIsFollower(true)}
						style={{
							color: isFollower && '#E06B00',
							textDecoration: isFollower && 'underline',
						}}
					>
						Follower
					</Typography>
					<Typography
						variant='my_cells_button'
						onClick={() => setIsFollower(false)}
						style={{
							color: !isFollower && '#E06B00',
							textDecoration: !isFollower && 'underline',
						}}
					>
						Leader
					</Typography>
				</Box>
				<Box
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						gap: 20,
						width: '100%',
					}}
				>
					{isFollower ? (
						<Box style={{ width: '40%' }}>
							<Typography>Active cells</Typography>
							<Box
								style={{
									background: '#fff',
									height: '150px',
									width: '100%',
									overflowY: 'auto',
								}}
							>
								<Typography>text</Typography>
							</Box>
						</Box>
					) : (
						<Box style={{ width: '40%' }}>
							<Typography>Active cells</Typography>
							<Box
								style={{
									background: '#fff',
									height: '150px',
									width: '100%',
									overflowY: 'auto',
								}}
							>
								<Typography>text</Typography>
							</Box>
						</Box>
					)}
					{isFollower ? (
						<Box style={{ width: '40%' }}>
							<Typography>Closed cells</Typography>
							<Box
								style={{
									background: '#fff',
									height: '150px',
									width: '100%',
									overflowY: 'auto',
								}}
							>
								<Typography>text</Typography>
							</Box>
						</Box>
					) : (
						<Box style={{ width: '40%' }}>
							<Typography>Closed cells</Typography>
							<Box
								style={{
									background: '#fff',
									height: '150px',
									width: '100%',
									overflowY: 'auto',
								}}
							>
								<Typography>text</Typography>
							</Box>
						</Box>
					)}
				</Box>
			</Box>
		</div>
	)
}
