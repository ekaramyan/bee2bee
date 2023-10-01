import Rules from '@/containers/Rules'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function rules() {
		const dispatch = useDispatch()
		useEffect(() => {
			const token = localStorage.getItem('access_token')
			const refreshToken = localStorage.getItem('refresh_token')
			if (token && refreshToken) {
				dispatch({ type: 'LOG_IN' })
			}
		}, [])
	return <Rules />
}
