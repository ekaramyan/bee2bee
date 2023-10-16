import { useRouter } from 'next/router'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { fetchData } from '@/api/fetchData'
import Wrapper from '../components/UI/Wrapper'
import CellComponent from '@/components/CellComponent'
import Consultant from '@/components/UI/Consultant'
import { Box, Typography } from '@mui/material'
import BigCell from '@/components/UI/BigCell'
import UserInfo from '@/components/UserInfo'
import useIsLeader from '@/hooks/useIsLeader'

export default function CellInfo({ data }) {
	console.log(data)
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

	const userId = parseInt(Cookies.get('userId'))
	console.log(cellData)
	const checkRole = useIsLeader()

	const handleUserClick = (user, autoCreate, accept) => {
		console.log(userId)
		setActiveUser(user)
		const userRole = checkRole(leader?.id, userId)
		setRole(userRole)
		setIsAutoCreated(autoCreate)
		setIsAccepted(accept)
	}

	const refreshFetch = async () => {
		const token = Cookies.access_token
		const apiUrl = process.env.API_URL
		const url = `${apiUrl}/cells/${cellId}`
		const res = await fetchData(url, token)
		const newData = res.data
		console.log(newData)
		setCellData(newData)
	}

	return (
		<Wrapper header={activeUser ? 'user info' : 'Cell Info'}>
			{id && cellData ? (
				<Box style={{ display: 'flex', gap: 25 }}>
					<BigCell
						onCloseClick={() =>
							activeUser ? setActiveUser(null) : router.back()
						}
						onRefreshClick={refreshFetch}
						activeUser={activeUser}
						style={{ width: '50%', gap: 8 }}
					>
						{activeUser ? (
							<UserInfo
								user={activeUser}
								role={role}
								isAutoCreated={isAutoCreated}
								isAccepted={isAccepted}
							/>
						) : (
							<>
								<Typography variant='cell_id'>№{cellId}</Typography>
								<CellComponent
									leader={leader}
									followers={followers}
									onUserClick={handleUserClick}
								/>
								<Typography variant='cell_id'>
									{cellData.cellLevel.level.slice(0, 1)} - #{cellData.id}
								</Typography>
							</>
						)}
					</BigCell>
					<Consultant data={consultant} />
				</Box>
			) : (
				<>Loading...</>
			)}
		</Wrapper>
	)
}
