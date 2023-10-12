import { Box } from '@mui/material'
import Image from 'next/image'
import CellUserAvatar from './CellUserAvatar'
import green from '@/assets/img/follower_avatar_green.svg'
import yellow from '@/assets/img/follower_avatar_yellow.svg'

export default function Follower({ className, onClick, avatar, isAccepted }) {
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
			}}
		>
			<CellUserAvatar avatar={avatar?.src} width={80} height={90} />
		</Box>
	)
}
