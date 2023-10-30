import Image from 'next/image'
import UserAvatar from './UserAvatar'
import avatarBg from '@/assets/img/leader_avatar.svg'
import exclamation from '@/assets/img/exclamation.svg'

export default function Leader({ style, onClick, avatar, isAllReturnPaid }) {
	return (
		<div
			onClick={onClick}
			style={{
				...style,
				background: `url(${avatarBg.src}) no-repeat center / cover`,
				width: '140px',
				height: '156px',
				cursor: 'pointer',
				position: 'relative',
			}}
		>
			<UserAvatar
				avatarUrl={avatar}
				width={123}
				height={140}
				isLeader={true}
				style={{}}
			/>
			{isAllReturnPaid && (
				<div
					src={exclamation.src}
					style={{
						position: 'absolute',
						top: -15,
						right: 20,
						fontSize: 45,
						fontWeight: 700,
						color: '#FA0000',
					}}
				>
					!
				</div>
			)}
		</div>
	)
}
