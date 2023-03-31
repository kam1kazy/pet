import styled from 'styled-components'
import { Menu } from './styled'
import { CgAddR, CgFileDocument } from 'react-icons/cg'
import { BiChart } from 'react-icons/bi'
import { GiAchievement } from 'react-icons/gi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { TbLogout } from 'react-icons/tb'

const BehindMenu: React.FC = () => {
	return (
		<>
			<Menu>
				<SideBar>
					<Header>
						<Avatar></Avatar>
						<UserName>Mavlyutov Denis</UserName>
						<UserLogin>@mavldr</UserLogin>
						<Info>
							<UserCount>
								<p>
									240 <span>Posts</span>
								</p>
							</UserCount>
							<UserCount>
								<p>
									26 <span>Achievement</span>
								</p>
							</UserCount>
						</Info>
					</Header>
					<MenuBar>
						<MenuList>
							<Link>
								<CgAddR />
								<span>Add new post</span>
							</Link>
							<Link>
								<CgFileDocument />
								<span>You articles</span>
							</Link>
							<Link>
								<BiChart />
								<span>You activities</span>
							</Link>
							<Link>
								<GiAchievement />
								<span>Achievement</span>
							</Link>
							<Link>
								<IoNotificationsOutline />
								<span>Notification</span>
							</Link>
							<Link>
								<TbLogout />
								<span>Logout</span>
							</Link>
						</MenuList>
					</MenuBar>
				</SideBar>
			</Menu>
		</>
	)
}

export { BehindMenu }

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
