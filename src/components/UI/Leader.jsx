import UserAvatar from './UserAvatar'
import avatarBg from '@/assets/img/leader_avatar.svg'

export default function Leader({ style, onClick, avatar }) {
	return (
		<div
			onClick={onClick}
			style={{
				...style,
				background: `url(${avatarBg.src}) no-repeat center / cover`,
				width: '140px',
				height: '156px',
				cursor: 'pointer',
			}}
		>
			<UserAvatar avatarUrl={avatar} width={123} height={140} isLeader={true} />
		</div>
	)
}
