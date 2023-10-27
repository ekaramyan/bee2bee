import { Box, Typography, useMediaQuery } from '@mui/material'

const Wrapper = ({ children, ...props }) => {
	const isMobile = useMediaQuery('@media(max-width:1300px)')
	return (
		<Box
			style={{
				width: '100%',
				height: props.notLoggedIn ? '75%' : '100%',
				background: '#EAEEE8CC',
				borderRadius: 20,
				overflow: 'hidden',
				padding: isMobile ? '10px 30px 20px' : '25px 10px 20px 30px',
				display: 'flex',
				flexDirection: 'column',
				gap: 30,
			}}
			{...props}
		>
			<Typography
				variant='block_header'
				sx={{
					padding: '10px',
					alignSelf: 'start',
				}}
			>
				{props.header}
				<div
					style={{
						transform: 'translateX(-20px)',
						borderBottom: '1px solid #E06B00',
						width: 100,
					}}
				/>
			</Typography>
			{children}
		</Box>
	)
}

export default Wrapper
