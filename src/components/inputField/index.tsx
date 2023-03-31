import { TitleField } from './styled'

type InputType = {
	title: string
}

const InputField: React.FC<InputType> = ({ title }) => {
	return <TitleField type='text' name='title' placeholder={title} />
}

export { InputField }
