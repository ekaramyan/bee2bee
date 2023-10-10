import { Box } from '@mui/material'
import Image from 'next/image'
import green from '@/assets/img/follower_avatar_green.svg'
import yellow from '@/assets/img/follower_avatar_yellow.svg'

export default function Follower({ className, avatarImage }) {
	return (
		<Box
			className={className}
			display='flex'
			justifyContent='center'
			alignItems='center'
			style={{
				background: `url(${green.src}) no-repeat center / contain`,
				width: '80px',
				height: '80px',
			}}
		>
			{/* <Image src={avatarImage.src} width={80} height={80} /> */}
		</Box>
	)
}
