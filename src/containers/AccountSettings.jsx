import React from 'react'
import Wrapper from '../components/UI/Wrapper'
import EditAccount from '@/components/EditAccount'

export default function AccountSettings({ data }) {
	const onChangeClick = () => {}
	const onResetClick = () => {}
	const onSaveClick = () => {}
	return (
		<Wrapper>
			<EditAccount
				onChangeClick={onChangeClick}
				onResetClick={onResetClick}
				onSaveClick={onSaveClick}
				data={data.data}
			/>
		</Wrapper>
	)
}
