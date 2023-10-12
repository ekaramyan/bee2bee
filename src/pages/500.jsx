import { Box, ThemeProvider, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import useLogin from '@/hooks/useLogin'
import { universalServerSideProps } from '@/api/ssr'
import theme from '@/Theme'

export default function Custom500() {
	const dispatch = useDispatch()
	const { refreshToken } = useLogin()

	useEffect(() => {
		const token = Cookies.get('access_token')
		const refresh_token = Cookies.get('refresh_token')
		if (token && refresh_token) {
			dispatch({ type: 'LOG_IN' })
		} else if (!token && refresh_token) {
			refreshToken()
		}
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<Box
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					height: '100dvh',
				}}
			>
				<Typography variant='block_header'>Page Does Not Exists</Typography>
			</Box>
		</ThemeProvider>
	)
}
