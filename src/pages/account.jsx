import MyAccount from '@/containers/MyAccount'
import { universalServerSideProps } from '@/api/ssr'

export default function AccountPage({ accountData }) {
	return <MyAccount data={accountData} />
}

export async function getServerSideProps(context) {
	const { req } = context
	const token = req.cookies.access_token
	const apiUrl = process.env.API_URL
	const url = `${apiUrl}/users/me`

	return await universalServerSideProps(url, token, 'accountData')
}
