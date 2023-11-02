import React, { useEffect, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import {
	CircularProgress,
	useMediaQuery,
	Dialog,
	DialogContent,
	styled,
	Typography,
	Slide,
} from '@mui/material'
import dynamic from 'next/dynamic'
import useCells from '@/hooks/useCells'
import starter from '@/assets/img/bees/starter.webp'
import beginner from '@/assets/img/bees/beginner.webp'
import worker from '@/assets/img/bees/worker.webp'
import pro from '@/assets/img/bees/pro.webp'
import expert from '@/assets/img/bees/expert.webp'
import useCellActions from '@/hooks/useCellActions'
import { fetchData } from '@/api/fetchData'
import Wrapper from '../components/UI/Wrapper'
const DesktopOneCell = dynamic(() => import('@/components/DesktopOneCell'))
const MobileOneCell = dynamic(() => import('@/components/MobileOneCell'))

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

export default function OneCell({ data, joinList, level }) {
	const router = useRouter()
	const { postFollower, success, loading, error } = useCellActions()
	const userId = parseInt(Cookies.get('userId'))
	const { cellLevelId: id } = router.query
	const cells = [
		{ bee: starter },
		{ bee: beginner },
		{ bee: worker },
		{ bee: pro },
		{ bee: expert },
	]
	const {
		data: followerActiveData,
		loading: followerActiveLoading,
		error: followerActiveError,
		getCells: getFollowerActiveCells,
	} = useCells()
	const {
		data: leaderActiveData,
		loading: leaderActiveLoading,
		error: leaderActiveError,
		getCells: getLeaderActiveCells,
	} = useCells()
	const {
		data: waitingData,
		loading: waitingLoading,
		error: waitingError,
		getCells: getWaitingCells,
	} = useCells()

	const onRefreshClick = useCallback(async () => {
		getFollowerActiveCells('me_followers_level', { level: id })
		getLeaderActiveCells('me_leader_level', { level: id })
		getWaitingCells('waiting', { level: id, user: userId })
	}, [getFollowerActiveCells, getLeaderActiveCells, getWaitingCells, id])

	useEffect(() => {
		onRefreshClick()
	}, [])
	const [toJoin, setToJoin] = useState(null)
	const [showErrorDialog, setShowErrorDialog] = useState(false)

	useEffect(() => {
		if (joinList.data) {
			setToJoin(joinList?.data[0]?.id)
		}
	}, [])

	const isMobile = useMediaQuery('@media(max-width:1300px)')
	const token = Cookies.get('access_token')
	const apiUrl = process.env.API_URL
	const canJoin = data[0]?.cellLevel?.canJoin

	const onJoinClick = async () => {
		const users = await fetchData(`${apiUrl}/cells/${toJoin}`, token)
		if (
			!leaderActiveData ||
			(userId !== users?.data?.leader?.id && users.data.cellUsers.length < 6)
		) {
			postFollower(toJoin, userId)
		}
		success && router.push(toJoin ? `${id}/info/${toJoin}` : `/cells/${id}`)
		if (error || !success) setShowErrorDialog(true)
	}
	console.log(error, success)
	return (
		<>
			{error && showErrorDialog && (
				<StyledDialog
					open={showErrorDialog}
					TransitionComponent={Transition}
					onClick={() => setShowErrorDialog(false)}
				>
					<DialogContent>
						<Typography variant='body1'>{error}</Typography>
					</DialogContent>
				</StyledDialog>
			)}
			<Wrapper
				header={
					isMobile
						? `${data[0]?.cellLevel?.level} ${data[0]?.cellLevel?.price}$`
						: 'Join the cell'
				}
			>
				{id && joinList ? (
					isMobile ? (
						<MobileOneCell
							data={level}
							disabled={!toJoin || canJoin === false}
							leaderActiveData={leaderActiveData}
							followerActiveData={followerActiveData}
							waitingData={waitingData}
							onJoinClick={onJoinClick}
							onRefreshClick={onRefreshClick}
							id={id}
						/>
					) : (
						<DesktopOneCell
							data={level}
							disabled={!toJoin || canJoin === false}
							leaderActiveData={leaderActiveData}
							followerActiveData={followerActiveData}
							waitingData={waitingData}
							onJoinClick={onJoinClick}
							onRefreshClick={onRefreshClick}
							cells={cells}
							id={id}
						/>
					)
				) : data ? (
					<CircularProgress />
				) : (
					'Sorry, there is no data'
				)}
			</Wrapper>
		</>
	)
}
