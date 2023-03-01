import styled from 'styled-components'

const FooterArea = styled.section`
	text-align: center;
	font-size: 1.875rem;
	position: absolute;
	bottom: 5px;
	left: 0;
	right: 0;
	margin: 0 auto;
	color: #ccc;
	opacity: 0.8;

	&::after,
	&::before {
		position: absolute;
		content: '.';
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		font-size: 1.875rem;
		display: block;
		color: #ccc;
		width: 1.25rem;
		z-index: 9;
		margin: 0 auto;
	}
	&::after {
		left: 1.875rem;
	}
	&::before {
		right: 1.875rem;
	}
`

export default function Footer() {
	return (
		<FooterArea>
			<span>.</span>
		</FooterArea>
	)
}
