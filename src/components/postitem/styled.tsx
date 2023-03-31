import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PostArea = styled.div`
	width: 100%;
	padding: 0.5rem 0.5rem;
`
const Header = styled.div`
	border-bottom: 1px solid #eee;
	padding: 0 0.5rem 0.5rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`
const Time = styled.div`
	font-weight: 100;
	font-size: 0.7rem;
	margin-left: 1rem;
`
const Content = styled.div`
	padding: 1.8rem 0.8rem 3rem 0.8rem;
	margin-bottom: 0.8rem;
`

const PostUrl = styled(Link)`
	position: relative;

	&::after {
		content: 'читать -->';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 120px;
		height: 30px;
		font-size: 12px;
		opacity: 0;
		transition: opacity 0.4s ease;
		background: #000;
		color: #fff;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
	}

	&:hover::after {
		opacity: 1;
	}
`

const Title = styled.div`
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2.2rem;
	margin-bottom: 1rem;
`
const Message = styled.div`
	line-height: 2rem;
`
const Tags = styled.div`
	font-size: 0.7rem;
	font-weight: 300;
	opacity: 0.5;
	text-transform: uppercase;

	ul {
		display: flex;
		justify-content: flex-end;
	}
	li {
		margin-left: 0.6rem;
	}
`
export { Tags, Message, Title, Content, Time, Header, PostArea, PostUrl }
