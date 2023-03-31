import { RiSearch2Line } from 'react-icons/ri'
import { Form, Button, Input } from './styled'

const Search: React.FC = () => {
	return (
		<>
			<Form method='get'>
				<Input type='text' name='search' id='search' placeholder='Поиск...' />
				<Button value='Поиск'>
					<RiSearch2Line />
				</Button>
			</Form>
		</>
	)
}

export { Search }
