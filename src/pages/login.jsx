import dynamic from 'next/dynamic'
const LoginContainer = dynamic(() => import('@/containers/LoginContainer'))

export default function LoginPage() {
	return <LoginContainer />
}
