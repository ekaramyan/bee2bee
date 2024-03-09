import { useMediaQuery, Box, LinearProgress } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useEffect, useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const Logo = dynamic(() => import('./UI/Logo'))
const UserMenu = dynamic(() => import('./UI/UserMenu'))
const BurgerMenu = dynamic(() => import('./UI/BurgerMenu'))
import en from '@/assets/img/en.png'
import ge from '@/assets/img/ge.png'
import ru from '@/assets/img/ru.png'
import StatsBar from './UI/StatsBar'
import useGetStats from '@/hooks/useGetStats'

export default function Header({ loggedIn }) {
	const [burgerOpen, setBurgerOpen] = useState(false)
	const [stats, setStats] = useState({})
	const isMobile = useMediaQuery('@media(max-width:1300px)')
	const toggleBurgerMenu = () => {
		setBurgerOpen(!burgerOpen)
	}
	const { getStats, data, loading, error, success } = useGetStats()

	useEffect(() => {
		const fetchData = async () => {
			try {
				await getStats()
			} catch (err) {
				console.error('Error fetching stats:', err)
			}
		}
		fetchData()
	}, [])

	useEffect(() => {
		if (data !== null && error === null) {
			setStats(data)
		}
	}, [data])
	const statsBar = useMemo(() => <StatsBar stats={stats} />, [stats])

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
							justifyContent: 'center',
							gap: 24,
							width: '100%',
						}}
					>
						{isMobile ? <div /> : loading ? <LinearProgress /> : statsBar}
					</Box>
					{loggedIn ? (
						<UserMenu />
					) : (
						<Box
							style={{
								display: 'flex',
								gap: 10,
								justifyContent: 'flex-start',
								marginRight: 15,
							}}
						>
							<Image src={en.src} width={32} height={24} />
							<Image src={ge.src} width={32} height={24} />
							<Image src={ru.src} width={32} height={24} />
						</Box>
					)}
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
