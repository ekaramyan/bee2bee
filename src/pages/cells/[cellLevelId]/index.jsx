import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import OneCell from '@/containers/OneCell'
import { universalServerSideProps } from '@/api/ssr'

export default function Cell({ cellData, joinListData, levelData }) {
	const dispatch = useDispatch()
	const token = Cookies.get('access_token')
	if (token) {
		dispatch({ type: 'LOG_IN' })
	}
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
	const url = `${apiUrl}/cells/all/list?level_id=${id}&limit=1`
	const joinListUrl = `${apiUrl}/cells/join/list?level_id=${id}` //add it when appears on backend &limit=1
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

	return {
		props: {
			...cellDataProps.props,
			...joinListDataProps.props,
			...levelDataProps.props,
		},
	}
}
