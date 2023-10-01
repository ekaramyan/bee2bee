import { Typography, Box } from '@mui/material'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import en from '@/assets/img/en.png'
import ge from '@/assets/img/ge.png'
import ru from '@/assets/img/ru.png'

export default function Footer({
	onContactsClick,
	onRulesClick,
	onMainPageClick,
}) {
	const router = useRouter()
	const page = router.asPath.split('/')[1]
	const [activeTab, setActiveTab] = useState(page)
	useEffect(() => {
		setActiveTab(page)
	}, [page])

	const handleTabClick = (tabName, callback) => {
		setActiveTab(tabName)
		callback()
	}

	const getTabStyles = tabName => {
		return activeTab === tabName
			? { color: '#E06B00', textDecoration: 'underline' }
			: {}
	}

	return (
		<footer
			style={{
				width: '100%',
				background: '#EAEEE8CC',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				height: '80px',
				borderRadius: '20px 20px 0px 0px',
				padding: '0 20px',
				justifySelf: 'end',
			}}
		>
			<div style={{ display: 'flex', gap: 20 }}>
				<Typography
					variant='footer_buttons'
					style={getTabStyles('')}
					onClick={() => handleTabClick('', onMainPageClick)}
				>
					Main Page
				</Typography>

				<Typography
					variant='footer_buttons'
					style={getTabStyles('rules')}
					onClick={() => handleTabClick('rules', onRulesClick)}
				>
					Rules
				</Typography>

				<Typography
					variant='footer_buttons'
					style={getTabStyles('contacts')}
					onClick={() => handleTabClick('contacts', onContactsClick)}
				>
					Contact us
				</Typography>
			</div>
			<Box style={{ display: 'flex', gap: 10 }}>
				<Image src={en.src} width={32} height={24} />
				<Image src={ge.src} width={32} height={24} />
				<Image src={ru.src} width={32} height={24} />
			</Box>
		</footer>
	)
}
