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
		transform: translateX(50%);
	}

	&:nth-of-type(2) {
		align-self: end;
		justify-self: start;
		grid-column: 3 / 4;
		grid-row: 1 / 2;
		transform: translateX(-50%);
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
		transform: translateX(50%);
	}

	&:nth-of-type(6) {
		align-self: start;
		justify-self: start;
		grid-column: 3 / 4;
		grid-row: 3 / 4;
		transform: translateX(-50%);
	}
`

export default function CellComponent({ leader, followers, onUserClick }) {

	const paddedFollowers = [
		...followers.slice(0, 6),
		...Array(6 - followers.length).fill({}),
	]
	return (
		<>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gridTemplateRows: 'repeat(3, 0.7fr)',
					gap: 10,
				}}
			>
				{paddedFollowers.map((follower, idx) => (
					<Fw
						key={idx}
						isAccepted={follower?.isAccepted}
						onClick={() => onUserClick(follower.follower, 'follower')}
					/>
				))}
				<Leader
					style={{ gridColumn: '2 / 3', gridRow: '2 / 3' }}
					onClick={() => onUserClick(leader, 'leader')}
				/>
			</div>
		</>
	)
}
