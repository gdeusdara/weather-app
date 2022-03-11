import InfoBox from '../InfoBox';
import {Container, Content, Text, View} from './styles'
const SmallInfoBox = ({ title, value, unity}) => {

  return (
    <View>
      <InfoBox title={title}>
        <Container>
          <Content>
            <Text big>{value}</Text>
            <Text>{unity}</Text>
          </Content>
        </Container>
      </InfoBox>
    </View>
  )
};

export default SmallInfoBox;
