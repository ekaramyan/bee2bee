import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'

const useLogin = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)
	const apiUrl = process.env.API_URL
	const router = useRouter()
	const dispatch = useDispatch()

	const login = async formData => {
		setLoading(true)
		try {
			const response = await axios.post(`${apiUrl}/auth/token`, formData, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			})

			if (response.status === 200 || response.status === 201) {
				document.cookie = `access_token=${response.data.data.access_token}; path=/`
				document.cookie = `refresh_token=${response.data.data.refresh_token}; path=/`
				dispatch({ type: 'LOG_IN' })
				router.push('join-the-cell')
				setSuccess(true)
			} else {
				setError(response.data.message || 'An error occurred.')
			}
		} catch (err) {
			setError(err.response?.data?.message || 'An error occurred.')
		} finally {
			setLoading(false)
		}
	}
	const refreshToken = async () => {
		try {
			const refresh_token = Cookies.get('refresh_token')
			const response = await axios.post(`${apiUrl}/auth/refresh`, {
				refresh_token: refresh_token,
			})
			document.cookie = `access_token=${response.data.data.access_token}; path=/`
			document.cookie = `refresh_token=${response.data.data.refresh_token}; path=/`
			return response.data.access_token
		} catch (err) {
			console.error(err)
			setError('Failed to refresh token')
			router.push('/')
		}
	}
	return { login, refreshToken, loading, error, success }
}

export default useLogin

// getting data with token
// const access_token = localStorage.getItem('access_token');
// const headers = {
//   Authorization: `Bearer ${access_token}`,
//   'Content-Type': 'application/json',
// };
