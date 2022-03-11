import {
  Container,
  Text,
} from './styles'

const Button = ({text, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  )
};

export default Button;
