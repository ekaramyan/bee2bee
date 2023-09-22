import { Typography } from '@mui/material'
import { useState } from 'react'

export default function Footer({
	onContactsClick,
	onRulesClick,
	onMainPageClick,
}) {
	const [activeTab, setActiveTab] = useState('Main Page')

	const handleTabClick = (tabName, callback) => {
		setActiveTab(tabName)
		callback()
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
					style={
						activeTab === 'Main Page'
							? { color: '#E06B00', textDecoration: 'underline' }
							: {}
					}
					onClick={() => handleTabClick('Main Page', onMainPageClick)}
				>
					Main Page
				</Typography>

				<Typography
					variant='footer_buttons'
					style={
						activeTab === 'Rules'
							? { color: '#E06B00', textDecoration: 'underline' }
							: {}
					}
					onClick={() => handleTabClick('Rules', onRulesClick)}
				>
					Rules
				</Typography>

				<Typography
					variant='footer_buttons'
					style={
						activeTab === 'Contacts'
							? { color: '#E06B00', textDecoration: 'underline' }
							: {}
					}
					onClick={() => handleTabClick('Contacts', onContactsClick)}
				>
					Contact us
				</Typography>
			</div>
			<div>languges</div>
		</footer>
	)
}
