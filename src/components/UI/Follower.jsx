import { Box } from '@mui/material'
import Image from 'next/image'
import CellUserAvatar from './UserAvatar'
import green from '@/assets/img/follower_avatar_green.svg'
import yellow from '@/assets/img/follower_avatar_yellow.svg'
import return_img from '@/assets/img/return.svg'

export default function Follower({
	className,
	onClick,
	avatar,
	isAccepted,
	isReturn,
	user,
}) {
	return (
		<Box
			onClick={onClick}
			className={className}
			display='flex'
			justifyContent='center'
			alignItems='center'
			style={{
				backgroundImage: isAccepted
					? `url(${green.src})`
					: `url(${yellow.src})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'contain',
				width: '100px',
				height: '100px',
				cursor: user ? 'pointer' : 'default',
			}}
		>
			<CellUserAvatar
				avatarUrl={avatar}
				width={80}
				height={92}
				style={{ position: 'relative' }}
			/>
			{isReturn && (
				<Image
					src={return_img.src}
					width={49}
					height={49}
					style={{ position: 'absolute' }}
				/>
			)}
		</Box>
	)
}
