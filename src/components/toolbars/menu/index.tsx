import { RiMistLine } from 'react-icons/ri'
import { NavMenu } from './styled'
import { useToggleSwitchesStore } from '../../../store/toggleSwitchesStore'

const Menu: React.FC = () => {
	const sideMenu = useToggleSwitchesStore(({ sideMenu }) => sideMenu)
	const setToggleMenu = useToggleSwitchesStore(
		({ setToggleMenu }) => setToggleMenu
	)

	const handleToggleMenu = () => {
		setToggleMenu(!sideMenu)
	}

	return (
		<NavMenu onClick={handleToggleMenu}>
			<RiMistLine />
		</NavMenu>
	)
}
export { Menu }
