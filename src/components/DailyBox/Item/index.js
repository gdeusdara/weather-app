import moment from 'moment';

import formatNumber from '../../../utils/formatNumber';
import Animation from '../../Animation';
import { Container, Content, Text, TextAux } from './styles';

const HourlyBoxItem = ({ day }) => {
    moment.locale('pt-br')

    const time = moment(day.dt * 1000).format('dddd');
    return (
      <Container>
        <Content>
          <Text>{time}</Text>
        </Content>
        <Content>
          <Animation weather={day} />
        </Content>
        <Content>
          <TextAux>Min</TextAux>
          <Text>{formatNumber(day.temp.min)}</Text>
        </Content>
        <Content>
          <TextAux>Max</TextAux>
          <Text>{formatNumber(day.temp.max)}</Text>
        </Content>
      </Container>
    )
};

export default HourlyBoxItem;
