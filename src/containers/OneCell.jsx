import React from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
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
	console.log(userId)
	const { cellLevelId: id } = router.query
	const cells = [
		{ bee: starter },
		{ bee: beginner },
		{ bee: worker },
		{ bee: pro },
		{ bee: expert },
	]
	const onJoinClick = () => {
		postFollower(data[0]?.id, userId)
	}
	const onRefreshClick = () => {}

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

	useEffect(() => {
		getFollowerActiveCells('me_follower_active')
		getLeaderActiveCells('me_leader_active')
	}, [])
	const isMobile = useMediaQuery('@media(max-width:1300px)')
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
						onJoinClick={onJoinClick}
						onRefreshClick={onRefreshClick}
						id={id}
					/>
				) : (
					<DesktopOneCell
						data={data}
						leaderActiveData={leaderActiveData}
						followerActiveData={followerActiveData}
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
