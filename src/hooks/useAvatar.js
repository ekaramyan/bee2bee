import useSWR from 'swr'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useMemo } from 'react'

const fetcher = async url => {
	const token = Cookies.get('access_token')
	try {
		const response = await axios.get(url, {
			headers: { Authorization: `Bearer ${token}` },
			responseType: 'blob',
		})
		return URL.createObjectURL(response.data)
	} catch (error) {
		throw error
	}
}

function useAvatar(avatarUrl) {
	const apiUrl = process.env.API_URL

	const swrKey = useMemo(() => {
		if (!avatarUrl) return null

		return [`${apiUrl}${avatarUrl}`]
	}, [apiUrl, avatarUrl])

	const { data, error, mutate } = useSWR(swrKey, fetcher, {
		shouldRetryOnError: false,
		revalidateOnFocus: false,
	})

	return {
		avatar: data,
		isLoading: !error && !data,
		isError: error,
		mutate,
	}
}

export default useAvatar
