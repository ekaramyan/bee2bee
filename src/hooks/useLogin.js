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
				router.push('cells')
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
	const refresh_token = Cookies.get('refresh_token')
	const refreshToken = async () => {
		console.log('refresh')
		try {
			const response = await axios.post(`${apiUrl}/auth/refresh`, {
				refresh_token: refresh_token,
			})

			if (response.data && response.data.data) {
				const { access_token, refresh_token, expires_in } = response.data.data
				const expirationDate = new Date(
					new Date().getTime() + expires_in * 1000
				)
				console.log(expires_in, 'expires_in')
				document.cookie = `access_token=${access_token}; path=/; expires=${expirationDate.toUTCString()}`
				document.cookie = `refresh_token=${refresh_token}; path=/; expires=${expirationDate.toUTCString()}`
				return access_token
			}

			throw new Error('Token refresh response is malformed')
		} catch (err) {
			console.error(err)
			setError('Failed to refresh token')

			if (!refresh_token && err.response && err.response.status === 401) {
				dispatch({ type: 'LOG_OUT' })
				router.push('/')
			}
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
