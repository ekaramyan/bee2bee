import axios from 'axios'
import { useState } from 'react'

function useContact() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)

	const sendContactForm = async data => {
		setLoading(true)
		setError(null)

		try {
			const response = await axios.post(
				'http://127.0.0.1:8000/unsafe/send',
				data,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)

			if (response.status === 200) {
				setSuccess(true)
			} else {
				setError('Failed to send the form.')
			}
		} catch (err) {
			setError(err.message || 'Error occurred while sending the form.')
		} finally {
			setLoading(false)
		}
	}

	return { sendContactForm, loading, error, success }
}

export default useContact
