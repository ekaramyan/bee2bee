import { List, Typography, Button, Box, ListItem } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { fetchData } from '@/api/fetchData'
import account from '@/assets/img/join_cell_bg.svg'
import { useEffect, useState } from 'react'
import { styled } from '@mui/material'

const LI = styled(ListItem)`
	text-decoration: none;
	width: fit-content;
`

export default function UserMenu() {
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
				console.log(response, 'status')
				if (response.status === 401) {
					Cookies.remove('access_token')
					dispatch({ type: 'LOG_OUT' })
				}
				setData(response?.data)
			} catch (error) {
				console.error('Error fetching data: ', error)
			}
		}
		fetchDataAsync()
	}, [])
	return (
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
						<Typography variant='header_buttons'>Account Settings</Typography>
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
	)
}
