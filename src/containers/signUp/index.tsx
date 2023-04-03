import styled from 'styled-components'
import { Button } from '../../components/button'
import { InputField } from '../../components/inputField'

const Title = styled.h1`
	font-size: 1.3rem;
	font-weight: 500;
	line-height: 2.2rem;
	margin-bottom: 1rem;
	text-align: center;
	margin: 20px 0 40px;
	padding-top: 40px;
	border-top: 1px solid ${(props) => props.theme.lineColor};
`
const ListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;

	input {
		max-width: 13rem;
	}
`
const ListFields = styled.ul`
	max-width: 20rem;
	margin: 0 auto;
	margin-bottom: 40px;
`

const Signup: React.FC = () => {
	const handle = () => {}

	return (
		<>
			<form action=''>
				<Title>SignUp to Blog</Title>
				<ListFields>
					<ListItem>
						Login: <InputField title='text' />
					</ListItem>
					<ListItem>
						<p>Password: </p>
						<InputField title='text2' />
					</ListItem>
				</ListFields>
				<Button title='Enter' action={handle} />
			</form>
		</>
	)
}

export { Signup }
