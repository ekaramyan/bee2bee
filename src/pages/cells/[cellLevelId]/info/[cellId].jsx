import CellInfo from '@/containers/CellInfo'
import { universalServerSideProps } from '@/api/ssr'

export default function Cell({ cellData }) {
	return <CellInfo data={cellData.data} />
}

export async function getServerSideProps(context) {
	const { req } = context
	const id = context.params.cellId
	const token = req.cookies.access_token
	const apiUrl = process.env.API_URL
	const url = `${apiUrl}/cells/${id}`

	return await universalServerSideProps(url, token, 'cellData')
}
