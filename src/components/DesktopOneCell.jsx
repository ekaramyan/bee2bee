import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { Typography, Button, Grid } from '@mui/material'
import BigCell from '@/components/UI/BigCell'
const DataBox = dynamic(() => import('@/components/UI/DataBox'))

export default function DesktopOneCell({
	data,
	leaderActiveData,
	followerActiveData,
	waitingData,
	onJoinClick,
	onRefreshClick,
	cells,
	id,
}) {
	const router = useRouter()
	return (
		<BigCell
			onCloseClick={() => router.back()}
			style={{ gap: 10, justifyContent: 'center' }}
		>
			<Image src={cells[id - 1].bee} alt='cell' width={38} height={60} />
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
			<Grid
				style={{
					display: 'grid',
					flexDirection: 'column',
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
					width: '41%',
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
			<Typography variant='level_big'>
				{data[0]?.cellLevel.level} {data[0]?.cellLevel.price}$
			</Typography>
		</BigCell>
	)
}
