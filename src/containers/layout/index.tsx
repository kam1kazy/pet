import { useCallback } from 'react'
import { useToggleSwitchesStore } from '../../store/toggleSwitchesStore'
import { Main } from './styled'

const Layout: React.FC = ({ children }: any) => {
	const sideMenu = useToggleSwitchesStore(
		useCallback(({ sideMenu }) => sideMenu, [])
	)

	// ! Перенести класс переключатель в другой компонент

	const toggle = sideMenu ? 'active-menu' : ''

	return <Main className={toggle}>{children}</Main>
}

export { Layout }
