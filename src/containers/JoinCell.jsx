import React from 'react'
import Wrapper from '../components/UI/Wrapper'
import { Grid, Typography } from '@mui/material'
import Cell from '../components/UI/Cell'
import BigCell from '../components/UI/BigCell'

export default function JoinCell() {
	const cells = [
		{ bee: '', join: '', level: 'Starter 30$' },
		{ bee: '', join: '', level: 'Starter 30$' },
		{ bee: '', join: '', level: 'Starter 30$' },
		{ bee: '', join: '', level: 'Starter 30$' },
		{ bee: '', join: '', level: 'Starter 30$' },
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
				{cells.map((cell, index) => (
					<Cell
						key={index}
						bee={cell.bee}
						join={cell.join}
						level={cell.level}
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
