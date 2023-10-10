import Image from 'next/image'
import { Box } from '@mui/material'
import tiktok from '@/assets/img/socials/tiktok.svg'
import facebook from '@/assets/img/socials/facebook.svg'
import instagram from '@/assets/img/socials/instagram.svg'
import telegram from '@/assets/img/socials/telegram.svg'
import vk from '@/assets/img/socials/vk.svg'
import whatsapp from '@/assets/img/socials/whatsapp.svg'
import youtube from '@/assets/img/socials/youtube.svg'
import Link from 'next/link'

export default function Socials({ width, height }) {
	const socials = [
		{ img: facebook, url: 'facebook.com' },
		{ img: telegram, url: 'telegram.org' },
		{ img: instagram, url: 'facebook.com' },
		{ img: vk, url: 'vk.com' },
		{ img: whatsapp, url: 'whatsapp.com' },
		{ img: tiktok, url: 'tiktok.com' },
		{ img: youtube, url: 'youtube.com' },
	]
	return (
		<>
			<Box
				style={{
					display: 'flex',
					width: '100%',
					gap: 5,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{socials.map(item => (
					<Link href={item.url}>
						<Image src={item.img.src} width={width} height={height} />
					</Link>
				))}
			</Box>
		</>
	)
}
