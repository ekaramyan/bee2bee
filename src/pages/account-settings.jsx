import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { universalServerSideProps } from '@/api/ssr'
import AccountSettings from '@/containers/AccountSettings'

export default function accountSettings({ accountData }) {
	const dispatch = useDispatch()

	useEffect(() => {
		const token = localStorage.getItem('access_token')
		const refreshToken = localStorage.getItem('refresh_token')
		if (token && refreshToken) {
			dispatch({ type: 'LOG_IN' })
		}
	}, [])
	return <AccountSettings data={accountData} />
}

export async function getServerSideProps(context) {
	const { req } = context
	const token = req.cookies.access_token
	const apiUrl = process.env.API_URL
	const url = `${apiUrl}/users/me`

	return await universalServerSideProps(url, token, 'accountData')
}
