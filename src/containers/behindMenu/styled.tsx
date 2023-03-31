import styled from 'styled-components'

const Menu = styled.div`
	display: flex;
	flex-flow: column;

	transition: left 0.5s ease, transform 0.5s ease;

	position: absolute;
	top: 0;
	left: 0;
	right: 0;

	/* background-color: #f8f8f8; */
	margin: 0 auto;
	overflow: hidden;
	width: 100%;
	height: 100%;
	padding: 2.1875rem 1.8rem;
	border-radius: 1.55rem;
	-webkit-border-radius: 1.55rem;
	-moz-border-radius: 1.55rem;
	background: #1c1e20;

	&.active-menu {
		left: 285px;
		transform: scale(0.9);
	}
`

const SideBar = styled.section`
	width: 200px;
	height: 80vh;
	top: 0;
	bottom: 0;
	margin: auto;
	position: absolute;
	color: #fff;
	font-size: 20px;
`
const Header = styled.div``
const Avatar = styled.div`
	background: #00efff75;
	width: 100px;
	height: 100px;
	border-radius: 100%;
	margin-bottom: 20px;

	img {
		border-radius: 100%;
		max-width: 100%;
	}
`
const UserName = styled.p``
const UserLogin = styled.p`
	opacity: 0.7;
	font-size: 12px;
	font-style: italic;
	margin-top: 5px;
`
const Info = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 30px 0 40px;
`
const UserCount = styled.div`
	span {
		display: block;
		opacity: 0.7;
		margin-top: 10px;
		font-size: 12px;
	}
`
const MenuBar = styled.div``
const MenuList = styled.ul`
	font-size: 16px;
`
const Link = styled.li`
	display: flex;
	margin-bottom: 40px;
	cursor: pointer;

	svg {
		margin-right: 20px;
		font-size: 18px;
	}
`

export {
	Menu,
	Link,
	MenuList,
	MenuBar,
	UserCount,
	Info,
	UserLogin,
	UserName,
	Avatar,
	Header,
	SideBar,
}
