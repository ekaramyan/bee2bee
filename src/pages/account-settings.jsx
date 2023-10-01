import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { universalServerSideProps } from '@/api/ssr'
import AccountSettings from '@/containers/AccountSettings'
import useLogin from '@/hooks/useLogin'

export default function accountSettings({ accountData }) {
	const dispatch = useDispatch()
		const {refreshToken} = useLogin()

	useEffect(() => {
		const token = Cookies.get('access_token')
		const refresh_token = Cookies.get('refresh_token')
		if (token && refresh_token) {
			dispatch({ type: 'LOG_IN' })
		} else if (!token && refresh_token) {
			refreshToken()
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
