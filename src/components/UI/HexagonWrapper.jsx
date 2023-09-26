import React from 'react'

const HexagonWrapper = ({ children }) => {
	const hexagonStyle = {
		width: '100%',
		height: '100%',
		position: 'relative',
		backgroundColor: 'transparent',
		padding: '15%',
	}

	const hexagonInnerStyle = {
		width: '100%',
		paddingBottom: '115%',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
		backgroundColor: '#E06B00',
		borderRadius: '5px',
	}

	return (
		<div style={hexagonStyle}>
			<div style={hexagonInnerStyle}>{children}</div>
		</div>
	)
}

export default HexagonWrapper
