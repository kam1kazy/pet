import styled from 'styled-components'

const PostsArea = styled.section`
	flex: 1 1 auto;
	overflow-y: scroll;

	-ms-overflow-style: none; /* Internet Explorer 10+ */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
`

export { PostsArea }
