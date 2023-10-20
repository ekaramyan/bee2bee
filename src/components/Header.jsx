import { useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import Logo from './UI/Logo'
import Socials from './UI/Socials'
import UserMenu from './UI/UserMenu'
import BurgerMenu from './UI/BurgerMenu'

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
