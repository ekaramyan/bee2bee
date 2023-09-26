import JoinCell from '@/containers/JoinCell'
import LoggedInWrapper from '@/components/UI/logged_in_wrapper'

export default function JoinTheCell() {
	return (
		<>
			<LoggedInWrapper>
				<JoinCell />
			</LoggedInWrapper>
		</>
	)
}
