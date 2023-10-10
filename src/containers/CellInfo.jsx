import { useRouter } from 'next/router'
import Wrapper from '../components/UI/Wrapper'
import CellComponent from '@/components/CellComponent'
import Consultant from '@/components/UI/Consultant'
import { Box } from '@mui/material'
import BigCell from '@/components/UI/BigCell'

export default function CellInfo({ data }) {
	const router = useRouter()
	const { id } = router.query
	console.log(data)

	return (
		<Wrapper header={'Cell Info'}>
			{id && data ? (
				<Box style={{ display: 'flex', gap: 25}}>
					<BigCell onCloseClick={() => router.back()} style={{ width: '50%' }}>
						<CellComponent />
					</BigCell>

					<Consultant />
				</Box>
			) : (
				<>Loading...</>
			)}
		</Wrapper>
	)
}
