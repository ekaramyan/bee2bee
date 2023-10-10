import Image from 'next/image'
import avatar from '@/assets/img/leader_avatar.svg'

export default function Leader({ style }) {
	return (
		<div style={style}>
			<Image src={avatar.src} width={150} height={150} />
		</div>
	)
}
