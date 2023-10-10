import { useRouter } from 'next/router'
import Wrapper from '../components/UI/Wrapper'
import { Typography } from '@mui/material'
import CellComponent from '@/components/CellComponent'
import Consultant from '@/components/UI/Consultant'

export default function CellInfo({ data }) {
	const router = useRouter()
	const { id } = router.query
	console.log(data)

	return (
		<Wrapper>
			<Typography variant='block_header'>Cell Info</Typography>
			{id && data ? (
				<>
					<>
						<CellComponent />
					</>
					<Consultant />
				</>
			) : (
				<>Loading...</>
			)}
		</Wrapper>
	)
}
