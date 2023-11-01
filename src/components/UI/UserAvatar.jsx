import Image from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import defaultAvatar from '../../assets/img/default.jpg'
import { CircularProgress } from '@mui/material'

export default function UserAvatar({
	previewImage,
	avatarUrl,
	width = 157,
	height = 181,
	isLeader = false,
	isClickable = false,
	clickUrl = '/account',
	style,
}) {
	const [avatar, setAvatar] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const apiUrl = process.env.API_URL
	const token = Cookies.get('access_token')
	const router = useRouter()
	const { cellId } = router.query
	const avatarReload = useSelector(state => state.user.avatarUrl)

	useEffect(() => {
		const fetchDataAsync = async () => {
			try {
				if (avatarUrl) {
					{
						const url = `${apiUrl}${avatarUrl}`

						const avatarResponse = await axios.get(url, {
							headers: { Authorization: `Bearer ${token}` },
							responseType: 'blob',
						})

						const objectUrl = URL.createObjectURL(avatarResponse.data)
						setIsLoading(false)
						setAvatar(objectUrl)
					}
				}
				return () => URL.revokeObjectURL(objectUrl)
			} catch (error) {
				if (!error.response || error.response.status !== 404) {
					console.error('Error fetching data: ', error)
				}
			}
		}

		fetchDataAsync()
	}, [cellId, avatarUrl, avatarReload])
	const avatarStyle = {
		position: 'relative',
		overflow: 'hidden',
		clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
		transform: isLeader
			? 'translateY(8px) translateX(10px)'
			: 'translateY(-1px)',
		objectFit: 'cover',
		...style,
	}

	const avatarImage = (
		<>
			{isLoading ? (
				!avatar ? (
					<Image
						src={defaultAvatar}
						width={isClickable ? width : width - 5}
						height={isClickable ? height : height - 5}
						loading='lazy'
						style={avatarStyle}
					/>
				) : (
					<CircularProgress />
				)
			) : (
				<Image
					src={previewImage || avatar || defaultAvatar}
					width={isClickable ? width : width - 5}
					height={isClickable ? height : height - 5}
					loading='lazy'
					style={avatarStyle}
				/>
			)}
		</>
	)

	if (isClickable) {
		return (
			<Link
				href={clickUrl}
				passHref
				style={{
					position: 'relative',
					width: `${width}px`,
					height: `${height}px`,
					overflow: 'hidden',
					clipPath:
						'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
				}}
			>
				{avatarImage}
			</Link>
		)
	}

	return avatarImage
}
