import { Box } from '@mui/material'
import CellUserAvatar from './UserAvatar'
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
				cursor: 'pointer',
			}}
		>
			<CellUserAvatar avatarUrl={avatar} width={80} height={92} />
		</Box>
	)
}
