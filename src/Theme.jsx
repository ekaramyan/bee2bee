import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import '@fontsource/roboto'
import '@fontsource/roboto-condensed'
import '@fontsource/roboto-slab'

const theme = createTheme({
	overrides: {
		'*': {
			scrollBehavior: 'smooth',
		},
	},
	components: {},

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
			top: '19%',
			left: 0,
			transform: 'rotate(-90deg) translateY(40%)',
			whiteSpace: 'nowrap',
			width: '100%',
			height: '100%',
			color: '#E06B00',
			textShadow: '1px 1px 2px #1B170F',
			fontSize: 48,
			fontWeight: 900,
			textTransform: 'uppercase',
			cursor: 'pointer',
			lineHeight: 1,
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
	},
})

const responsiveTheme = responsiveFontSizes(theme, {
	breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
	factor: 4,
})

export default responsiveTheme
