import axios from 'axios'

export const fetchData = async (url, token) => {
	try {
		const response = await axios.get(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
		if (response.status === 401) {
			document.cookie =
				'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
		} else {
			console.log(response)
			return response.data
		}
	} catch (error) {
		throw error
	}
}
