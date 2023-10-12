import Image from 'next/image'

export default function UserAvatar({ avatar, width = 157, height = 181 }) {
	{
		return (
			<div
				style={{
					position: 'relative',
					width: `${width}px`,
					height: `${height}px`,
					overflow: 'hidden',
					clipPath:
						'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',				}}
			>
				<Image src={avatar || ''} layout='fill' objectFit='cover' />
			</div>
		)
	}
}
