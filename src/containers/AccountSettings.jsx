import { useRouter } from 'next/router'
import Wrapper from '../components/UI/Wrapper'
import EditAccount from '@/components/EditAccount'

export default function AccountSettings({ data }) {
	const router = useRouter()
	const onChangeClick = () => {
		router.push('/auth/change-password')
	}
	const onResetClick = () => {
		router.push('/auth/reset')
	}
	return (
		<Wrapper header={'Account Settings'}>
			<EditAccount
				onChangeClick={onChangeClick}
				onResetClick={onResetClick}
				data={data.data}
			/>
		</Wrapper>
	)
}
