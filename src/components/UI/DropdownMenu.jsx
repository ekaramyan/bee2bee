import React, { useState } from 'react'
import { Typography, Menu, MenuItem, styled } from '@mui/material'

const StyledMenu = styled(Menu)(({ theme }) => ({
	'& .MuiList-root': {
		backgroundColor: '#eaeee8',
		border: '1px solid #F9AA13',
		borderRadius: 5,
		marginTop: 2,
		width: '100%',
	},
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
	'&.MuiMenuItem-root': {
		color: theme.palette.text.primary,
		textTransform: 'uppercase',
	},
	'&.MuiMenuItem-option': {
		color: 'orange',
		textTransform: 'uppercase',
	},
}))

const DropdownMenu = ({ buttonLabel, options }) => {
	const [anchorEl, setAnchorEl] = useState(null)

	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<div onClick={options ? handleClick : null}>{buttonLabel}</div>
			{options && (
				<StyledMenu
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					{options.map((option, index) => (
						<StyledMenuItem key={index} onClick={handleClose}>
							<>
								<Typography variant='closed_cells'>{option.name} - </Typography>
								<Typography variant='closed_cells' style={{ color: '#E06B00' }}>
									{option.count}
								</Typography>
							</>
						</StyledMenuItem>
					))}
				</StyledMenu>
			)}
		</div>
	)
}

export default DropdownMenu
