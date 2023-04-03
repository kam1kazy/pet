import { ButtonArea } from './styled'

interface ButtonType {
	title: string
	action: () => void
}

const Button = ({ title, action }: ButtonType): any => {
	return <ButtonArea onClick={action}>{title}</ButtonArea>
}

export { Button }
