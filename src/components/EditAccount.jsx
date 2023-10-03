import { Box, Button, Grid, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import ImageCompression from 'browser-image-compression'
import useUploadPhoto from '@/hooks/useUploadPhoto'
const AuthButton = dynamic(() => import('./UI/AuthButton'))
const UserAvatar = dynamic(() => import('./UI/UserAvatar'))
import avatarBg from '@/assets/img/user_avatar_big.svg'

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
			try {
				const options = {
					maxSizeMB: 1,
					maxWidthOrHeight: 1920,
					useWebWorker: true,
				}

				const compressedFile = await ImageCompression(file, options)

				setPreviewImage(URL.createObjectURL(compressedFile))
			} catch (error) {
				console.error('Error during image compression:', error)
			}
		}
	}

	const handleConfirmPhoto = () => {
		const file = document.querySelector('input[type="file"]').files[0]
		if (file) {
			upload(file)
			if (success) {
				setPreviewImage(null)
			}
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
				<div
					style={{
						position: 'relative',
						width: '210px',
						height: '240px',
						backgroundImage: `url(${avatarBg.src})`,
						zIndex: 2,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<UserAvatar previewImage={previewImage} />
					<div
						style={{
							position: 'absolute',
							bottom: 10,
							right: 10,
							width: '50px',
							height: '50px',
							overflow: 'hidden',
							borderRadius: '50%',
						}}
					>
						<input
							type='file'
							onChange={handleImageChange}
							style={{
								cursor: 'pointer',
								position: 'absolute',
								top: 0,
								left: 0,
								opacity: 0,
								width: '100%',
								height: '100%',
							}}
						/>
						<div
							style={{
								width: '100%',
								height: '100%',
								backgroundColor: 'green',
								position: 'relative',
								pointerEvents: 'none',
							}}
						>
							<div
								style={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
									color: 'white',
									fontWeight: 'bold',
									fontSize: '24px',
								}}
							>
								+
							</div>
						</div>
					</div>
				</div>

				{!success && previewImage && (
					<Button variant='contained' onClick={handleConfirmPhoto}>
						Confirm Photo
					</Button>
				)}

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
						<AuthButton
							variant='contained'
							onClick={onChangeClick}
							style={{ background: '#119A48' }}
						>
							Change your password
						</AuthButton>
					</Box>
					<Box>
						<Typography>Nickname: {data?.nickname}</Typography>
						<Typography>Phone: {data?.phone}</Typography>
						<Typography>Telegram: {data?.telegram}</Typography>
						<AuthButton variant='contained' onClick={onResetClick}>
							Reset your password
						</AuthButton>
					</Box>
				</Grid>
				<AuthButton
					variant='contained'
					onClick={onSaveClick}
					style={{ background: '#A5560F' }}
				>
					Save changes
				</AuthButton>
			</Box>
		</>
	)
}
