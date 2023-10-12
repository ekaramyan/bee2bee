import OneCell from '@/containers/OneCell'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import useLogin from '@/hooks/useLogin'
import { universalServerSideProps } from '@/api/ssr'

export default function Cell({ cellData }) {
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

	return <OneCell data={cellData.data} />
}

export async function getServerSideProps(context) {
	const { req, query } = context
	const id = context.params.cellLevelId
	const token = req.cookies.access_token
	const apiUrl = process.env.API_URL
	const url = `${apiUrl}/cells/all/list?level_id=${id}`

	return await universalServerSideProps(url, token, 'cellData')
}
