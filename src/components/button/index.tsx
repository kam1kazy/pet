import { ButtonArea } from './styled'

const Button = ({ title, action }: any) => {
	return <ButtonArea onClick={action}>{title}</ButtonArea>
}

export { Button }
