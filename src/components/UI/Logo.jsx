import Image from 'next/image'
import logo from '../../assets/img/logo.svg'

export default function Logo() {
	return <Image src={logo.src} width={200} height={35} />
}
