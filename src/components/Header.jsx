import {
	useMediaQuery,
	List,
	ListItem,
	Typography,
	Button,
	Box,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { styled } from '@mui/material'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { fetchData } from '@/api/fetchData'
import logo from '../assets/img/logo.svg'
import account from '@/assets/img/join_cell_bg.svg'
import { useEffect, useState } from 'react'

const LI = styled(ListItem)`
	text-decoration: none;
	width: fit-content;
`

export default function Header({ loggedIn }) {
	const [data, setData] = useState(null)
	const router = useRouter()
	const dispatch = useDispatch()
	const onExitClick = () => {
		Cookies.remove('access_token')
		Cookies.remove('refresh_token')
		dispatch({ type: 'LOG_OUT' })
		router.push('/')
	}
	const apiUrl = process.env.API_URL
	const token = Cookies.get('access_token')
	useEffect(() => {
		const fetchDataAsync = async () => {
			try {
				const response = await fetchData(`${apiUrl}/users/me`, token)
				setData(response?.data)
			} catch (error) {
				console.error('Error fetching data: ', error)
			}
		}
		fetchDataAsync()
	}, [])

	console.log(data)

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
								<Link href={'/rules'}>
									<Typography variant='header_buttons'>FAQ</Typography>
								</Link>
							</LI>
						</List>
						<Box style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
							<Box style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
								<Image src={account.src} width={50} height={50} />
								<p>{data?.nickname}</p>
							</Box>
							<Button onClick={onExitClick}>Exit</Button>
						</Box>
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
