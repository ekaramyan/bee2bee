import { useState } from 'react'
import axios from 'axios'

const useRegister = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)
	const apiUrl = process.env.API_URL

	const register = async formData => {
		setLoading(true)
		try {
			const response = await axios.post(
				`${apiUrl}/users/register`,
				formData,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)

			if (response.status === 200 || response.status === 201) {
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

	return { register, loading, error, success }
}

export default useRegister
