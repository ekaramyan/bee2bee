import { useMediaQuery, List, ListItem } from '@mui/material'
import Image from 'next/image'
import logo from '../assets/img/logo.svg'

export default function Header({ loggedIn }) {
	return (
		<header
			style={{
				width: '100%',
				background: '#EAEEE8CC',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: 30,
				height: '80px',
				borderRadius: '0 0 20px 20px',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '0 20px',
					width: '100%',
				}}
			>
				<Image src={logo.src} width={200} height={35} />

				{loggedIn ? (
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<List style={{ display: 'flex', alignItems: 'center' }}>
							<ListItem>Dashboard</ListItem>
							<ListItem>My Account</ListItem>
							<ListItem>Account Settings</ListItem>
							<ListItem>FAQ</ListItem>
						</List>
						<div>
							<Image></Image>
							<p>Nickname</p>
						</div>
						<p>Exit</p>
					</div>
				) : (
					<div>
						<p>socials</p>
					</div>
				)}
			</div>
		</header>
	)
}
