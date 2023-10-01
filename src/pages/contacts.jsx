import Contacts from '@/containers/Contacts'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function contacts() {
		const dispatch = useDispatch()
		useEffect(() => {
			const token = localStorage.getItem('access_token')
			const refreshToken = localStorage.getItem('refresh_token')
			if (token && refreshToken) {
				dispatch({ type: 'LOG_IN' })
			}
		}, [])
	return <Contacts />
}
