import moment from 'moment';

import formatNumber from '../../../utils/formatNumber';
import Animation from '../../Animation';
import { Container, Content, Text, TextAux } from './styles';

const HourlyBoxItem = ({ day }) => {
    const time = moment(day.dt * 1000).format('dddd');
    return (
      <Container>
        <Content>
          <Text>{time}</Text>
        </Content>
        <Content>
          <Animation weather={day} night={false} />
        </Content>
        <Content>
          <TextAux>Min</TextAux>
          <Text>{formatNumber(day.temp.min)}º</Text>
        </Content>
        <Content>
          <TextAux>Max</TextAux>
          <Text>{formatNumber(day.temp.max)}º</Text>
        </Content>
      </Container>
    )
};

export default HourlyBoxItem;
