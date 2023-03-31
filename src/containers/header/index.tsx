import { Alerts } from '../../components/toolbars/notification'
import { Menu } from '../../components/toolbars/menu'
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

export {Header}
