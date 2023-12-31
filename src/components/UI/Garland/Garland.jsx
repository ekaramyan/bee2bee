import b_decor from '../../../styles/balls/b-head-decor_newyear.webp'
import bBallN1 from '../../../styles/balls/b-ball_n1.webp'
import bBallN2 from '../../../styles/balls/b-ball_n2.webp'
import bBallN3 from '../../../styles/balls/b-ball_n3.webp'
import bBallN4 from '../../../styles/balls/b-ball_n4.webp'
import bBallN5 from '../../../styles/balls/b-ball_n5.webp'
import bBallN6 from '../../../styles/balls/b-ball_n6.webp'
import bBallN7 from '../../../styles/balls/b-ball_n7.webp'
import bBallN8 from '../../../styles/balls/b-ball_n8.webp'
import bBallN9 from '../../../styles/balls/b-ball_n9.webp'
import bBallI1 from '../../../styles/balls/b-ball_i1.webp'
import bBallI2 from '../../../styles/balls/b-ball_i2.webp'
import bBallI3 from '../../../styles/balls/b-ball_i3.webp'
import bBallI4 from '../../../styles/balls/b-ball_i4.webp'
import bBallI5 from '../../../styles/balls/b-ball_i5.webp'
import bBallI6 from '../../../styles/balls/b-ball_i6.webp'

const Ball = ({ number, note, bounce, backgroundImage }) => {
	const ballStyle = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundRepeat: 'no-repeat',
	}

	return (
		<div
			className={`b-ball b-ball_n${number} ${bounce ? 'b-ball_bounce' : ''}`}
			data-note={note}
		>
			<div className='b-ball__right'></div>
			<div className='b-ball__i' style={ballStyle}></div>
		</div>
	)
}

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
		const ballImages = [
			bBallN1,
			bBallN2,
			bBallN3,
			bBallN4,
			bBallN5,
			bBallN6,
			bBallN7,
			bBallN8,
			bBallN9,
			bBallI1,
			bBallI2,
			bBallI3,
			bBallI4,
			bBallI5,
			bBallI6,
		]

		return Array.from({ length: count }, (_, i) => (
			<Ball
				key={i}
				number={i + 1}
				note={startNote + i}
				bounce={bounce}
				backgroundImage={ballImages[i]}
			/>
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
