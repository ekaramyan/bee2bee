import React from 'react'
import Image from 'next/image'
import { Button, Box } from '@mui/material'
import background from '../../assets/img/join_cell_bg_large.svg'
import refresh from '@/assets/img/refresh.svg'
import close from '@/assets/img/close.svg'

export default function BigCell({ children, ...props }) {
	const defaultStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		height: '100%',
		minHeight: '65vh',
		background: `url(${background.src}) center / contain no-repeat`,
		gap: 20,
		padding: '3% 1%',
	}
	const combinedStyle = { ...defaultStyle, ...props.style }

	return (
		<Box style={combinedStyle}>
			{!props.activeUser && (
				<Button onClick={props.onRefreshClick} style={{ cursor: 'pointer' }}>
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
				<Image src={close.src} width={25} height={25} />
			</Button>
		</Box>
	)
}
