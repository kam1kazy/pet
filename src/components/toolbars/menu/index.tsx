import styled from 'styled-components'
import { RiMistLine } from 'react-icons/ri'

export default function Menu() {
	const Menu = styled.div`
		svg {
			width: 1.563rem;
			height: 1.563rem;
			transition: transform ${(props) => props.theme.transition};
		}

		&:hover {
			cursor: pointer;
			svg {
				transform: ${(props) => props.theme.transformTranslateIcons};
			}
		}
	`

	return (
		<Menu>
			<RiMistLine />
		</Menu>
	)
}
