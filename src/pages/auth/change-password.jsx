import ChangePassword from '@/containers/ChangePassword'
import useAuthentication from '@/hooks/useAuthentication'

export default function ChangePasswordPage() {
	useAuthentication()
	return <ChangePassword />
}
