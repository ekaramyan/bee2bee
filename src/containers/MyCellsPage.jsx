import { Box } from '@mui/material'
import Wrapper from '../components/UI/Wrapper'
import MyCellsComponent from '@/components/MyCellsComponent'

export default function MyCells() {
	return (
		<Wrapper header={'My Cells'}>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 30,
					height: '60vh',
				}}
			>
				<MyCellsComponent />
			</Box>
		</Wrapper>
	)
}
