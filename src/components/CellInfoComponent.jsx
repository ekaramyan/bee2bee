import { Box, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
const CellComponent = dynamic(() => import('@/components/CellComponent'))
const Consultant = dynamic(() => import('@/components/UI/Consultant'))
const BigCell = dynamic(() => import('@/components/UI/BigCell'))
const UserInfo = dynamic(() => import('@/components/UserInfo'))

export default function CellInfoComponent({
	cellId,
	cellData,
	user,
	role,
	leader,
	followers,
	consultant,
	isAutoCreated,
	isAccepted,
	cellUserId,
	handleUserClick,
	refreshFetch,
	handleCloseClick,
}) {
	console.log(followers)
	return (
		<Box style={{ display: 'flex', gap: 25 }}>
			<BigCell
				onCloseClick={handleCloseClick}
				onRefreshClick={refreshFetch}
				activeUser={user}
				style={{ width: '50%', gap: 8 }}
			>
				{user ? (
					<UserInfo
						user={user}
						role={role}
						isAutoCreated={isAutoCreated}
						isAccepted={isAccepted}
						cellUserId={cellUserId}
						followersCount={followers.length}
					/>
				) : (
					<>
						<Typography variant='cell_id'>№{cellId}</Typography>
						<CellComponent
							leader={leader}
							followers={followers}
							onUserClick={handleUserClick}
						/>
						<Typography variant='cell_id'>
							{cellData.cellLevel.level.slice(0, 1)} - #{cellData.id}
						</Typography>
					</>
				)}
			</BigCell>
			<Consultant data={consultant} />
		</Box>
	)
}
