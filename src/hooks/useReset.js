import axios from 'axios'
import { useState } from 'react'
import Cookies from 'js-cookie'

export default function useReset() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)
	const apiUrl = process.env.API_URL
	const token = Cookies.get('access_token')
	const baseUrl = `${apiUrl}/users`

	const getEmail = async email => {
		setLoading(true)
		try {
			const response = await axios.get(`${baseUrl}/reset?email=${email}`)
			setSuccess(true)
			return null
		} catch (err) {
			setError(err.message || 'Error while requesting password reset')
			throw err
		} finally {
			setLoading(false)
		}
	}

	const sendNewPass = async formData => {
		setLoading(true)
		try {
			const response = await axios.post(
				`${baseUrl}/reset-password`,
				{ ...formData },
				{
					headers: { 'Content-Type': 'application/json' },
				}
			)
			setSuccess(true)
			return response.data
		} catch (err) {
			setError(err.message || 'Error occurred while posting the follower.')
			throw err
		} finally {
			setLoading(false)
		}
	}

	return {
		loading,
		error,
		success,
		getEmail,
		sendNewPass,
	}
}
