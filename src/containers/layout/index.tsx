import { useCallback } from 'react'

import { useToggleSwitchesStore } from '../../store/toggleSwitchesStore'

const Layout: React.FC = () => {
	const sideMenu = useToggleSwitchesStore(
		useCallback(({ sideMenu }) => sideMenu, [])
	)

	// ! Перенести класс переключатель в другой компонент

	const toggle = sideMenu ? 'active-menu' : ''

	return <></>
}

export { Layout }
