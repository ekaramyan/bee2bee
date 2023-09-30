import { Button } from '@mui/material'
import { styled } from '@mui/system'

const StyledButton = styled(Button)`
	&& {
		cursor: pointer;
		color: #eaeee8;
		font-family: Noto Sans;
		font-size: 20px;
		font-weight: 400;
		text-transform: uppercase;
		border-radius: 5px;
		background: #e06b00;
		transition: 0.3s;
		&:hover {
			opacity: 0.8;
		}
	}
`

export default function AuthButton({ children, ...props }) {
	return <StyledButton type={props.type}>{children}</StyledButton>
}
