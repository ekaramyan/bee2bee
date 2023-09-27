import MyAccount from '@/containers/MyAccount'
import LoggedInWrapper from '@/components/UI/logged_in_wrapper'

export default function Account() {
	return (
		<>
			<LoggedInWrapper>
				<MyAccount />
			</LoggedInWrapper>
		</>
	)
}