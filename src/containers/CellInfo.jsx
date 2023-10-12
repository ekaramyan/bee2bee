import { useRouter } from 'next/router'
import { useState } from 'react'
import Wrapper from '../components/UI/Wrapper'
import CellComponent from '@/components/CellComponent'
import Consultant from '@/components/UI/Consultant'
import { Box } from '@mui/material'
import BigCell from '@/components/UI/BigCell'
import UserInfo from '@/components/UserInfo'

export default function CellInfo({ data }) {
	const router = useRouter()
	const { cellLevelId: id } = router.query
	const consultant = data?.consultant
	const leader = data?.leader
	const followers = data?.cellUsers
	const [activeUser, setActiveUser] = useState(null)

	const handleUserClick = user => {
		setActiveUser(user)
	}

	return (
		<Wrapper header={activeUser ? 'user info' : 'Cell Info'}>
			{id && data ? (
				<Box style={{ display: 'flex', gap: 25 }}>
					<BigCell
						onCloseClick={() =>
							activeUser ? setActiveUser(null) : router.back()
						}
						activeUser={activeUser}
						style={{ width: '50%' }}
					>
						{activeUser ? (
							<UserInfo user={activeUser} />
						) : (
							<CellComponent
								leader={leader}
								followers={followers}
								onUserClick={handleUserClick}
							/>
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
