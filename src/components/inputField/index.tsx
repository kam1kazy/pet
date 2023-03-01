import styled from 'styled-components'

const TitleField = styled.input`
	width: 100%;
	height: 1.875rem;
	padding: 0px 0.3rem;
	border: 0;
	font-size: 1.1rem;
	border-bottom: 1px solid #ababab;
	background-color: transparent;
	outline: none;
`

type InputType = {
	title: string
}

export default function InputField({ title }: InputType) {
	return <TitleField type='text' name='title' placeholder={title} />
}
