import CellComponent from '@/components/CellComponent'
import Consultant from '@/components/UI/Consultant'
import Image from 'next/image'
import { Box, Typography, Button } from '@mui/material'
import BigCell from '@/components/UI/BigCell'
import UserInfo from '@/components/UserInfo'
import refresh from '@/assets/img/refresh_dark.svg'
import { useRouter } from 'next/router'

export default function MobileCellInfoComponent({
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
	return (
		<Box
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 25,
				alignItems: 'center',
			}}
		>
			{!user && <Consultant data={consultant} />}

			<Box
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				{!user && (
					<Button onClick={refreshFetch}>
						<Image src={refresh.src} width={35} height={35} />
					</Button>
				)}
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Typography variant='cell_id_mobile'>№{cellId}</Typography>
					<Typography variant='cell_id_mobile'>
						{cellData.cellLevel.level.slice(0, 1)} - #{cellData.id}
					</Typography>
				</Box>
				<Button
					onClick={handleCloseClick}
					style={{
						cursor: 'pointer',
						color: '#1B170F',
						textAlign: 'center',
						fontFamily: 'Noto Sans',
						fontSize: 35,
						fontWeight: 400,
						textTransform: 'uppercase',
					}}
				>
					X
				</Button>
			</Box>
			{user ? (
				<UserInfo
					user={user}
					role={role}
					cellUserId={cellUserId}
					isAutoCreated={isAutoCreated}
					isAccepted={isAccepted}
					followersCount={followers.length}
				/>
			) : (
				<>
					<CellComponent
						leader={leader}
						followers={followers}
						onUserClick={handleUserClick}
					/>
				</>
			)}
		</Box>
	)
}
