import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useAvatar from '@/hooks/useAvatar'
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
	const avatarReloadFlag = useSelector(state => state.user.avatarUrl)
	const {
		avatar: cachedAvatar,
		isError,
		isLoading,
		mutate,
	} = useAvatar(avatarUrl, avatarReloadFlag)

	useEffect(() => {
		if (avatarReloadFlag) {
			mutate()
		}
	}, [avatarReloadFlag])

	const avatarSrc = previewImage || cachedAvatar || defaultAvatar

	const imageStyles = {
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
				cachedAvatar ? (
					<CircularProgress />
				) : (
					<Image
						src={defaultAvatar}
						width={isClickable ? width : width - 5}
						height={isClickable ? height : height - 5}
						style={imageStyles}
						alt='User Avatar'
					/>
				)
			) : (
				<Image
					src={avatarSrc}
					width={isClickable ? width : width - 5}
					height={isClickable ? height : height - 5}
					style={imageStyles}
					alt='User Avatar'
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
