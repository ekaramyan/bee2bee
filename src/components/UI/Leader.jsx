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
			{isAllReturnPaid&&(
				<Image
					src={exclamation.src}
					width={45}
					height={40}
					style={{ position: 'absolute', top: 0, right: 0 }}
				/>
			)}
		</div>
	)
}
