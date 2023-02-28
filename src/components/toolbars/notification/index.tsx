import styled from 'styled-components'
import { RiNotificationLine } from 'react-icons/ri'

const Notification = styled.div`
	svg {
		width: 1.563rem;
		height: 1.563rem;
		transition: transform ${(props) => props.theme.transition};
	}

	&:hover {
		cursor: pointer;
		svg {
			transform: ${(props) => props.theme.transformRotateIcons};
		}
	}
`

export default function Alert() {
	return (
		<Notification>
			<RiNotificationLine />
		</Notification>
	)
}
