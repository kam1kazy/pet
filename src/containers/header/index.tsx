import { Alerts } from '../../components/toolBars/notification'
import { Menu } from '../../components/toolBars/menu'
import { HeaderArea, Brand } from './styled'

const Header: React.FC = () => {
	return (
		<HeaderArea>
			<Menu />
			<Brand to='/'>Diary</Brand>
			<Alerts />
		</HeaderArea>
	)
}

export { Header }
