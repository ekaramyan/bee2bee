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
import Image from 'next/image'
import { fetchData } from '@/api/fetchData'
import account from '@/assets/img/join_cell_bg.svg'
const UserAvatar = dynamic(() => import('./UserAvatar'))
import BurgerMenu from './BurgerMenu'
import logout from '@/assets/img/logout.svg'

const tabs = ['cells', 'account', 'account-settings', 'faq']
const tabNames = {
	cells: 'Dashboard',
	account: 'My Account',
	'account-settings': 'Account Settings',
	faq: 'FAQ',
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
						<MenuIcon onClick={toggleBurgerMenu} />
						<BurgerMenu
							loggedIn={true}
							toggleBurgerMenu={toggleBurgerMenu}
							burgerOpen={burgerOpen}
						/>
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
						<UserAvatar
							previewImage={null}
							width={44}
							height={52}
							isClickable={true}
							avatarUrl='/users/me/photo'
							style={{ transform: 'translateY(2%)' }}
						/>
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
