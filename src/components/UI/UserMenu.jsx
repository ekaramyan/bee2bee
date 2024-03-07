import {
	ButtonBase,
	Button,
	Box,
	useMediaQuery,
	// Tooltip,
	// ClickAwayListener,
} from '@mui/material'
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

export default function UserMenu() {
	const router = useRouter()
	const dispatch = useDispatch()
	const apiUrl = process.env.API_URL
	const token = Cookies.get('access_token')

	const [data, setData] = useState(null)
	const [open, setOpen] = useState(false)
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
			<Box
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: isMobile ? 20 : 15,
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
					{!isMobile && (
						<p>
							{data?.nickname.slice(0, 10)}
							{data?.nickname.length > 10 && '...'}
						</p>
					)}
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
