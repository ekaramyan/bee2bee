import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import MyAccount from '@/containers/MyAccount'
import { universalServerSideProps } from '@/api/ssr'
import useLogin from '@/hooks/useLogin'

export default function AccountPage({ accountData }) {
	console.log(accountData, 'account data')
	const dispatch = useDispatch()
	const { refreshToken } = useLogin()

	useEffect(() => {
		const token = Cookies.get('access_token')
		const refresh_token = Cookies.get('refresh_token')
		if (token && refresh_token) {
			dispatch({ type: 'LOG_IN' })
		} else if (!token && refresh_token) {
			refreshToken()
		}
	}, [])
	return <MyAccount data={accountData} />
}

export async function getServerSideProps(context) {
	const { req } = context
	const token = req.cookies.access_token
	const apiUrl = process.env.API_URL
	const url = `${apiUrl}/users/me`

	return await universalServerSideProps(url, token, 'accountData')
}
