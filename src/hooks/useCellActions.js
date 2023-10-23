import axios from 'axios'
import { useState } from 'react'
import Cookies from 'js-cookie'

export default function useCellActions() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)
	const apiUrl = process.env.API_URL
	const token = Cookies.get('access_token')
	const baseCellUrl = `${apiUrl}/cells`

	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`,
	}

	const deleteFollower = async followerId => {
		setLoading(true)
		try {
			const response = await axios.delete(
				`${apiUrl}/cells-followers/${followerId}`,
				{
					headers: headers,
				}
			)
			setSuccess(true)
			return response.data
		} catch (err) {
			setError(err.message || 'Error occurred while deleting the follower.')
			throw err
		} finally {
			setLoading(false)
		}
	}

	const postFollower = async (cellId, followerId) => {
		setLoading(true)
		try {
			const response = await axios.post(
				`${baseCellUrl}/${cellId}/follower/${followerId}`,
				{},
				{
					headers: { Authorization: `Bearer ${token}` },
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

	const patchFollower = async (followerId, data) => {
		setLoading(true)
		try {
			const response = await axios.patch(
				`${apiUrl}/cells-followers/${followerId}`,
				data,
				{
					headers: headers,
				}
			)
			setSuccess(true)
			return response.data
		} catch (err) {
			setError(err.message || 'Error occurred while patching the follower.')
			throw err
		} finally {
			setLoading(false)
		}
	}

	const closeCell = async (cellId, data) => {
		setLoading(true)
		try {
			const response = await axios.patch(`${baseCellUrl}/${cellId}`, data, {
				headers: headers,
			})
			setSuccess(true)
			return response.data
		} catch (err) {
			setError(err.message || 'Error occurred while closing the cell.')
			throw err
		} finally {
			setLoading(false)
		}
	}

	return {
		loading,
		error,
		success,
		deleteFollower,
		postFollower,
		patchFollower,
		closeCell,
	}
}
