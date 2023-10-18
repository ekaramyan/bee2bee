import { Typography } from '@mui/material'
import RegisterComponent from './RegisterComponent'

export default function Register({ toggleOpen, isRegisterOpen }) {
	return (
		<div
			style={{
				padding: '2% 20px',
				height: '100%',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<RegisterComponent />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					flex: '1',
					position: 'relative',
					height: 20,
					width: 20,
				}}
			>
				<Typography
					variant='auth_head'
					gutterBottom
					onClick={toggleOpen}
					style={{
						transform: 'rotate(90deg)  translateY(50%) translateX(50%)',
						top: '-900%',
						left: '90%',
						right: 0,
						color: isRegisterOpen ? '#E06B00' : '#1B170F',
						textShadow: isRegisterOpen
							? '1px 1px 2px #1B170F'
							: '1px 1px 2px #E06B00',
					}}
				>
					New Members
				</Typography>
			</div>
		</div>
	)
}
