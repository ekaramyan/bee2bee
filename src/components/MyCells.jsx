import {
	Box,
	Checkbox,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@mui/material'
import ReCAPTCHA from 'react-google-recaptcha'
import AuthButton from './UI/AuthButton'

// const recaptchaRef = React.createRef();
// ...
// onSubmit = () => {
//   const recaptchaValue = recaptchaRef.current.getValue();
//   this.props.onSubmit(recaptchaValue);
// }
// render() {
//   return (
//     <form onSubmit={this.onSubmit} >
//       <ReCAPTCHA
//         ref={recaptchaRef}
//         sitekey="Your client site key"
//         onChange={onChange}
//       />
//     </form>
//   )
// }

export default function MyCells({ toggleOpen }) {
	return (
		<div
			style={{
				padding: '2% 20px',
				height: '100%',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					flex: '1',
					position: 'relative',
					height: '100%',
				}}
			>
				<Typography
					variant='auth_head'
					gutterBottom
					onClick={toggleOpen}
					style={{ top: '10%' }}
				>
					My Cells
				</Typography>
			</div>
			<Box style={{ width: '75%' }}>
				<Box
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						gap: 30,
					}}
				>
					<Typography variant='my_cells_button'>Follower</Typography>
					<Typography variant='my_cells_button'>Leader</Typography>
				</Box>
				<Box
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						gap: 20,
						width: '100%',
					}}
				>
					<Box style={{ width: '40%' }}>
						<Typography>Active cells</Typography>
						<Box
							style={{
								background: '#fff',
								height: '150px',
								width: '100%',
								overflowY: 'auto',
							}}
						>
							<Typography>text</Typography>
						</Box>
					</Box>
					<Box style={{ width: '40%' }}>
						<Typography>Closed cells</Typography>
						<Box
							style={{
								background: '#fff',
								height: '150px',
								width: '100%',
								overflowY: 'auto',
							}}
						>
							<Typography>text</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</div>
	)
}
