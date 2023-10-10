import { styled } from '@mui/material'
import Follower from './UI/Follower'
import Leader from './UI/Leader'

const Fw = styled(Follower)`
	align-self: center;
	justify-self: center;

	&:nth-of-type(1) {
		align-self: end;
		justify-self: end;
		grid-column: 1 / 2;
		grid-row: 1 / 2;
	}

	&:nth-of-type(2) {
		align-self: end;
		justify-self: start;
		grid-column: 3 / 4;
		grid-row: 1 / 2;
	}

	&:nth-of-type(3) {
		grid-column: 1 / 2;
		grid-row: 2 / 3;
	}

	&:nth-of-type(4) {
		grid-column: 3 / 4;
		grid-row: 2 / 3;
	}

	&:nth-of-type(5) {
		align-self: start;
		justify-self: end;
		grid-column: 1 / 2;
		grid-row: 3 / 4;
	}

	&:nth-of-type(6) {
		align-self: start;
		justify-self: start;
		grid-column: 3 / 4;
		grid-row: 3 / 4;
	}
`

export default function CellComponent() {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gridTemplateRows: 'repeat(3, 0.7fr)',
				gap: 20,
			}}
		>
			{Array(6)
				.fill(null)
				.map((_, idx) => (
					<Fw key={idx} />
				))}
			<Leader style={{ gridColumn: '2 / 3', gridRow: '2 / 3' }} />
		</div>
	)
}
