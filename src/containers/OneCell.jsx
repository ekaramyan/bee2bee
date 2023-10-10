import React from 'react'
import { useRouter } from 'next/router'
import Wrapper from '../components/UI/Wrapper'
import { Typography } from '@mui/material'
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
		<Wrapper>
			<Typography variant='block_header'>Join the cell</Typography>
			{id && data && data[0].id ? (
				<BigCell
					bee={cells[id - 1].bee}
					join={`info/${data[0].id}`}
					level={data[0].cellLevel.level}
					price={data[0].cellLevel.price}
					onCloseClick={() => router.back()}
				/>
			) : (
				<>Loading...</>
			)}
		</Wrapper>
	)
}
