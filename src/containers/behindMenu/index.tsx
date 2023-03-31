import { CgAddR, CgFileDocument } from 'react-icons/cg'
import { BiChart } from 'react-icons/bi'
import { GiAchievement } from 'react-icons/gi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { TbLogout } from 'react-icons/tb'
import {
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
