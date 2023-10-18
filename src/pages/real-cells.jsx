import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import useLogin from '@/hooks/useLogin'
import RealCells from '@/containers/RealCellsPage'

export default function AboutPage() {
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
	return <RealCells />
}