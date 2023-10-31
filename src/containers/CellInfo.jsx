import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { fetchData } from '@/api/fetchData'
import {
	Typography,
	useMediaQuery,
	Dialog,
	DialogContent,
	Slide,
	styled,
	Box,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import useIsLeader from '@/hooks/useIsLeader'
import dynamic from 'next/dynamic'
import Wrapper from '../components/UI/Wrapper'
import BoxComponent from '@/components/UI/BoxComponent'
const CellInfoComponent = dynamic(() =>
	import('@/components/CellInfoComponent')
)
const MobileCellInfoComponent = dynamic(() =>
	import('@/components/MobileCellInfoComponent')
)

const StyledDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialog-paper': {
		top: '10px',
		margin: '0',
		position: 'absolute',
		backgroundColor: '#fff',
		borderRadius: 15,
		boxShadow: 'none',
		transition: '.3s',
	},
	'& .MuiBackdrop-root': {
		backgroundColor: 'transparent',
	},
}))

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='down' ref={ref} {...props} />
})

export default function CellInfo({ data }) {
	const router = useRouter()
	const { cellLevelId: id } = router.query
	const { cellId } = router.query
	const [cellData, setCellData] = useState(data)

	const consultant = cellData?.consultant
	const leader = cellData?.leader
	const followers = cellData?.cellUsers
	const [activeUser, setActiveUser] = useState(null)
	const [role, setRole] = useState(null)
	const [isAutoCreated, setIsAutoCreated] = useState(null)
	const [isAccepted, setIsAccepted] = useState(null)
	const [cellUserId, setCellUserId] = useState(null)
	const [isBoxVisible, setIsBoxVisible] = useState(true)
	const [showErrorDialog, setShowErrorDialog] = useState(false)
	const isActive = cellData?.isActive
	const { cellClosing } = useSelector(state => state.user)
	const userId = parseInt(Cookies.get('userId'))
	const checkRole = useIsLeader()
	const dispatch = useDispatch()

	const handleUserClick = (user, autoCreate, accept, id) => {
		setActiveUser(user)
		const userRole = checkRole(leader?.id, userId)
		setRole(userRole)
		setIsAutoCreated(autoCreate)
		setIsAccepted(accept)
		setCellUserId(id)
	}

	const refreshFetch = async () => {
		const token = Cookies.get('access_token')
		const apiUrl = process.env.API_URL
		const url = `${apiUrl}/cells/${cellId}`
		const res = await fetchData(url, token)
		const newData = res.data
		setCellData(newData)
	}
	useEffect(() => {
		refreshFetch()
	}, [cellId, activeUser])

	useEffect(() => {
		if (!cellData) {
			router.push('/')
		}
		if (userId === leader?.id) {
			setShowErrorDialog(true)
			const timer = setTimeout(() => {
				setShowErrorDialog(false)
			}, 5000)
			return () => clearTimeout(timer)
		}
	}, [])

	const acceptedCount =
		followers?.filter(
			follower => follower?.isPayed && follower.isAccepted === true
		).length ?? 0

	const isMobile = useMediaQuery('@media(max-width:1300px)')
	console.log(isBoxVisible, acceptedCount, cellClosing)
	return (
		<>
			<Box
				style={{
					position: 'relative',
					width: '100%',
				}}
			>
				{isBoxVisible &&
					(acceptedCount === 5 || acceptedCount === 6) &&
					cellClosing && (
						<BoxComponent
							onClose={() => {
								setIsBoxVisible(false)
								dispatch({ type: 'STOP_CELL_CLOSE' })
							}}
						/>
					)}
				<Wrapper header={activeUser ? 'user info' : 'Cell Info'}>
					{id && cellData ? (
						isMobile ? (
							<MobileCellInfoComponent
								cellId={cellId}
								cellData={cellData}
								user={activeUser}
								role={role}
								leader={leader}
								followers={followers}
								consultant={consultant}
								isAutoCreated={isAutoCreated}
								isAccepted={isAccepted}
								cellUserId={cellUserId}
								handleUserClick={handleUserClick}
								refreshFetch={refreshFetch}
								setActiveUser={setActiveUser}
								handleCloseClick={() =>
									activeUser ? setActiveUser(null) : router.push(`/cells/${id}`)
								}
								isActive={isActive}
							/>
						) : (
							<CellInfoComponent
								cellId={cellId}
								cellData={cellData}
								user={activeUser}
								role={role}
								leader={leader}
								followers={followers}
								consultant={consultant}
								isAutoCreated={isAutoCreated}
								isAccepted={isAccepted}
								cellUserId={cellUserId}
								handleUserClick={handleUserClick}
								refreshFetch={refreshFetch}
								setActiveUser={setActiveUser}
								handleCloseClick={() =>
									activeUser ? setActiveUser(null) : router.push(`/cells/${id}`)
								}
								isActive={isActive}
							/>
						)
					) : (
						<>Loading...</>
					)}

					{showErrorDialog && (
						<StyledDialog
							open={showErrorDialog}
							TransitionComponent={Transition}
							onClick={() => setShowErrorDialog(false)}
						>
							<DialogContent>
								<Typography variant='body1'>
									You are leader in this cell, you cannot join it as follower
								</Typography>
							</DialogContent>
						</StyledDialog>
					)}
				</Wrapper>
			</Box>
		</>
	)
}
