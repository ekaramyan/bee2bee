import { Button, Typography, styled } from '@mui/material'
import { South } from '@mui/icons-material'
export default function DropdownLabel({ name, title }) {
	const StatButton = styled(Button)({
		width: '100%',
		maxWidth: 220,
		color: '#23201C',
		textAlign: 'center',
		textShadow: '1px 1px 1px #fff',
		fontFamily: 'Noto Sans',
		fontSize: '14px',
		fontWeight: 400,
		textTransform: 'uppercase',
		borderRadius: '5px',
		border: '1px solid #F9AA13',
		background: 'rgba(217, 217, 217, 0)',
		cursor: 'pointer',
		transition: '.3s',
		'&:hover': {
			border: '1px solid #E06B00',
		},
		'&:disabled': {
			cursor: 'not-allowed',
			color: 'rgb(123, 123, 122)',
			border: '1px solid rgba(217, 217, 217, 0.2)',
			background: 'rgba(217, 217, 217, 0.2)',
		},
		p: {
			color: '#E06B00',
			fontSize: 14,
			fontWeight: 700,
		},
	})

	return (
		<StatButton
			variant='outline'
			style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
		>
			<Typography variant='closed_cells'>{name} - </Typography>
			<p> {title}</p>
			<South size={15} />
		</StatButton>
	)
}