import CellComponent from '@/components/CellComponent'
import Consultant from '@/components/UI/Consultant'
import { Box, Typography } from '@mui/material'
import BigCell from '@/components/UI/BigCell'
import UserInfo from '@/components/UserInfo'

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
	handleUserClick,
	refreshFetch,
	setActiveUser,
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
