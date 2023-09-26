import React from 'react'
import { Box } from '@mui/material'

const Wrapper = ({ children, ...props }) => {
	return (
		<Box
			style={{
				width: '100%',
				height: '75%',
				background: '#EAEEE8CC',
				borderRadius: 20,
				overflow: 'hidden',
				padding: '25px 10px 20px 20px',
				display: 'flex',
				flexDirection: 'column',
				gap: 30,
			}}
			{...props}
		>
			{children}
		</Box>
	)
}

export default Wrapper
