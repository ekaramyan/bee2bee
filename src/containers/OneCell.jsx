import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Wrapper from '../components/UI/Wrapper'
import { Typography, Button, Grid } from '@mui/material'
import BigCell from '@/components/UI/BigCell'
import starter from '@/assets/img/bees/starter.png'
import beginner from '@/assets/img/bees/beginner.png'
import worker from '@/assets/img/bees/worker.png'
import pro from '@/assets/img/bees/pro.png'
import expert from '@/assets/img/bees/expert.png'

export default function OneCell({ data }) {
	const router = useRouter()
	const { id } = router.query
	console.log(data)
	const cells = [
		{ bee: starter },
		{ bee: beginner },
		{ bee: worker },
		{ bee: pro },
		{ bee: expert },
	]

	return (
		<Wrapper header={'Join the cell'}>
			{id && data && data[0]?.id ? (
				<BigCell onCloseClick={() => router.back()}>
					<Image src={cells[id - 1].bee} alt='cell' width={38} height={60} />
					<Button
						variant='outlined'
						href={`info/${data[0].id}`}
						style={{
							width: '10%',
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
					>
						JOIN
					</Button>
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
						{data[0].cellLevel.level} {data[0].cellLevel.price}$
					</Typography>
				</BigCell>
			) : data[0] ? (
				'Loading...'
			) : (
				'Sorry, there is no data'
			)}
		</Wrapper>
	)
}
