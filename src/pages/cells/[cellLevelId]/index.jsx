import OneCell from '@/containers/OneCell'
import { universalServerSideProps } from '@/api/ssr'
import useAuthentication from '@/hooks/useAuthentication'

export default function Cell({ cellData, joinListData, levelData }) {
	useAuthentication()
	console.log(levelData)
	return (
		<OneCell
			data={cellData.data}
			joinList={joinListData}
			level={levelData.data}
		/>
	)
}

export async function getServerSideProps(context) {
	const { req, query } = context
	const id = context.params.cellLevelId
	const token = req.cookies.access_token
	const apiUrl = process.env.API_URL
	const url = `${apiUrl}/cells/all/list?level_id=${id}`
	const joinListUrl = `${apiUrl}/cells/join/list?level_id=${id}`
	const levelUrl = `${apiUrl}/cell-levels/${id}`

	const cellDataProps = await universalServerSideProps(url, token, 'cellData')
	const joinListDataProps = await universalServerSideProps(
		joinListUrl,
		token,
		'joinListData'
	)
	const levelDataProps = await universalServerSideProps(
		levelUrl,
		token,
		'levelData'
	)

	console.log(levelDataProps)

	return {
		props: {
			...cellDataProps.props,
			...joinListDataProps.props,
			...levelDataProps.props,
		},
	}
}
