import React from 'react'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { fetchData } from '@/api/fetchData'
import Wrapper from '../components/UI/Wrapper'
import { Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Cell from '../components/UI/Cell'
import starter from '@/assets/img/bees/starter.png'
import beginner from '@/assets/img/bees/beginner.png'
import worker from '@/assets/img/bees/worker.png'
import pro from '@/assets/img/bees/pro.png'
import expert from '@/assets/img/bees/expert.png'

export default function JoinCell() {
	const [data, setData] = useState(null)
	const router = useRouter()
	const token = Cookies.get('access_token')
	const url = process.env.API_URL
	useEffect(() => {
		const fetchDataAsync = async () => {
			try {
				const response = await fetchData(`${url}/cell-levels`, token)
				setData(response.data)
			} catch (err) {
				console.error(err)
			}
		}

		fetchDataAsync()
	}, [])
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

			<Grid
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignContent: 'center',
				}}
			>
				{data?.map((cell, index) => (
					<Cell
						key={cell?.id}
						bee={cells[index].bee}
						join={cell.id}
						level={cell?.level}
						price={cell?.price}
						onJoinClick={() => router.push(cell.id)}
						style={{
							flexBasis: '33.33%',
							maxWidth: '33.33%',
							boxSizing: 'border-box',
						}}
					/>
				))}
			</Grid>
		</Wrapper>
	)
}
