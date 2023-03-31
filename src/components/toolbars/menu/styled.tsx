import styled from 'styled-components'

const NavMenu = styled.div`
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

export { NavMenu }
