import styled from 'styled-components'

import { Link } from 'react-router-dom'

const NavLink = styled(Link)`
	border-radius: 9px;
	background-color: ${(props) => props.theme.elementsBackgroundColor};
	width: 3.125rem;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: rgb(0 0 0 / 2%) 0px 10px 20px -3px;
	cursor: pointer;
	position: relative;

	svg {
		transition: color 0.25s ease;
		color: #818181;
		width: 1.875rem;
		height: 1.375rem;
		z-index: 1;

		transition: color 0.25s ease,
			transform 0.45s cubic-bezier(0.6, -0.37, 0.27, 1.55);
	}

	&:hover svg {
		color: #5f5f5f;
		transform: scale(1.07);
	}
`

export { NavLink }
