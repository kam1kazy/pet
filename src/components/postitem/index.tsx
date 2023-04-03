import { Post } from '../../types/data'
import {
	Tags,
	Message,
	Title,
	Content,
	Time,
	Header,
	PostArea,
	PostUrl,
} from './styled'

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

			<PostUrl to={`posts/${id}`}>
				<Content>
					<Title>{title ? title : ''}</Title>

					<Message>{body ? body : ''}</Message>
				</Content>
			</PostUrl>
		</PostArea>
	)
}

export { PostItem }
