import { Link } from 'react-router-dom'
import { Post } from '../../types/data'
import { Tags, Message, Title, Content, Time, Header, PostArea } from './styled'

interface Posts extends Post {}

const PostItem: React.FC<Posts> = (props) => {
	const { time, title, body, tags, id } = props

	return (
		<PostArea>
			<Header>
				<Tags>
					<ul>
						{tags?.map((tag, id) => {
							return <li key={id}>#{tag.tagName}</li>
						})}
					</ul>
				</Tags>
				<Time>
					<p>{time ? time : ''}</p>
				</Time>
			</Header>

			<Content>
				<Title>
					<Link to={`posts/${id}`}>
						<h4>{title ? title : ''}</h4>
					</Link>
				</Title>

				<Message>
					<p>{body ? body : ''}</p>
				</Message>
			</Content>
		</PostArea>
	)
}

export { PostItem }
