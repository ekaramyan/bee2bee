import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = createTheme({
	overrides: {
		'*': {
			scrollBehavior: 'smooth',
		},
	},
	components: {
		MuiCheckbox: {
			styleOverrides: {
				root: {
					'&:hover': {
						backgroundColor: 'transparent',
					},
				},
			},
			defaultProps: {
				color: 'primary',
			},
		},
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					'&.MuiCheckbox-colorPrimary.Mui-checked': {
						color: '#000',
					},
				},
			},
		},
	},

	palette: {
		primary: {
			main: '#FF5733', // основной цвет
			contrastText: '#FFF', // цвет текста
		},
		secondary: {
			main: '#FFFFFFB2',
			contrastText: '#FFFFFFB2',
		},
	},
	button: {
		fontFamily: 'Noto Sans',
		fontSize: 20,
		allVariants: {
			cursor: 'default',
			fontSize: 20,
			fontWeight: 300,
			color: '#241f55',
			lineHeight: 1.55,
		},
		auth: {},
	},
	typography: {
		fontFamily: 'Noto Sans',
		fontSize: 14,
		button: {
			textTransform: 'none',
		},
		allVariants: {
			cursor: 'default',
			fontSize: 20,
			fontWeight: 300,
			color: '#241f55',
			lineHeight: 1.55,
		},
		body1: {
			fontFamily: 'Noto Sans',
			fontSize: 16,
			color: '#8C7F77',
			fontWeight: 300,
		},
		main_head: {
			fontSize: 36,
			color: '#A5560F',
			fontWeight: 400,
			textShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)',
			textTransform: 'uppercase',
		},
		main_bottom_highlight: {
			color: '#E06B00',
			textShadow: ' 1px 1px 1px #A5560F',
			fontSize: 56,
			fontWeight: 900,
			textTransform: 'uppercase',
		},
		main_bottom: {
			color: '#1B170F',
			textShadow: ' 1px 1px 1px #E06B00',
			fontSize: 76,
			fontWeight: 700,
			letterSpacing: '-0.7px',
			textTransform: 'uppercase',
		},
		auth_head: {
			display: 'block',
			position: 'absolute',
			left: 0,
			transform: 'rotate(-90deg) translateY(50%) translateX(25%)',
			whiteSpace: 'nowrap',
			width: '10%',
			height: '100%',
			fontSize: 48,
			fontWeight: 900,
			textTransform: 'uppercase',
			cursor: 'pointer',
			lineHeight: 1,
			userSelect: 'none',
			transition: '.3s',
		},
		footer_buttons: {
			cursor: 'pointer',
			color: '#1B170F',
			fontFamily: 'Noto Sans',
			fontSize: 16,
			fontWeight: 400,
			textTransform: 'uppercase',
			active: {
				color: '#E06B00',
				textDecoration: 'underline',
			},
		},
		header_buttons: {
			cursor: 'pointer',
			color: '#1B170F',
			fontFamily: 'Noto Sans',
			fontSize: 16,
			fontWeight: 400,
			textDecoration: 'none',
			textTransform: 'uppercase',
			active: {
				color: '#E06B00',
			},
		},
		block_header: {
			color: '#1B170F',
			fontFamily: 'Noto Sans',
			fontSize: 42,
			fontWeight: 700,
			textTransform: 'uppercase',
		},
		level_small: {
			color: '#FFF',
			textAlign: 'center',
			fontFamily: 'Noto Sans',
			fontSize: 32,
			fontWeight: 700,
			textTransform: 'uppercase',
			padding: '0 10%',
			lineHeight: 1,
		},
		level_big: {
			color: '#FFF',
			textAlign: 'center',
			fontFamily: 'Noto Sans',
			fontSize: 36,
			fontWeight: 700,
			textTransform: 'uppercase',
		},
		my_cells_button: {
			cursor: 'pointer',
			color: '#1B170F',
			fontFamily: 'Noto Sans',
			fontSize: 32,
			fontWeight: 700,
			textDecoration: 'none',
			textTransform: 'uppercase',
			active: {
				color: '#E06B00',
			},
		},
		h6: {
			color: '#1B170F',
			fontFamily: ' Noto Sans',
			fontSize: 36,
			fontWeight: 700,
			textTransform: 'uppercase',
		},
		user_key: {
			color: '#1B170F',
			fontFamily: 'Noto Sans',
			fontSize: 20,
			fontWeight: 400,
		},
		user_item: {
			color: '#8C7F77',
			fontFamily: 'Noto Sans',
			fontSize: 20,
			fontWeight: 700,
		},
		date: {
			color: '#1B170F',
			fontFamily: 'Noto Sans',
			fontSize: 18,
			fontWeight: 400,
		},
	},
})

const responsiveTheme = responsiveFontSizes(theme, {
	breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
	factor: 4,
})

export default responsiveTheme
