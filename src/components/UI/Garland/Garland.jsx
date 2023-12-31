const Ball = ({ number, note, bounce }) => {
	return (
		<div
			className={`b-ball b-ball_n${number} ${bounce ? 'b-ball_bounce' : ''}`}
			data-note={note}
		>
			<div className='b-ball__right'></div>
			<div className='b-ball__i'></div>
		</div>
	)
}
import b_decor from '../../../styles/balls/b-head-decor_newyear.webp'

const NewYearPage = ({ style }) => {
	const decorBg = {
		backgroundImage: `url(${b_decor.src})`,
		backgroundRepeat: 'repeat-x',
		backgroundPosition: '0 0',
		position: 'absolute',
		left: '0',
		top: 0,
		margin: '0 auto',
		width: '100%',
		display: 'block',
		zIndex: 0,
	}
	const createBalls = (count, startNote, bounce) => {
		return Array.from({ length: count }, (_, i) => (
			<Ball key={i} number={i + 1} note={startNote + i} bounce={bounce} />
		))
	}

	return (
		<div style={{ ...style }}>
			<div className='b-page_newyear' style={{ ...decorBg }}>
				<div className='b-page__content'>
					{[...Array(4)].map((_, index) => (
						<i
							key={index}
							className={`b-head-decor__inner b-head-decor__inner_n${
								index + 1
							}`}
						>
							{createBalls(8, index * 8, true)}
							{createBalls(6, index, false)}
						</i>
					))}
				</div>
			</div>
		</div>
	)
}

export default NewYearPage
