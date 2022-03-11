import { Lottie } from '../BasicCompoents';
import Button from '../Button';
import {
  Container,
  Title,
} from './styles'

const InfoScreen = ({title, source, onPress}) => {
  return (
    <Container>
      <Lottie source={source} size={200} />
      <Title>{title}</Title>
      {onPress ? (
        <Button text="Tentar novamente" onPress={onPress} />
      ) : null}
    </Container>
  )
};

export default InfoScreen;
