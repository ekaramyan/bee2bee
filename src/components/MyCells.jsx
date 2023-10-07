import useCells from '@/hooks/useCells'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import CellBox from './UI/CellBox'

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
		data: leaderActiveData,
		loading: leaderActiveLoading,
		error: leaderActiveError,
		getCells: getLeaderActiveCells,
	} = useCells()
	const {
		data: leaderInactiveData,
		loading: leaderLoading,
		error: leaderInactiveError,
		getCells: getLeaderInactiveCells,
	} = useCells()

	useEffect(() => {
		getFollowerActiveCells('me_follower_active')
		getFollowerInactiveCells('me_follower_inactive')
		getLeaderActiveCells('me_leader_active')
		getLeaderInactiveCells('me_leader_inactive')
	}, [])
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
						<>
							<CellBox isActive={true} data={followerActiveData} />
							<CellBox isActive={false} data={followerInactiveData} />
						</>
					) : (
						<>
							<CellBox isActive={true} data={leaderActiveData} />
							<CellBox isActive={false} data={leaderInactiveData} />
						</>
					)}
					{/* {isFollower ? (
						<>
							<CellBox title='Active cells' data={followerActiveData} />
							<CellBox title='Closed cells' data={followerInactiveData} />
						</>
					) : (
						<>
							<CellBox title='Active cells' data={leaderActiveData} />
							<CellBox title='Closed cells' data={leaderInactiveData} />
						</>
					)} */}
				</Box>
			</Box>
		</div>
	)
}
