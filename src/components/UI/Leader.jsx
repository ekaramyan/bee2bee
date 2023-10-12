import CellUserAvatar from './CellUserAvatar'
import avatarBg from '@/assets/img/leader_avatar.svg'

export default function Leader({ style, onClick, avatar }) {
	return (
		<div style={style} onClick={onClick}>
			<div
				style={{ background: `url(${avatarBg.src}) no-repeat center / 100%` }}
			>
				<CellUserAvatar avatar={avatar?.src} width={130} height={150} />
			</div>
		</div>
	)
}
