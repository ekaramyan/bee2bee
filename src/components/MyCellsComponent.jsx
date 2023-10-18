import useCells from '@/hooks/useCells'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import CellBox from './UI/CellBox'

export default function MyCellsComponent() {
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
		<Box style={{ width: '75%' }}>
			<Box
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
					flexWrap: 'wrap',
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
					flexWrap: 'wrap',
					alignItems: 'center',
					gap: 20,
					width: '100%',
					minWidth: '500',
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
			</Box>
		</Box>
	)
}
