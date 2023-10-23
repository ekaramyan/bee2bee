import Image from 'next/image'
import Link from 'next/link'
import { Button, Grid, Box } from '@mui/material'
import { useRouter } from 'next/router'
import DataBox from '@/components/UI/DataBox'
import refresh from '@/assets/img/refresh_dark.svg'

export default function MobileOneCell({
	data,
	leaderActiveData,
	followerActiveData,
	waitingData,
	onJoinClick,
	onRefreshClick,
	id,
}) {
	const router = useRouter()
	return (
		<>
			<Box
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Button onClick={onRefreshClick}>
					<Image src={refresh.src} width={35} height={35} />
				</Button>{' '}
				<Link href={`${id}/info/${data[0].id}`}>
					<Button
						variant='outlined'
						style={{
							width: '100%',
							color: '#23201C',
							textAlign: 'center',
							textShadow: '1px 1px 1px #FFF',
							fontFamily: 'Noto Sans',
							fontSize: 24,
							fontWeight: 900,
							textTransform: 'uppercase',
							borderRadius: 5,
							border: '1px solid #1B170F',
							background: 'rgba(217, 217, 217, 0.00)',
						}}
						onClick={onJoinClick}
					>
						JOIN
					</Button>
				</Link>
				<Button
					onClick={() => router.back()}
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
			<Grid
				style={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					gridTemplateColumns: '1fr 1fr',
					gridTemplateRows: '1fr',
					gridTemplateAreas: `
			'follower leader'
			'waiting waiting'
		`,
					columnGap: 10,
					rowGap: 5,
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<DataBox
					title='follower'
					data={followerActiveData}
					style={{ gridArea: 'follower' }}
				/>
				<DataBox
					title='leader'
					data={leaderActiveData}
					style={{ gridArea: 'leader' }}
				/>
				<DataBox
					title='waiting'
					data={waitingData}
					style={{ gridArea: 'waiting' }}
				/>
			</Grid>
		</>
	)
}
