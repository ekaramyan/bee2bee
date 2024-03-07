import { Typography, useMediaQuery, List } from '@mui/material'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useState, useEffect } from 'react'
import Socials from './UI/Socials'

import DashboardIcon from '@/assets/img/menu/dashboard.jsx'
import AccountIcon from '@/assets/img/menu/my_account.jsx'
import SettingsIcon from '@/assets/img/menu/settings.jsx'
import FaqIcon from '@/assets/img/menu/faq.jsx'

const tabs = ['cells', 'account', 'account-settings', 'faq']
const tabNames = {
	cells: 'Dashboard',
	account: 'My Account',
	'account-settings': 'Account Settings',
	faq: 'FAQ',
}

export default function Footer({ loggedIn }) {
	const router = useRouter()
	const page = router.asPath.split('/')[1]
	const [activeTab, setActiveTab] = useState(page)
	useEffect(() => {
		setActiveTab(page)
	}, [page])

	const handleTabClick = (tabName, callback) => {
		setActiveTab(tabName)
	}

	const getTabStyles = tabName => {
		return activeTab === tabName
			? { color: '#E06B00', textDecoration: 'underline' }
			: {}
	}

	const isMobile = useMediaQuery('@media(max-width:1300px)')

	return (
		<footer
			style={{
				width: '100%',
				background: '#EAEEE8',
				display: 'flex',
				alignItems: 'center',
				justifyContent: isMobile ? 'center' : 'space-between',
				alignSelf: 'end',
				minHeight: 80,
				borderRadius: '20px 20px 0px 0px',
				padding: '0 20px',
				justifySelf: 'end',
				userSelect: 'none',
			}}
		>
			{!isMobile && !loggedIn && (
				<div style={{ display: 'flex', gap: 20 }}>
					<Typography
						variant='footer_buttons'
						style={getTabStyles('about')}
						onClick={() => handleTabClick('about', router.push('/about'))}
					>
						About us
					</Typography>

					<Typography
						variant='footer_buttons'
						style={getTabStyles('rules')}
						onClick={() => handleTabClick('rules', router.push('/rules'))}
					>
						Rules
					</Typography>

					<Typography
						variant='footer_buttons'
						style={getTabStyles('privacy-policy')}
						onClick={() =>
							handleTabClick('privacy-policy', router.push('/privacy-policy'))
						}
					>
						Privacy policy
					</Typography>

					<Typography
						variant='footer_buttons'
						style={getTabStyles('help')}
						onClick={() => handleTabClick('help', router.push('/help'))}
					>
						Help
					</Typography>

					<Typography
						variant='footer_buttons'
						style={getTabStyles('contacts')}
						onClick={() => handleTabClick('contacts', router.push('/contacts'))}
					>
						Contact us
					</Typography>
				</div>
			)}
			{!isMobile && loggedIn && (
				<List
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '60%',
						gap: 40,
					}}
				>
					{tabs.map((tab, index) => (
						<Link key={index} href={`/${tab}`}>
							<Typography
								variant='header_buttons'
								style={{
									display: 'flex',
									gap: 5,
									alignItems: 'center',
									...(activeTab === tab && {
										color: '#E06B00',
										textDecoration: 'underline',
									}),
								}}
							>
								{tab === 'cells' && (
									<DashboardIcon
										fill={activeTab === tab ? '#E06B00' : '#1B170F'}
									/>
								)}
								{tab === 'account' && (
									<AccountIcon
										fill={activeTab === tab ? '#E06B00' : '#1B170F'}
									/>
								)}
								{tab === 'account-settings' && (
									<SettingsIcon
										fill={activeTab === tab ? '#E06B00' : '#1B170F'}
									/>
								)}
								{tab === 'faq' && (
									<FaqIcon fill={activeTab === tab ? '#E06B00' : '#1B170F'} />
								)}
								{tabNames[tab]}
							</Typography>
						</Link>
					))}
				</List>
			)}
			<div>
				<Socials width={isMobile ? 30 : 40} height={isMobile ? 30 : 40} />
			</div>
		</footer>
	)
}
