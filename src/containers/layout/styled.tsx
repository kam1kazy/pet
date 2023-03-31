import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	flex-flow: column;

	transition: left 0.5s ease, transform 0.5s ease;

	position: absolute;
	top: 0;
	left: 0;
	right: 0;

	background-color: #f8f8f8;
	margin: 0 auto;
	overflow: hidden;
	width: 100%;
	height: 100%;
	padding: 2.1875rem 1.8rem;
	border-radius: 1.25rem;
	-webkit-border-radius: 1.25rem;
	-moz-border-radius: 1.25rem;
	/* background: #1C1E20; */

	&.active-menu {
		left: 285px;
		transform: scale(0.9);
	}
`

export { Main }
