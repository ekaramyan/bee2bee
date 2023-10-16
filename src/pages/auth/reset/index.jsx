import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { universalServerSideProps } from '@/api/ssr'
import ResetPassEmail from '@/containers/ResetPassEmail'
import useLogin from '@/hooks/useLogin'

export default function ResetPasswordPage() {
	const dispatch = useDispatch()
	const { refreshToken } = useLogin()

	useEffect(() => {
		const token = Cookies.get('access_token')
		const refresh_token = Cookies.get('refresh_token')
		if (token && refresh_token) {
			dispatch({ type: 'LOG_IN' })
		} else if (refresh_token) {
			refreshToken()
		}
	}, [])
	return <ResetPassEmail/>
}
