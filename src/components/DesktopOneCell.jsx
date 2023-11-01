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
	disabled,
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
			onCloseClick={() => router.push('/cells')}
			style={{ gap: 10, justifyContent: 'center' }}
		>
			<Image
				src={cells[id - 1].bee}
				alt='cell'
				width={42}
				height={60}
				style={{ layout: 'fill' }}
			/>

			<Button
				variant='outlined'
				disabled={disabled}
				style={{
					cursor: !disabled ? 'pointer' : 'not-allowed',
					width: '10%',
					color: !disabled ? '#23201C' : 'rgb(123 123 122)',
					textAlign: 'center',
					textShadow: '1px 1px 1px #FFF',
					fontFamily: 'Noto Sans',
					fontSize: 24,
					fontWeight: 900,
					textTransform: 'uppercase',
					borderRadius: 5,
					border: !disabled
						? '1px solid #1B170F'
						: '1px solid rgba(217, 217, 217, 0.2)',
					background: !disabled
						? 'rgba(217, 217, 217, 0.00)'
						: 'rgba(217, 217, 217, 0.2)',
				}}
				onClick={onJoinClick}
			>
				JOIN
			</Button>

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
					isNotClickable={true}
				/>
			</Grid>
			<Typography variant='level_big'>
				{data?.level} {data?.price}$
			</Typography>
		</BigCell>
	)
}
