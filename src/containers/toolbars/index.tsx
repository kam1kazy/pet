import { CreatePostButton } from '../../components/toolBars/createPost'
import { Search } from '../../components/toolBars/search'
import { ToolBarsArea } from './styled'

const Toolbars = () => {
	return (
		<ToolBarsArea>
			<Search />
			<CreatePostButton />
		</ToolBarsArea>
	)
}

export { Toolbars }
