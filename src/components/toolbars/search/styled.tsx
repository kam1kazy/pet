import styled from 'styled-components'

const Form = styled.form`
	position: relative;
	box-shadow: rgb(0 0 0 / 2%) 0rem 0.625rem 1.25rem -0.188rem;
	width: 22rem;

	&:hover svg {
		color: #818181;
	}
`
const Button = styled.button`
	background: transparent;
	border: 0 transparent;
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto 0;
	cursor: pointer;

	svg {
		width: 2.5rem;
		height: 1.25rem;
		color: #ccc;
		transition: color ${(props) => props.theme.transition};
		z-index: 1;
	}
`
const Input = styled.input`
	background-color: #fff;
	border-radius: 0.563rem;
	width: 100%;
	height: 2.813rem;
	font-size: 0.875rem;
	padding: 0.125rem 0.9375rem 0;
	color: #818181;
	border: 0 transparent;
	outline: none;
	font-weight: 100;

	&:focus + .search_btn svg {
		color: #818181;
	}

	&::placeholder,
	&::-webkit-input-placeholder,
	&:-moz-placeholder,
	&::-moz-placeholder,
	&:-ms-input-placeholder,
	&::-ms-input-placeholder {
		color: #ccc;
		font-size: 0.875rem;
		font-weight: 100;
		opacity: 1;
	}
`

export { Form, Button, Input }
