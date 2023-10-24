import { useRouter } from 'next/router'
import { Box, Typography, Select, MenuItem, useMediaQuery } from '@mui/material'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import ImageCompression from 'browser-image-compression'
import countryList from '@/countryList'
import useUploadPhoto from '@/hooks/useUploadPhoto'
import useUpdateUser from '@/hooks/useUpdateUser'
const AuthButton = dynamic(() => import('./UI/AuthButton'))
const UserAvatar = dynamic(() => import('./UI/UserAvatar'))
import avatarBg from '@/assets/img/user_avatar_big.svg'

export default function EditAccount({ onChangeClick, onResetClick, data }) {
	const { upload, loading, error, success } = useUploadPhoto()
	const { update, load, err, suc } = useUpdateUser()
	const [previewImage, setPreviewImage] = useState(null)
	const [compressedFileObject, setCompressedFileObject] = useState(null)
	const [formData, setFormData] = useState({
		firstName: data?.firstName || '',
		lastName: data?.lastName || '',
		birth: data?.birth || '',
		id: data?.id || '',
		email: data?.email || '',
		country: data?.country || '',
		nickname: data?.nickname || '',
		phone: data?.phone || '',
		telegram: data?.telegram || '',
		additionalEmail: data?.additionalEmail || '',
		additionalTelegram: data?.additionalTelegram || '',
	})
	const router = useRouter()
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
				setCompressedFileObject(compressedFile)
				setPreviewImage(URL.createObjectURL(compressedFile))
			} catch (error) {
				console.error('Error during image compression:', error)
			}
		}
	}

	const handleConfirmPhoto = () => {
		if (compressedFileObject) {
			upload(compressedFileObject)
			if (success) {
				setPreviewImage(null)
			}
		}
	}

	// useEffect(() => {
	// 	if (success) {
	// 		setPreviewImage(null)
	// 	}
	// }, [success])

	const onSaveClick = async e => {
		e.preventDefault()
		handleConfirmPhoto()
		update(formData)
	}

	const handleInputChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	// if (!data) {
	// 	router.push('/')
	// }
	const isMobile = useMediaQuery('@media(max-width:1300px)')

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 1,
				}}
			>
				<div
					style={{
						position: 'relative',
						width: '174px',
						height: '204px',
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
					<UserAvatar
						previewImage={previewImage}
						isClickable={true}
						clickUrl=''
					/>
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
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography variant='h6'>
						{data?.firstName} {data?.lastName}
					</Typography>
					<Typography variant='date'>Date of Birth: {data?.birth}</Typography>
				</Box>
				<form style={{ width: isMobile ? '100%' : '60%', marginTop: 5 }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: 2,
							width: '100%',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: isMobile ? 'column' : 'row',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 2,
								width: '100%',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: isMobile ? 'center' : 'flex-end',
									gap: 1,
									width: '50%',
									paddingRight: 2,
								}}
							>
								<Typography variant='user_key' display='flex'>
									User #:
									<Typography variant='user_item'>{data?.id}</Typography>
								</Typography>
								<Typography variant='user_key' display='flex'>
									Email:
									<Typography variant='user_item'>{data?.email}</Typography>
								</Typography>
								<Typography variant='user_key' display='flex'>
									Phone:
									<Typography variant='user_item'>{data?.phone}</Typography>
								</Typography>
								<Typography variant='user_key' display='flex'>
									Telegram Username:
									<Typography variant='user_item'>{data?.telegram}</Typography>
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: isMobile ? 'center' : 'start',
									gap: 0.5,
									width: '50%',
								}}
							>
								<Typography variant='user_key' display='flex'>
									Nickname:
									<Typography variant='user_item'>{data?.nickname}</Typography>
								</Typography>

								<label
									style={{
										display: 'flex',
										width: '100%',
										alignItems: 'center',
										whiteSpace: 'nowrap',
										color: '#1B170F',
										fontFamily: 'Noto Sans',
										fontSize: 20,
										fontWeight: 400,
									}}
								>
									Additional Email:
									<input
										type='text'
										value={formData?.additionalEmail}
										onChange={handleInputChange}
										name='additionalEmail'
										style={{
											width: '100%',
											background: 'transparent',
											border: 'none',
											borderBottom: '1px solid transparent',
											outline: 'none',
											color: '#119A48',
											fontSize: 20,
											fontWeight: 700,
										}}
									/>
								</label>
								<label
									style={{
										display: 'flex',
										alignItems: 'center',
										width: '100%',
										color: '#1B170F',
										fontFamily: 'Noto Sans',
										fontSize: 20,
										fontWeight: 400,
									}}
								>
									Country:
									<Select
										label={formData?.country}
										disableUnderline
										variant='standard'
										value={formData?.country}
										onChange={handleInputChange}
										fullWidth
										type='select'
										name='country'
										sx={{
											width: '100%',
											background: 'none',
											border: 'none',
											borderBottom: '0 !important',
											outline: 'none',
											color: '#119A48',
											fontSize: 20,
											fontWeight: 700,
											paddingLeft: 2,
										}}
									>
										{countryList.map(country => (
											<MenuItem key={country.code} value={country.name}>
												{country.name}
											</MenuItem>
										))}
									</Select>
								</label>
								<label
									style={{
										display: 'flex',
										width: '100%',
										alignItems: 'center',
										whiteSpace: isMobile ? 'wrap' : 'nowrap',
										color: '#1B170F',
										fontFamily: 'Noto Sans',
										fontSize: 20,
										fontWeight: 400,
									}}
								>
									Telegram Additional Username:
									<input
										type='text'
										value={formData?.additionalTelegram}
										onChange={handleInputChange}
										name='additionalTelegram'
										style={{
											width: '100%',
											background: 'none',
											border: 'none',
											borderBottom: '1px solid transparent',
											outline: 'none',
											color: '#119A48',
											fontSize: 20,
											fontWeight: 700,
										}}
									/>
								</label>
							</Box>
						</Box>

						<Box
							sx={{
								display: 'flex',
								flexDirection: isMobile ? 'column' : 'row',
								justifyContent: 'center',
								alignItems: 'center',
								gap: isMobile ? 2 : 5,
								width: isMobile ? 'none' : '100%',
							}}
						>
							<AuthButton
								variant='contained'
								onClick={onChangeClick}
								style={{
									background: '#119A48',
									width: isMobile ? '100%' : '50%',
								}}
							>
								Change your password
							</AuthButton>
							<AuthButton
								variant='contained'
								onClick={onResetClick}
								style={{
									background: '#FF6B00',
									width: isMobile ? '100%' : '50%',
								}}
							>
								Reset your password
							</AuthButton>
						</Box>
						<Box
							style={{
								marginTop: 4,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								maxWidth: isMobile ? 270 : 'none',
								width: '100%',
							}}
						>
							<AuthButton
								variant='contained'
								onClick={onSaveClick}
								type='submit'
								style={{
									background: '#A5560F',
									width: isMobile ? '100%' : '50%',
								}}
							>
								Save changes
							</AuthButton>
						</Box>
					</Box>
				</form>
				{(suc && <Typography>successfully updated account</Typography>) ||
					(success && <Typography>successfully updated avatar</Typography>)}
			</Box>
		</>
	)
}
