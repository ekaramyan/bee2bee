import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/img/logo.svg'

export default function Logo() {
	return (
		<Link href={'/'}>
			<Image src={logo.src} width={200} height={35} />
		</Link>
	)
}
