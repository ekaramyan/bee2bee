import { useState } from 'react'
import axios from 'axios'

const useRegister = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)
	const apiUrl = process.env.API_URL

	const register = async formData => {
		console.log('started')
		setLoading(true)
		try {
			const response = await axios.post(
				`${apiUrl}/api/users/register`,
				formData,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			console.log(response)
			setSuccess(true)
		} catch (err) {
			setError(err.response?.data?.message || 'An error occurred.')
		} finally {
			setLoading(false)
		}
	}

	return { register, loading, error, success }
}

export default useRegister
