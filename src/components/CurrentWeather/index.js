import moment from 'moment';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components'

import {
  Container,
  Title,
  Subtitle,
  Time,
  Temperature,
  DayType,
  Description,
  Animation,
} from './styles'

const CurrentWeather = () => {
  const theme = useTheme()
  const weather = useSelector(state => state.weather.data);
  const address = useSelector(state => state.address.data);

  moment.locale('pt-br')
  const now = moment(new Date()).format('ll')

  if(address && address.length && weather) {
    return (
      <Container>
        <Title>{address[0].local_names.pt}</Title>
        <Subtitle>{address[0].state}, {address[0].country}</Subtitle>
        <Time>{now}</Time>
        <Animation />
        <Temperature>{weather.current.temp}º</Temperature>
        <DayType>{weather.current.weather[0].description}</DayType>
        <Description>{theme.message}</Description>
      </Container>
    )
  }

  return null
};

export default CurrentWeather;
