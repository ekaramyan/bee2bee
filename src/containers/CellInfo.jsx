import { useRouter } from 'next/router'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { fetchData } from '@/api/fetchData'
import Wrapper from '../components/UI/Wrapper'
import CellComponent from '@/components/CellComponent'
import Consultant from '@/components/UI/Consultant'
import { Box, Typography, useMediaQuery } from '@mui/material'
import BigCell from '@/components/UI/BigCell'
import UserInfo from '@/components/UserInfo'
import useIsLeader from '@/hooks/useIsLeader'
import CellInfoComponent from '@/components/CellInfoComponent'
import MobileCellInfoComponent from '@/components/MobileCellInfoComponent'

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
		setCellData(newData)
	}
	const isMobile = useMediaQuery('@media(max-width:1300px)')
	return (
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
						handleUserClick={handleUserClick}
						refreshFetch={refreshFetch}
						setActiveUser={setActiveUser}
						handleCloseClick={() =>
							activeUser ? setActiveUser(null) : router.push('/cells')
						}
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
						handleUserClick={handleUserClick}
						refreshFetch={refreshFetch}
						setActiveUser={setActiveUser}
						handleCloseClick={() =>
							activeUser ? setActiveUser(null) : router.push('/cells')
						}
					/>
				)
			) : (
				<>Loading...</>
			)}
		</Wrapper>
	)
}
