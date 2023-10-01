import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

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
			<div>languges</div>
		</footer>
	)
}
