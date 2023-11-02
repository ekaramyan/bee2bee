import React, { useState } from 'react'
import Wrapper from '@/components/UI/Wrapper'
import {
	Box,
	Typography,
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Faq = () => {
	const [expanded, setExpanded] = useState(false)

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}

	const faqData = [
		{
			question: 'Вопрос 1',
			answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices mauris faucibus enim imperdiet euismod. Etiam vitae mauris turpis. Nunc pellentesque gravida porta. Nulla tincidunt eu erat pellentesque hendrerit. Praesent condimentum diam sed est aliquam, sagittis dictum nisl efficitur. Cras eleifend placerat magna, in ornare tellus maximus eget. Vivamus ultrices, ante ut cursus rhoncus, metus est hendrerit lectus, feugiat placerat dui tortor vitae est. Pellentesque tortor purus, volutpat et massa vel, eleifend dignissim mi. Aliquam in rhoncus ipsum, in lobortis nibh. In dignissim ligula quis felis fermentum volutpat. Aliquam erat volutpat. Nam hendrerit purus neque, vel aliquam nibh luctus tempor. Aliquam porttitor magna id ante dignissim auctor a at turpis.`,
		},
		{
			question: 'Вопрос 2',
			answer: 'Ответ на вопрос 2.',
		},
		{
			question: 'Вопрос 3',
			answer: 'Ответ на вопрос 3.',
		},
		{
			question: 'Вопрос 4',
			answer: 'Ответ на вопрос 4.',
		},
		{
			question: 'Вопрос 5',
			answer: 'Ответ на вопрос 5.',
		},
		{
			question: 'Вопрос 6',
			answer: 'Ответ на вопрос 6.',
		},
	]

	return (
		<Box
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%',
				width: '100%',
				overflow: 'auto',
			}}
		>
			<Wrapper header={'FAQ'} notLoggedIn={false} style={{ minHeight: '80vh' }}>
				<Box
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(2, 1fr)',
						justifyContent: 'center',
						alignItems: 'start',
						gap: '20px',
						overflow: 'auto',
					}}
				>
					{faqData.map((item, index) => (
						<Accordion
							key={index}
							expanded={expanded === `panel${index}`}
							onChange={handleChange(`panel${index}`)}
							sx={{
								background: 'transparent',
								borderRadius: 15,
								border: 'none',
								boxShadow: 'none',
								'&.MuiAccordion-root::before': {
									content: 'none',
								},
							}}
						>
							<AccordionSummary
								style={{
									borderRadius: 15,
									background:
										expanded === `panel${index}` ? '#A5560F' : '#E06B00',
								}}
								expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
							>
								<Typography variant='real_cells_queue'>
									{item.question}
								</Typography>
							</AccordionSummary>
							<AccordionDetails
								style={{
									border: '#A5560F solid 4px',
									borderRadius: 15,
									background: '#E06B00',
									transform: 'translateY(5px)',
								}}
							>
								<Typography variant='cell_user_subtext'>
									{item.answer}
								</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Box>
			</Wrapper>
		</Box>
	)
}

export default Faq
