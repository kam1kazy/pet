import styled from 'styled-components'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import CreatePostButton from '../../components/toolbars/createPost'
import Search from '../../components/toolbars/search'

const ToolBarsArea = styled.section`
	display: flex;
	justify-content: space-between;
`

export default function ToolBars() {
	return (
		<ToolBarsArea>
			<Search />
			<CreatePostButton />
		</ToolBarsArea>
	)
}
