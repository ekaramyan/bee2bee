import JoinCell from '@/components/JoinCell'
import LoggedInWrapper from '@/components/UI/logged_in_wrapper'

export default function Account() {
	return (
		<>
			<LoggedInWrapper>
				<JoinCell />
			</LoggedInWrapper>
		</>
	)
}
