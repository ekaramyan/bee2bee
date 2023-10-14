import React from 'react'
import background from '../../assets/img/join_cell_bg_large.svg'
import Image from 'next/image'
import { Button, Box } from '@mui/material'
import refresh from '@/assets/img/refresh.svg'

export default function BigCell({ children, ...props }) {
	const defaultStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		height: '100%',
		background: `url(${background.src}) center / contain no-repeat`,
		gap: 20,
		padding: '2% 1%',
	}
	const combinedStyle = { ...defaultStyle, ...props.style }

	return (
		<Box style={combinedStyle}>
			{!props.activeUser && (
				<Button onClick={props.onRefreshClick}>
					<Image src={refresh.src} width={31} height={25} />
				</Button>
			)}
			{children}
			<Button
				onClick={props.onCloseClick}
				style={{
					cursor: 'pointer',
					width: '40%',
					color: '#fff',
					textAlign: 'center',
					fontFamily: 'Noto Sans',
					fontSize: 24,
					fontWeight: 400,
					textTransform: 'uppercase',
				}}
			>
				X
			</Button>
		</Box>
	)
}
