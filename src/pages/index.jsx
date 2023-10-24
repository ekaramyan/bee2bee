import MainPage from '@/containers/MainPage'
import useAuthentication from '@/hooks/useAuthentication'

export default function Index() {
	useAuthentication()
	return <MainPage />
}
