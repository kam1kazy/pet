import { RiPenNibLine } from 'react-icons/ri'
import { NavLink } from './styled'

const CreatePostButton: React.FC = () => {
	return (
		<NavLink to='/createpost'>
			<RiPenNibLine />
		</NavLink>
	)
}

export { CreatePostButton }
