import { CgAddR, CgFileDocument } from 'react-icons/cg'
import { BiChart } from 'react-icons/bi'
import { GiAchievement } from 'react-icons/gi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { TbLogout } from 'react-icons/tb'
import {
	Menu,
	LinkItem,
	MenuList,
	MenuBar,
	UserCount,
	Info,
	UserLogin,
	UserName,
	Avatar,
	Header,
	SideBar,
} from './styled'

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
							<LinkItem to='#'>
								<CgAddR />
								<span>Add new post</span>
							</LinkItem>
							<LinkItem to='#'>
								<CgFileDocument />
								<span>You articles</span>
							</LinkItem>
							<LinkItem to='#'>
								<BiChart />
								<span>You activities</span>
							</LinkItem>
							<LinkItem to='#'>
								<GiAchievement />
								<span>Achievement</span>
							</LinkItem>
							<LinkItem to='#'>
								<IoNotificationsOutline />
								<span>Notification</span>
							</LinkItem>
							<LinkItem to='/signup'>
								<TbLogout />
								<span>Logout</span>
							</LinkItem>
						</MenuList>
					</MenuBar>
				</SideBar>
			</Menu>
		</>
	)
}

export { BehindMenu }
