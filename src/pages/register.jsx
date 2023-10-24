import RegisterContainer from '@/containers/RegisterContainer'
import useAuthentication from '@/hooks/useAuthentication'

export default function RegisterPage() {
	useAuthentication()
	return <RegisterContainer />
}
