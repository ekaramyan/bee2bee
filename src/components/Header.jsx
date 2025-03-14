import { useMediaQuery, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const Logo = dynamic(() => import('./UI/Logo'))
const UserMenu = dynamic(() => import('./UI/UserMenu'))
const BurgerMenu = dynamic(() => import('./UI/BurgerMenu'))
// import CelebrationTimer from './UI/CelebrationTimer'
// import CelebrationMessage from './UI/CelebrationMessage'

import en from '@/assets/img/en.png'
import ge from '@/assets/img/ge.png'
import ru from '@/assets/img/ru.png'

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
				zIndex: 1,
			}}
		>
			<Box
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '0 20px',
					width: '100%',
					gap: 20,
				}}
			>
				<Box style={{ display: 'flex', alignItems: 'center', gap: 25 }}>
					<Logo />
				</Box>
				<Box
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: 5,
						width: '100%',
					}}
				>
					<Box
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: loggedIn ? 'space-between' : 'flex-end',
							gap: 24,
							width: '100%',
						}}
					>
						<Box style={{ display: 'flex', alignItems: 'center' }}>
							{/* <CelebrationMessage/> */}
							{/* <CelebrationTimer /> */}
						</Box>
						{loggedIn ? (
							<UserMenu />
						) : (
							<Box
								style={{
									display: 'flex',
									gap: 10,
									justifyContent: 'flex-end',
									marginRight: 15,
								}}
							>
								{/* <Image src={en.src} width={32} height={24} />
								<Image src={ge.src} width={32} height={24} />
								<Image src={ru.src} width={32} height={24} /> */}
							</Box>
						)}
					</Box>
				</Box>
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
			</Box>
		</header>
	)
}
