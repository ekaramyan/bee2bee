import { universalServerSideProps } from '@/api/ssr'
import AccountSettings from '@/containers/AccountSettings'
import useAuthentication from '@/hooks/useAuthentication'

export default function AccountSettingsPage({ accountData }) {
	useAuthentication()
	return <AccountSettings data={accountData} />
}

export async function getServerSideProps(context) {
	const { req } = context
	const token = req.cookies.access_token
	const apiUrl = process.env.API_URL
	const url = `${apiUrl}/users/me`

	return await universalServerSideProps(url, token, 'accountData')
}
