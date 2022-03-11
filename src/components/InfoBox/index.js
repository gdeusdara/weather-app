import {
  Container,
  Title,
  Content
} from './styles'

const InfoBox = ({title, children}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  )
};

export default InfoBox;
