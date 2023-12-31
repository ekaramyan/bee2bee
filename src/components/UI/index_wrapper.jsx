import { Container, useMediaQuery, Box, styled } from '@mui/material'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AuthButton from './AuthButton'
import Snowfall from 'react-snowfall'

const Login = dynamic(() => import('../Login'))
const Register = dynamic(() => import('../Register'))
const MyCells = dynamic(() => import('../../components/MyCells'))
const RealCells = dynamic(() => import('../../components/RealCells'))
const SideModal = dynamic(() => import('./SideModal'))
import snowflake1 from '../../assets/img/snowflake1.png'
import snowflake2 from '../../assets/img/snowflake2.png'
import snowflake3 from '../../assets/img/snowflake3.png'
import snowflake4 from '../../assets/img/snowflake4.png'
import background from '../../assets/img/background.webp'
import NewYearPage from './Garland/Garland'

const SnowfallContainer = styled('div')`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 0;
	overflow: hidden;
	background: #00000040;
	width: 100%;
	height: 100vh;
`

const IndexWrapper = ({ children, ...props }) => {
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	const [isRegisterOpen, setIsRegisterOpen] = useState(false)
	const router = useRouter()
	const loggedIn = useSelector(state => state.user.loggedIn)
	const isMobile = useMediaQuery('@media(max-width: 1300px)')
	const isLow = useMediaQuery('@media(min-height: 880px)')

	const [snowflakeImages, setSnowflakeImages] = useState([])

	useEffect(() => {
		const loadSnowflakeImages = async () => {
			const loadImage = async src => {
				const image = new Image()
				image.src = src
				await new Promise(resolve => {
					image.onload = resolve
				})
				return image
			}

			const images = await Promise.all([
				loadImage(snowflake1.src),
				loadImage(snowflake2.src),
				loadImage(snowflake3.src),
				loadImage(snowflake4.src),
			])

			setSnowflakeImages(images)
		}

		loadSnowflakeImages()
	}, [])

	const toggleLogin = () => {
		setIsLoginOpen(!isLoginOpen)
	}
	const toggleRegister = () => {
		setIsRegisterOpen(!isRegisterOpen)
	}
	console.log(snowflakeImages, 'snow')
	return (
		<>
			<div
				style={{
					overflow: 'hidden auto',
					position: 'relative',
					background: `url(${background.src}) no-repeat center / cover`,
					height: '100%',
					minHeight: isLow ? 880 : '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
				className='ScrollbarWhite'
			>
				<SnowfallContainer>
					<Snowfall
						snowflakeCount={400}
						radius={[5.5, 20.0]}
						images={snowflakeImages}
					/>
				</SnowfallContainer>

				<Container
					className='ScrollbarDefault'
					style={{
						overflow: 'hidden',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: 20,
						height: '100%',
						minHeight: '100svh',
						width: '100%',
						justifyContent: 'space-between',
						zIndex: 1,
					}}
					{...props}
				>
					<Header loggedIn={loggedIn} />
					<NewYearPage style={{ height: 0, margin: '0 auto' }} />
					{isMobile && !loggedIn && (
						<Box
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 15,
								width: '100%',
							}}
						>
							<AuthButton
								onClick={() => router.push('/register')}
								style={{ width: '50%' }}
							>
								New members
							</AuthButton>
							<AuthButton
								onClick={() => router.push('/login')}
								style={{ background: '#A5560F', width: '50%' }}
							>
								Log in
							</AuthButton>
						</Box>
					)}
					{children}
					<Footer />
				</Container>
				{!isMobile && (
					<>
						{loggedIn ? (
							<>
								<div
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										backgroundColor:
											isLoginOpen || isRegisterOpen
												? 'rgba(0, 0, 0, 0.2)'
												: 'transparent',
										transition: 'all .3s',
										pointerEvents:
											isLoginOpen || isRegisterOpen ? 'auto' : 'none',
										zIndex: 9,
									}}
									onClick={() => {
										setIsLoginOpen(false)
										setIsRegisterOpen(false)
									}}
								></div>
								<SideModal
									isLoginOpen={isLoginOpen}
									isRegisterOpen={isRegisterOpen}
									isRight={false}
								>
									<MyCells toggleOpen={toggleLogin} isLoginOpen={isLoginOpen} />
								</SideModal>
								<SideModal
									isLoginOpen={isLoginOpen}
									isRegisterOpen={isRegisterOpen}
									isRight={true}
								>
									<RealCells
										toggleOpen={toggleRegister}
										isRegisterOpen={isRegisterOpen}
									/>
								</SideModal>
							</>
						) : (
							<>
								<div
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										backgroundColor:
											isLoginOpen || isRegisterOpen
												? 'rgba(0, 0, 0, 0.2)'
												: 'transparent',
										transition: 'all .3s',
										pointerEvents:
											isLoginOpen || isRegisterOpen ? 'auto' : 'none',
										zIndex: 9,
									}}
									onClick={() => {
										setIsLoginOpen(false)
										setIsRegisterOpen(false)
									}}
								></div>
								<SideModal
									isLoginOpen={isLoginOpen}
									isRegisterOpen={isRegisterOpen}
									isRight={false}
								>
									<Login toggleOpen={toggleLogin} isLoginOpen={isLoginOpen} />
								</SideModal>
								<SideModal
									isLoginOpen={isLoginOpen}
									isRegisterOpen={isRegisterOpen}
									isRight={true}
								>
									<Register
										toggleOpen={toggleRegister}
										isRegisterOpen={isRegisterOpen}
									/>
								</SideModal>
							</>
						)}
					</>
				)}
			</div>
		</>
	)
}

export default IndexWrapper
