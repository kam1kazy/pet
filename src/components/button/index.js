import styled from 'styled-components'

const ButtonArea = styled.div`
	background: #140f26;
	width: 200px;
	height: 35px;
	color: #fff;
	display: flex;
	margin: 0 auto;
	border: 0;
	border-radius: 6px;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`

export default function Button({ title, action }) {
	// return <ButtonArea onClick={action}>{title}</ButtonArea>
}
