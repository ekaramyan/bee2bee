import Image from 'next/image'
import avatar from '@/assets/img/consultant_avatar.svg'

export default function ConsultantAvatar() {
	return (
		<>
			<Image src={avatar.src} width={120} height={120} />
		</>
	)
}
