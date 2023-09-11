import Image from 'next/image'
import main from '../assets/img/main.png'


export default function MainPage() {
  return (
    <>
        <Image src={main.src} width={600} height={530}/>
    </>
  )
}
