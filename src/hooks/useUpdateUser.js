import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const useUpdateUser = () => {
	const [load, setLoading] = useState(false)
	const [err, setError] = useState(null)
	const [suc, setSuccess] = useState(false)
	const apiUrl = process.env.API_URL
	const token = Cookies.get('access_token')

	const update = async formData => {
		setLoading(true)
		try {
			const response = await axios.patch(`${apiUrl}/users`, formData, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
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

	return { update, load, err, suc }
}

export default useUpdateUser
