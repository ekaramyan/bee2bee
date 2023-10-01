import axios from 'axios'

export const fetchData = async (url, token) => {
	try {
		const response = await axios.get(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
		console.log(response)
		return response.data
	} catch (error) {
		throw error
	}
}
