import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Wrapper from '../components/UI/Wrapper'
const EditAccount = dynamic(() => import('@/components/EditAccount'))

export default function AccountSettings({ data }) {
	const router = useRouter()
	const onChangeClick = () => {
		router.push('/auth/change-password')
	}
	const onResetClick = () => {
		router.push('/auth/reset')
	}
	return (
		<Wrapper header={'Account Settings'} style={{ minHeight: '80vh' }}>
			<EditAccount
				onChangeClick={onChangeClick}
				onResetClick={onResetClick}
				data={data.data}
			/>
		</Wrapper>
	)
}
