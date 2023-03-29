import styled from 'styled-components'

// Компоненты
import CreatePostButton from '../../components/toolbars/createPost'
import Search from '../../components/toolbars/search'

export default function ToolBars() {
	return (
		<ToolBarsArea>
			<Search />
			<CreatePostButton />
		</ToolBarsArea>
	)
}

const ToolBarsArea = styled.section`
	display: flex;
	justify-content: space-between;
`
