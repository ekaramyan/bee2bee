import { universalServerSideProps } from '@/api/ssr'
import AccountSettings from '@/containers/AccountSettings'

export default function AccountSettingsPage({ accountData }) {
	return <AccountSettings data={accountData} />
}

export async function getServerSideProps(context) {
	const { req } = context
	const token = req.cookies.access_token
	const apiUrl = process.env.API_URL
	const url = `${apiUrl}/users/me`

	return await universalServerSideProps(url, token, 'accountData')
}
