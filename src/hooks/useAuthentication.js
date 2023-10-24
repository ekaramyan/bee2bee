import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import useLogin from '@/hooks/useLogin'

export default function useAuthentication() {
	const dispatch = useDispatch()
	const { refreshToken } = useLogin()

	useEffect(() => {
		const checkTokenValidity = () => {
			const token = Cookies.get('access_token')
			const refresh_token = Cookies.get('refresh_token')

			if (token && refresh_token) {
				dispatch({ type: 'LOG_IN' })
			} else if (!token && refresh_token) {
				refreshToken()
			} else {
				dispatch({ type: 'LOG_OUT' })
			}
		}

		checkTokenValidity()

		const intervalId = setInterval(checkTokenValidity, 6000000)

		return () => clearInterval(intervalId)
	}, [dispatch, refreshToken])
}
