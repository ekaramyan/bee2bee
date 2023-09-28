import Image from 'next/image'
import { Box, Button, Grid, Typography } from '@mui/material'
import avatarBg from '@/assets/img/consultant_avatar.svg'

export default function EditAccount({
	onChangeClick,
	onResetClick,
	onSaveClick,
}) {
	return (
		<>
			<Image src={avatarBg.src} width={200} height={200} />
			<Box>
				<Typography> Name & last name</Typography>
				<Typography> date of birth: 13.12.11</Typography>
			</Box>
			<Grid style={{ display: 'flex', gap: 60 }}>
				<Box>
					<Typography>user: dfgdsfgsfdggfds</Typography>
					<Typography>user: dfgdsfgsfdggfds</Typography>
					<Typography>user: dfgdsfgsfdggfds</Typography>
					<Button variant='contained' onClick={onChangeClick}>
						Change your password
					</Button>
				</Box>
				<Box>
					<Typography>user: dfgdsfgsfdggfds</Typography>
					<Typography>user: dfgdsfgsfdggfds</Typography>
					<Typography>user: dfgdsfgsfdggfds</Typography>
					<Button variant='contained' onClick={onResetClick}>
						Reset your password
					</Button>
				</Box>
			</Grid>
			<Button variant='contained' onClick={onSaveClick}>
				Save changes
			</Button>
		</>
	)
}
