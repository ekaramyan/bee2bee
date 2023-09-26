import AccountSettings from '@/containers/AccountSettings'
import LoggedInWrapper from '@/components/UI/logged_in_wrapper'

export default function accountSettings() {
	return (
		<>
			<LoggedInWrapper>
				<AccountSettings />
			</LoggedInWrapper>
		</>
	)
}
