import styled from 'styled-components'

const Notification = styled.div`
	position: relative;

	svg {
		width: 1.563rem;
		height: 1.563rem;
		transition: transform ${(props) => props.theme.transition};
	}

	&:hover {
		cursor: pointer;
		svg {
			transform: ${(props) => props.theme.transformRotateIcons};
		}
	}
`
const MessageList = styled.div`
	position: absolute;
	top: 45px;
	right: -30px;
	width: 295px;
	height: 400px;
	background: white;
	z-index: 2;
	border-radius: 10px;
	padding: 15px 10px 15px 10px;
	box-shadow: 0px 5px 10px 2px rgb(34 60 80 / 10%);
	overflow: hidden;

	ul {
		height: inherit;
		overflow-y: scroll;
		padding-left: 28px;

		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
		&::-webkit-scrollbar {
			display: none; /* Safari and Chrome */
		}
	}

	li {
		margin-bottom: 23px;
		position: relative;

		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 3px;
			left: -20px;
			width: 9px;
			height: 9px;
			background-color: #f3e576;
			border-radius: 100%;
		}
	}

	h6 {
		margin-bottom: 5px;
	}

	p {
		font-size: 13px;
		line-height: 20px;
		font-weight: 100;
		color: #7b7b7b;
	}
`
export { Notification, MessageList }
