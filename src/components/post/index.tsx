import styled from 'styled-components'

const PostArea = styled.div`
	width: 100%;
	margin: 0 auto 2rem;
	padding: 0.5rem 0.5rem 1rem;
`
const Header = styled.div`
	border-bottom: 1px solid #eee;
	padding: 0 0.5rem 0.5rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`
const Time = styled.div`
	font-weight: 100;
	font-size: 0.7rem;
	margin-left: 1rem;
`
const Content = styled.div`
	padding: 1rem 0.8rem;
`

const Title = styled.div`
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2.2rem;
	margin-bottom: 1rem;
`

const Message = styled.div`
	line-height: 2rem;
`

const Tags = styled.div`
	font-size: 0.7rem;
	font-weight: 300;
	opacity: 0.5;
	text-transform: uppercase;

	ul {
		display: flex;
		justify-content: flex-end;
	}
	li {
		margin-left: 0.6rem;
	}
`

type TypePost = {
	time: string
	title: string
	body: string
	tags?: [{ tagName: string }]
}

export default function Post({ time, title, body, tags }: TypePost) {
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
					<h4>{title ? title : ''}</h4>
				</Title>

				<Message>
					<p>{body ? body : ''}</p>
				</Message>
			</Content>
		</PostArea>
	)
}
