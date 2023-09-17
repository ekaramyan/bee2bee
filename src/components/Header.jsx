import { useMediaQuery } from '@mui/material'
import Image from 'next/image'
import logo from '../assets/img/logo.svg'

export default function Header() {
	return (
		<header
			style={{
				width: '80%',
				background: '#EAEEE8CC',
				display: 'flex',
				alignItems: 'center',
				height: '80px',
				borderRadius: '0 0 20px 20px',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
					padding: '0 20px',
				}}
			>
				<Image src={logo.src} width={200} height={35} />

				<div>
					<p>socials</p>
				</div>
			</div>
		</header>
	)
}
