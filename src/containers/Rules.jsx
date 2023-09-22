import Wrapper from '@/components/UI/Wrapper'
import { Box, Typography } from '@mui/material'

export default function Rules() {
	return (
		<Box
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Wrapper>
				<Typography
					variant='block_header'
					style={{ padding: '10px', borderBottom: '1px solid #E06B00', alignSelf:'start'}}
				>
					Rules
				</Typography>
				<Box
					style={{
						maxHeight: '50vh',
						overflowY: 'auto', // Add vertical scrollbar
						padding: '10px', // Add padding
						'&::-webkit-scrollbar': {
							width: '10px',
						},
						'&::-webkit-scrollbar-track': {
							backgroundColor: '#E06B00',
							boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
							webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
						},
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: '#000000',
						},
						scrollbarColor: '#000000 #E06B00', // For Firefox
					}}
				>
					<Typography style={{ overflow: 'auto' }}>
						Before you (our Community Member and/or potential Community Member)
						register on the https://bee2bee.world website, we kindly ask you to
						carefully read our Public Offer Agreement, Privacy Policy and Accept
						this Disclosure. This Disclosure is for informational purposes only
						and should not be considered as an exhaustive list. By registering
						on the https://bee2bee.world website, you confirm the full
						acceptance of the terms and conditions of the Gifting Platform. I,
						as a Community Member and/or potential Community Member, confirm
						that I am familiar with the existing types of risks: Technical risks
						1. I have no financial and moral claims against the Platform in the
						event of a failure, malfunction, interruption of the website
						https://bee2bee.world , disconnection or malicious behavior of
						information, communication, electrical, electronic or other systems.
						2. I acknowledge that any third party attacks on the Platform
						Systems that result in disruption of services or loss of funds are
						beyond the liability of the Platform, and any losses resulting from
						such attacks will not be compensated by the Platform. The Service
						undertakes to take all reasonable measures to reject such attacks
						and ensure the gift exchange process. 3. I acknowledge that when
						making transactions by phone, I may encounter difficulties in
						contacting the operator, especially during peak hours. 4. I may
						suffer financial loss if the above risks materialize and I
						acknowledge that I am liable for all losses that I may incur. Risks
						associated with the peculiarities of the legislation of individual
						countries
					</Typography>
				</Box>
			</Wrapper>
		</Box>
	)
}
