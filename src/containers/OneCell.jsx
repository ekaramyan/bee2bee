import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Cookies from 'js-cookie'
import Wrapper from '../components/UI/Wrapper'
import { Typography, Button, Grid } from '@mui/material'
import BigCell from '@/components/UI/BigCell'
import starter from '@/assets/img/bees/starter.png'
import beginner from '@/assets/img/bees/beginner.png'
import worker from '@/assets/img/bees/worker.png'
import pro from '@/assets/img/bees/pro.png'
import expert from '@/assets/img/bees/expert.png'
import Link from 'next/link'
import useCellActions from '@/hooks/useCellActions'

export default function OneCell({ data }) {
	const router = useRouter()
	const { postFollower } = useCellActions()
	const userId = parseInt(Cookies.get('userId'))
	console.log(userId)
	const { cellLevelId: id } = router.query
	console.log(data, 'cell data')
	const cells = [
		{ bee: starter },
		{ bee: beginner },
		{ bee: worker },
		{ bee: pro },
		{ bee: expert },
	]
	const onJoinClick = () => {
		postFollower(data[0]?.id, userId)
	}

	return (
		<Wrapper header={'Join the cell'}>
			{id && data && data[0]?.id ? (
				<BigCell onCloseClick={() => router.back()}>
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
							gridTemplateColumns: '1fr 1fr',
							gridTemplateRows: '1fr 1fr',
							gap: 20,
						}}
					>
						<Typography>dfdfhdfshdh</Typography>
						<Typography>dfdfhdfshdh</Typography>
						<Typography>dfdfhdfshdh</Typography>
						<Typography>dfdfhdfshdh</Typography>
					</Grid>
					<Typography variant='level_big'>
						{data[0]?.cellLevel.level} {data[0]?.cellLevel.price}$
					</Typography>
				</BigCell>
			) : data ? (
				'Loading...'
			) : (
				'Sorry, there is no data'
			)}
		</Wrapper>
	)
}
