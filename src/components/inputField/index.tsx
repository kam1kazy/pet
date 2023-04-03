import { TitleField } from './styled'

type InputType = {
	title: string
	name?: string
}

const InputField: React.FC<InputType> = ({ title, name }) => {
	return <TitleField type='text' name={name} placeholder={title} />
}

export { InputField }
