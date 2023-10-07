import React from 'react'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { fetchData } from '@/api/fetchData'
import Wrapper from '../components/UI/Wrapper'
import { Grid, Typography } from '@mui/material'
import Cell from '../components/UI/Cell'
import BigCell from '@/components/UI/BigCell'
import starter from '@/assets/img/bees/starter.png'
import beginner from '@/assets/img/bees/beginner.png'
import worker from '@/assets/img/bees/worker.png'
import pro from '@/assets/img/bees/pro.png'
import expert from '@/assets/img/bees/expert.png'

export default function JoinCell() {
	const [activeComponent, setActiveComponent] = useState('JoinCell')
	const [data, setData] = useState(null)
	const handleJoinClick = () => {
		setActiveComponent('UserInfo')
	}
	const handleCloseClick = () => {
		setActiveComponent('JoinCell')
	}

	const token = Cookies.get('access_token')
	const url = process.env.API_URL
	useEffect(() => {
		const fetchDataAsync = async () => {
			try {
				const response = await fetchData(`${url}/cell-levels`, token)
				console.log(response.data)
				setData(response.data)
			} catch (err) {
				console.error(err)
			}
		}

		fetchDataAsync()
	}, [])
	console.log(data)
	const cells = [
		{ bee: starter, join: '' },
		{ bee: beginner, join: '' },
		{ bee: worker, join: '' },
		{ bee: pro, join: '' },
		{ bee: expert, join: '' },
	]

	return (
		<Wrapper>
			<Typography variant='block_header'>Join the cell</Typography>
			{activeComponent === 'JoinCell' ? (
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
							join={cells[index].join}
							level={cell?.level}
							price={cell?.price}
							onJoinClick={handleJoinClick}
							style={{
								flexBasis: '33.33%',
								maxWidth: '33.33%',
								boxSizing: 'border-box',
							}}
						/>
					))}
				</Grid>
			) : (
				<BigCell
					bee={''}
					join={'cell.join'}
					level={'cell.level'}
					onCloseClick={handleCloseClick}
				/>
			)}
		</Wrapper>
	)
}
