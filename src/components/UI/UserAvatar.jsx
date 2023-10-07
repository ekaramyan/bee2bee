import Image from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export default function UserAvatar({
	previewImage,
	width = 157,
	height = 181,
}) {
	const [avatar, setAvatar] = useState(null)
	const apiUrl = process.env.API_URL
	const token = Cookies.get('access_token')
	useEffect(() => {
		const fetchDataAsync = async () => {
			try {
				const avatarResponse = await axios.get(`${apiUrl}/users/me/photo`, {
					headers: { Authorization: `Bearer ${token}` },
					responseType: 'blob',
				})

				const objectUrl = URL.createObjectURL(avatarResponse.data)
				setAvatar(objectUrl)
				return () => URL.revokeObjectURL(objectUrl)
			} catch (error) {
				console.error('Error fetching data: ', error)
			}
		}
		fetchDataAsync()
	}, [])
	{
		return (
			<div
				style={{
					position: 'relative',
					width: `${width}px`,
					height: `${height}px`,
					overflow: 'hidden',
					clipPath:
						'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
				}}
			>
				{previewImage ? (
					<Image src={previewImage} layout='fill' objectFit='cover' />
				) : (
					<Image src={avatar || ''} layout='fill' objectFit='cover' />
				)}
			</div>
		)
	}
}
