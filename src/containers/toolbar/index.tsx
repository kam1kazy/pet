import { CreatePostButton } from '../../components/toolbars/createPost'
import { Search } from '../../components/toolbars/search'
import { ToolBarsArea } from './styled'

const ToolBars = () => {
	return (
		<ToolBarsArea>
			<Search />
			<CreatePostButton />
		</ToolBarsArea>
	)
}

export { ToolBars }
