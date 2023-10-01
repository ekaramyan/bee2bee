import Image from 'next/image'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import useUploadPhoto from '@/hooks/useUploadPhoto'
import avatarBg from '@/assets/img/consultant_avatar.svg'

export default function EditAccount({
	onChangeClick,
	onResetClick,
	onSaveClick,
	data,
}) {
	const { upload, loading, error, success } = useUploadPhoto()
	const [previewImage, setPreviewImage] = useState(null)

	const handleImageChange = async e => {
		const file = e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setPreviewImage(reader.result)
				upload(file)
			}
			reader.readAsDataURL(file)
		}
	}
	return (
		<>
			<Typography variant='block_header'>Account Settings</Typography>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 30,
				}}
			>
				{previewImage ? (
					<Image src={previewImage} alt='Preview' width={200} height={200} />
				) : (
					<Image src={avatarBg.src} width={200} height={200} />
				)}
				<input type='file' onChange={handleImageChange} />
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography>
						{data?.firstName} {data?.lastName}
					</Typography>
					<Typography> date of birth: {data?.birth}</Typography>
				</Box>
				<Grid style={{ display: 'flex', gap: 60 }}>
					<Box>
						<Typography>User #: {data?.id}</Typography>
						<Typography>Email: {data?.email}</Typography>
						<Typography>Country: {data?.country}</Typography>
						<Button variant='contained' onClick={onChangeClick}>
							Change your password
						</Button>
					</Box>
					<Box>
						<Typography>Nickname: {data?.nickname}</Typography>
						<Typography>Phone: {data?.phone}</Typography>
						<Typography>Telegram: {data?.telegram}</Typography>
						<Button variant='contained' onClick={onResetClick}>
							Reset your password
						</Button>
					</Box>
				</Grid>
				<Button variant='contained' onClick={onSaveClick}>
					Save changes
				</Button>
			</Box>
		</>
	)
}
