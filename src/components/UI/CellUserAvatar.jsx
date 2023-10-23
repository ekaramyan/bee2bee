import Image from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import defaultAvatar from '../../assets/img/default.jpg'
import useIsLeader from '@/hooks/useIsLeader'

export default function UserAvatar({
	avatarUrl,
	width = 157,
	height = 181,
	isLeader = false,
}) {
	console.log(avatarUrl)
	const [avatar, setAvatar] = useState(null)
	const apiUrl = process.env.API_URL
	const token = Cookies.get('access_token')
	const router = useRouter()
	const { cellId } = router.query

	useEffect(() => {
		const fetchDataAsync = async () => {
			try {
				const avatarResponse = await axios.get(`${apiUrl}${avatarUrl}`, {
					headers: { Authorization: `Bearer ${token}` },
					responseType: 'blob',
				})

				const objectUrl = URL.createObjectURL(avatarResponse.data)
				setAvatar(objectUrl)
				return () => URL.revokeObjectURL(objectUrl)
			} catch (error) {
				if (!error.response || error.response.status !== 404) {
					console.error('Error fetching data: ', error)
				}
			}
		}

		if (avatarUrl) {
			fetchDataAsync()
		}
	}, [cellId, avatarUrl])
	{
		return (
			<Image
				src={avatar || defaultAvatar}
				width={width - 5}
				height={height - 5}
				style={{
					position: 'relative',
					overflow: 'hidden',
					clipPath:
						'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
					transform: isLeader
						? 'translateY(8px) translateX(10px)'
						: 'translateY(-1px)',
					objectFit: 'cover',
				}}
			></Image>
		)
	}
}
