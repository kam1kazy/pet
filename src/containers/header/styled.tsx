import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderArea = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2.1875rem;
`
const Brand = styled(Link)`
	text-align: center;
	font-size: 2.25rem;
	position: relative;
	text-transform: uppercase;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		top: 0.313rem;
		left: -0.625rem;
		bottom: 0;
		width: 0;
		background: ${(props) => props.theme.decorationColor};
		height: 0.188rem;
		margin: auto 0;
		transition: width ${(props) => props.theme.transition};
	}

	&:hover::before {
		width: 7.7rem;
	}
`
export { HeaderArea, Brand }
