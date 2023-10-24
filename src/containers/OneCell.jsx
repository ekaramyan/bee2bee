import React from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useEffect, useCallback } from 'react'
import Wrapper from '../components/UI/Wrapper'
import { useMediaQuery } from '@mui/material'
import useCells from '@/hooks/useCells'
import starter from '@/assets/img/bees/starter.png'
import beginner from '@/assets/img/bees/beginner.png'
import worker from '@/assets/img/bees/worker.png'
import pro from '@/assets/img/bees/pro.png'
import expert from '@/assets/img/bees/expert.png'
import useCellActions from '@/hooks/useCellActions'
import DesktopOneCell from '@/components/DesktopOneCell'
import MobileOneCell from '@/components/MobileOneCell'

export default function OneCell({ data }) {
	const router = useRouter()
	const { postFollower } = useCellActions()
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
		getWaitingCells('waiting', { level: id })
	}, [getFollowerActiveCells, getLeaderActiveCells, getWaitingCells, id])

	useEffect(() => {
		onRefreshClick()
	}, [])
	const isMobile = useMediaQuery('@media(max-width:1300px)')

	const onJoinClick = () => {
		if (userId !== leaderActiveData?.data[0]?.leader?.id) {
			postFollower(data[0]?.id, userId)
		}
	}

	return (
		<Wrapper
			header={
				isMobile
					? `${data[0]?.cellLevel.level} ${data[0]?.cellLevel.price}$`
					: 'Join the cell'
			}
		>
			{id && data && data[0]?.id ? (
				isMobile ? (
					<MobileOneCell
						data={data}
						leaderActiveData={leaderActiveData}
						followerActiveData={followerActiveData}
						waitingData={waitingData}
						onJoinClick={onJoinClick}
						onRefreshClick={onRefreshClick}
						id={id}
					/>
				) : (
					<DesktopOneCell
						data={data}
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
				'Loading...'
			) : (
				'Sorry, there is no data'
			)}
		</Wrapper>
	)
}
