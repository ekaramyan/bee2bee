import React from 'react'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { fetchData } from '@/api/fetchData'
import Wrapper from '../components/UI/Wrapper'
import { Typography } from '@mui/material'
import BigCell from '@/components/UI/BigCell'
import starter from '@/assets/img/bees/starter.png'
import beginner from '@/assets/img/bees/beginner.png'
import worker from '@/assets/img/bees/worker.png'
import pro from '@/assets/img/bees/pro.png'
import expert from '@/assets/img/bees/expert.png'

export default function OneCell() {
	const [data, setData] = useState(null)
	const router = useRouter()
	const { id } = router.query
	const token = Cookies.get('access_token')
	const url = process.env.API_URL

	useEffect(() => {
		if (id) {
			const fetchDataAsync = async () => {
				try {
					const response = await fetchData(`${url}/cell-levels`, token) //затычка
					setData(response.data)
				} catch (err) {
					console.error(err)
				}
			}

			fetchDataAsync()
		}
	}, [id])

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
			{id && data && data[id] ? (
				<BigCell
					bee={cells[id - 1].bee}
					join={'cell.join'}
					level={data[id - 1].level}
					price={data[id - 1].price}
					onCloseClick={() => router.back()}
				/>
			) : (
				<>Loading...</>
			)}
		</Wrapper>
	)
}
