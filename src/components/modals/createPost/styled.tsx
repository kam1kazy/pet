import styled from 'styled-components'

const Modal = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;

	transition: all 0.3s ease-in-out;
	pointer-events: visible;
`
const Content = styled.div`
	width: 450px;
	border-radius: 5px;
	background-color: #fff;
	-webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	-moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`
const Block = styled.div`
	padding: 22px 10px;
`
const Title = styled.div`
	font-size: 20px;
	font-weight: 500;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
`
const Body = styled.div`
	padding: 20px 10px;
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;
`

export { Modal, Content, Block, Title, Body }
