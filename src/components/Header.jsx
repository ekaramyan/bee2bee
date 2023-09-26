import { useMediaQuery, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { styled } from '@mui/material'
import logo from '../assets/img/logo.svg'
import account from '@/assets/img/join_cell_bg.svg'

const LI = styled(ListItem)`
	text-decoration: none;
	width: fit-content;
`

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
					<>
						<List
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: '60%',
								gap: 20,
							}}
						>
							<LI>
								<Link href={'/join-the-cell'}>
									<Typography variant='header_buttons'>Dashboard</Typography>
								</Link>
							</LI>
							<LI>
								<Link href={'/account'}>
									<Typography variant='header_buttons'>My Account</Typography>
								</Link>
							</LI>
							<LI>
								<Link href={'/account-settings'}>
									<Typography variant='header_buttons'>
										Account Settings
									</Typography>
								</Link>
							</LI>
							<LI>
								<Link href={'/faq'}>
									<Typography variant='header_buttons'>FAQ</Typography>
								</Link>
							</LI>
						</List>
						<div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<Image src={account.src} width={50} height={50} />
								<p>Nickname</p>
							</div>
							<p>Exit</p>
						</div>
					</>
				) : (
					<div>
						<p>socials</p>
					</div>
				)}
			</div>
		</header>
	)
}
