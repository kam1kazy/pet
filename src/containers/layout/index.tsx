import { RouterProvider } from 'react-router-dom'
import routesConfig from '../../routes/routesConfig'
import { PreLoader } from '../../pages/preloader'
import { BehindMenu } from '../behindMenu'
import { Main } from './styled'

import { useCallback } from 'react'
import { useToggleSwitchesStore } from '../../store/toggleSwitchesStore'

const Layout: React.FC = () => {
	const sideMenu = useToggleSwitchesStore(
		useCallback(({ sideMenu }) => sideMenu, [])
	)

	const toggle = sideMenu ? 'active-menu' : ''

	return (
		<>
			<BehindMenu />
			<Main className={toggle}>
				<RouterProvider router={routesConfig} fallbackElement={<PreLoader />} />
			</Main>
		</>
	)
}

export { Layout }
