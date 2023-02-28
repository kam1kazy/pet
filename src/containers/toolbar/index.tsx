import styled from 'styled-components'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import CreatePostButton from '../../components/toolbars/createPost'
import Search from '../../components/toolbars/search'

export default function ToolBars() {
	const ToolBars = styled.section`
		display: flex;
		justify-content: space-between;
	`

	return (
		<ToolBars>
			<Search />
			<CreatePostButton />
		</ToolBars>
	)
}
