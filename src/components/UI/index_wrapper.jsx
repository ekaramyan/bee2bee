import { Container } from '@mui/material'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Login = dynamic(() => import('../Login'))
const Register = dynamic(() => import('../Register'))
const MyCells = dynamic(() => import('../../components/MyCells'))
const RealCells = dynamic(() => import('../../components/RealCells'))
const SideModal = dynamic(() => import('./SideModal'))

import background from '../../assets/img/background.png'

const IndexWrapper = ({ children, ...props }) => {
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	const [isRegisterOpen, setIsRegisterOpen] = useState(false)
	const router = useRouter()
	const loggedIn = useSelector(state => state.user.loggedIn)

	const toggleLogin = () => {
		setIsLoginOpen(!isLoginOpen)
	}
	const toggleRegister = () => {
		setIsRegisterOpen(!isRegisterOpen)
	}
	return (
		<>
			<div
				style={{
					overflow: 'hidden',
					position: 'relative',
					background: `url(${background.src}) no-repeat center / cover`,
					height: '100dvh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Container
					style={{
						display: 'flex',
						flexDirection: 'column',
						height: '100%',
						justifyContent: 'space-between',
					}}
					{...props}
				>
					<Header loggedIn={loggedIn} />
					{children}
					<Footer
						onContactsClick={() => router.push('/contacts')}
						onRulesClick={() => router.push('/rules')}
						onMainPageClick={() => router.push('/')}
					/>
				</Container>

				{loggedIn ? (
					<>
						<SideModal
							isLoginOpen={isLoginOpen}
							isRegisterOpen={isRegisterOpen}
							isRight={false}
						>
							<MyCells toggleOpen={toggleLogin} />
						</SideModal>
						<SideModal
							isLoginOpen={isLoginOpen}
							isRegisterOpen={isRegisterOpen}
							isRight={true}
						>
							<RealCells toggleOpen={toggleRegister} />
						</SideModal>
					</>
				) : (
					<>
						<SideModal
							isLoginOpen={isLoginOpen}
							isRegisterOpen={isRegisterOpen}
							isRight={false}
						>
							<Login toggleOpen={toggleLogin} />
						</SideModal>
						<SideModal
							isLoginOpen={isLoginOpen}
							isRegisterOpen={isRegisterOpen}
							isRight={true}
						>
							<Register toggleOpen={toggleRegister} />
						</SideModal>
					</>
				)}
			</div>
		</>
	)
}

export default IndexWrapper
