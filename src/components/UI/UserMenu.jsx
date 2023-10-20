import {
	List,
	Typography,
	ButtonBase,
	Button,
	Box,
	useMediaQuery,
} from '@mui/material'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { useEffect, useState, useCallback } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import Image from 'next/image'
import { fetchData } from '@/api/fetchData'
import account from '@/assets/img/join_cell_bg.svg'
const UserAvatar = dynamic(() => import('./UserAvatar'))
import logout from '@/assets/img/logout.svg'

const tabs = ['cells', 'account', 'account-settings', 'rules']
const tabNames = {
	cells: 'Dashboard',
	account: 'My Account',
	'account-settings': 'Account Settings',
	rules: 'FAQ',
}
const mobileTabs = {
	cells: 'Dashboard',
	account: 'My Account',
	'account-settings': 'Account Settings',
	'my-cells': 'my cells',
	'real-cells': 'Real cells',
	rules: 'FAQ',
	about: 'about us',
	'privacy-policy': 'Privacy policy',
	help: 'help',
	contacts: 'contact us',
}

export default function UserMenu() {
	const router = useRouter()
	const dispatch = useDispatch()
	const apiUrl = process.env.API_URL
	const token = Cookies.get('access_token')
	const [activeTab, setActiveTab] = useState(router.asPath.split('/')[1])
	const [data, setData] = useState(null)
	const [burgerOpen, setBurgerOpen] = useState(false)
	const isMobile = useMediaQuery('@media(max-width: 1300px)')

	const fetchDataAsync = useCallback(async () => {
		try {
			const response = await fetchData(`${apiUrl}/users/me`, token)
			setData(response?.data)
		} catch (error) {
			if (error.status === 401) {
				Cookies.remove('access_token')
				dispatch({ type: 'LOG_OUT' })
			}
			console.error('Error fetching data: ', error)
		}
	}, [apiUrl, token, dispatch])

	useEffect(() => {
		fetchDataAsync()
	}, [fetchDataAsync])

	useEffect(() => {
		setActiveTab(router.asPath.split('/')[1])
	}, [router.asPath])

	const onExitClick = () => {
		Cookies.remove('access_token')
		Cookies.remove('refresh_token')
		dispatch({ type: 'LOG_OUT' })
		router.push('/')
	}

	const renderMobileMenu = () => (
		<Drawer anchor='top' open={burgerOpen} onClose={toggleBurgerMenu}>
			<ButtonBase
				onClick={toggleBurgerMenu}
				style={{
					cursor: 'pointer',
					alignSelf: 'end',
					border: '2px solid #E06B00',
					borderRadius: '50%',
					color: '#E06B00',
					width: 40,
					height: 40,
					margin: '30px 30px 0 0',
				}}
			>
				<p style={{ fontSize: 20, fontWeight: 200 }}>X</p>
			</ButtonBase>
			<List
				style={{
					height: '100dvh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{Object.keys(mobileTabs).map((tab, index) => (
					<>
						<Link key={index} href={`/${tab}`}>
							<Typography variant='burger_tabs' onClick={toggleBurgerMenu}>
								{mobileTabs[tab]}
							</Typography>
						</Link>
					</>
				))}
			</List>
		</Drawer>
	)
	const toggleBurgerMenu = () => {
		setBurgerOpen(!burgerOpen)
	}

	return (
		<>
			{!isMobile && (
				<List
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '60%',
						gap: 40,
					}}
				>
					{tabs.map((tab, index) => (
						<Link key={index} href={`/${tab}`}>
							<Typography
								variant='header_buttons'
								style={
									activeTab === tab
										? { color: '#E06B00', textDecoration: 'underline' }
										: {}
								}
							>
								{tabNames[tab]}
							</Typography>
						</Link>
					))}
				</List>
			)}
			<Box
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: isMobile ? 20 : 5,
				}}
			>
				{isMobile && (
					<>
						<MenuIcon
							onClick={toggleBurgerMenu}
							style={{ cursor: 'pointer', justifySelf: 'flex-end' }}
						/>
						{renderMobileMenu()}
					</>
				)}
				<Box style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
					<div
						style={{
							position: 'relative',
							width: '50px',
							height: '56px',
							backgroundImage: `url(${account.src})`,
							zIndex: 0,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<UserAvatar previewImage={null} width={44} height={52} />
					</div>
					{!isMobile && <p>{data?.nickname}</p>}
				</Box>
				<>
					{isMobile ? (
						<ButtonBase
							onClick={onExitClick}
							style={{ cursor: 'pointer', width: 20, padding: 0, margin: 0 }}
						>
							<Image src={logout.src} width={18} height={18} />
						</ButtonBase>
					) : (
						<Button
							onClick={onExitClick}
							style={{ cursor: 'pointer', width: 20, padding: 0, margin: 0 }}
						>
							<Image src={logout.src} width={18} height={18} />
						</Button>
					)}
				</>
			</Box>
		</>
	)
}
