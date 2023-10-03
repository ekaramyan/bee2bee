import Logo from './UI/Logo'
import Socials from './UI/Socials'
import UserMenu from './UI/UserMenu'



export default function Header({ loggedIn }) {
	return (
		<header
			style={{
				width: '100%',
				background: '#EAEEE8CC',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: 30,
				height: '80px',
				borderRadius: '0 0 20px 20px',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '0 20px',
					width: '100%',
				}}
			>
				<Logo />

				{loggedIn ? (
					<UserMenu />
				) : (
					<div>
						<Socials />
					</div>
				)}
			</div>
		</header>
	)
}
