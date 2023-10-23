import CellUserAvatar from './CellUserAvatar'
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
			}}
		>
			<CellUserAvatar
				avatarUrl={avatar}
				width={125}
				height={145}
				isLeader={true}
			/>
		</div>
	)
}
