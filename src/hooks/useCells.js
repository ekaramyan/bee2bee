import axios from 'axios'
import { useState } from 'react'
import Cookies from 'js-cookie'

export default function useCells() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)
	const [data, setData] = useState(null)
	const apiUrl = process.env.API_URL
	const token = Cookies.get('access_token')

	const getCells = async (type, additionalParams = {}) => {
		setLoading(true)
		setError(null)

		let url = `${apiUrl}/cells/`

		switch (type) {
			case 'all_inactive_archived':
				url += `all/list?is_active=false&is_archived=true`
				break
			case 'all_active':
				url += `all/list?is_active=true&is_archived=false`
				break
			case 'me_leader_active':
				url += `me/leader/list?is_active=true&is_archived=false`
				break
			case 'me_leader_inactive':
				url += `me/leader/list?is_active=false&is_archived=true`
				break
			case 'me_follower_active':
				url += `me/follower/list?is_active=true&is_archived=false`
				break
			case 'me_follower_inactive':
				url += `me/follower/list?is_active=false&is_archived=true`
				break
			case 'all':
				url += `cells/all/list`
			case 'queue':
				url += `/cells/queue?level_id=${additionalParams.level}&limit=3`
			case 'by_id':
				url += additionalParams.id
				break
			default:
				setError('Unknown type')
				setLoading(false)
				return
		}

		try {
			const response = await axios.get(url, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})

			if (response.status === 200) {
				setSuccess(true)
				setData(response.data)
			} else {
				setError('Failed to fetch the data.')
			}
		} catch (err) {
			setError(err.message || 'Error occurred while fetching the data.')
		} finally {
			setLoading(false)
		}
	}

	return { data, loading, error, success, getCells }
}
