import Image from 'next/image'
import main from '../assets/img/main.png'
import { Typography } from '@mui/material'


export default function MainPage() {
  return (
    <>
        <div>
            <Typography variant=''>We are 3000+</Typography>
            <Image src={main.src} width={600} height={530}/>
            <Typography variant=''>Opportunities</Typography>
            <Typography variant=''>For everyone</Typography>
        </div>
    </>
  )
}
