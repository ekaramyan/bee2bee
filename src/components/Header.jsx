import { useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import dynamic from 'next/dynamic'
const Logo = dynamic(() => import('./UI/Logo'))
const Socials = dynamic(() => import('./UI/Socials'))
const UserMenu = dynamic(() => import('./UI/UserMenu'))
const BurgerMenu = dynamic(() => import('./UI/BurgerMenu'))

export default function Header({ loggedIn }) {
	const [burgerOpen, setBurgerOpen] = useState(false)
	const isMobile = useMediaQuery('@media(max-width:1300px)')
	const toggleBurgerMenu = () => {
		setBurgerOpen(!burgerOpen)
	}
	return (
		<header
			style={{
				width: '100%',
				background: '#EAEEE8',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: 30,
				minHeight: 80,
				borderRadius: '0 0 20px 20px',
				userSelect: 'none',
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
				<Logo />

				{loggedIn ? (
					<UserMenu />
				) : (
					<div>
						<Socials width={isMobile ? 30 : 40} height={isMobile ? 30 : 40} />
					</div>
				)}
				{!loggedIn && isMobile && (
					<>
						<MenuIcon onClick={toggleBurgerMenu} />
						<BurgerMenu
							loggedIn={false}
							toggleBurgerMenu={toggleBurgerMenu}
							burgerOpen={burgerOpen}
						/>
					</>
				)}
			</div>
		</header>
	)
}
