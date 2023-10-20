import React from 'react'
import { Drawer, List, Typography, ButtonBase } from '@mui/material'
import Link from 'next/link'

export default function BurgerMenu({ loggedIn, toggleBurgerMenu, burgerOpen }) {
	const mobileTabsLoggedIn = {
		cells: 'Dashboard',
		account: 'My Account',
		'account-settings': 'Account Settings',
		'my-cells': 'my cells',
		'real-cells': 'Real cells',
		rules: 'FAQ',
		about: 'about us',
		rules: 'FAQ',
		'privacy-policy': 'Privacy policy',
		help: 'help',
		contacts: 'contact us',
	}

	const mobileTabsNotLoggedIn = {
		about: 'about us',
		rules: 'FAQ',
		'privacy-policy': 'Privacy policy',
		help: 'help',
		contacts: 'contact us',
	}

	const tabs = loggedIn ? mobileTabsLoggedIn : mobileTabsNotLoggedIn

	return (
		<Drawer anchor='top' open={burgerOpen} onClose={toggleBurgerMenu}>
			<ButtonBase
				onClick={toggleBurgerMenu}
				style={{
					cursor: 'pointer',
					alignSelf: 'end',
					border: '2px solid #E06B00',
					borderRadius: '50%',
					color: '#E06B00',
					width: 40,
					height: 40,
					margin: '30px 30px 0 0',
				}}
			>
				<p style={{ fontSize: 20, fontWeight: 200 }}>X</p>
			</ButtonBase>
			<List
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{Object.keys(tabs).map((tab, index) => (
					<Link key={index} href={`/${tab}`}>
						<Typography variant='burger_tabs' onClick={toggleBurgerMenu}>
							{tabs[tab]}
						</Typography>
					</Link>
				))}
			</List>
		</Drawer>
	)
}
